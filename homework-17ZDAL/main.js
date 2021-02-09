const { readJSON, writeJSON } = require('./utils/main');
const { readFile } = require('fs');
const { resolve } = require('path');
const http = require("http");
const { join } = require('path');

const usersAddr = join(__dirname, './users.json');
const levelsAddr = join(__dirname, './levels.json');



const collectRequestData = (request, cb) => {
    const FORM_URLENCODED = 'application/json';
    if(request.headers['content-type'] === FORM_URLENCODED) {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            cb(body);
        });
    }
    else {
        cb(null);
    }
}

const get = (req, res) => {
    res.writeHead(200, {
        ["Content-Type"]: 'application/json',
    });

    readJSON(usersAddr, (_, data) => {
     res.end(JSON.stringify(data));
    })
};

const add = (req, res, body) => {
    res.writeHead(200, {
        ["Content-Type"]: 'application/json',
    });
    readJSON(usersAddr, (_, data) => {
        const lastUser = data[data.length - 1];
        const newData = [
            ...data,
            {
                ...body,
                id: ((lastUser && lastUser.id) || 0) + 1,
            },
        ];
        writeJSON(usersAddr, newData, () => {
            res.end(JSON.stringify(newData));
        });
    });
};
const patch = (req, res, body) => {
    res.writeHead(200, {
        ["Content-Type"]: 'application/json',
    });
    readJSON(usersAddr, (_, data) => {
        const index = data.findIndex(el => el.id === Number(req));
        if(body.name) {
            data[index].name = body.name;
        } if(body.level) {
            data[index].level = body.level;
        }
        data[index].id = Number(req);
        writeJSON(usersAddr, data, () => {
            res.end(JSON.stringify(data));
        });
    });
};
const deleteMethod = (req, res) => {
    readJSON(usersAddr, (_, data) => {
        writeJSON(usersAddr, [...data].filter(el => el.id !== Number(req)), () => {
            res.end(JSON.stringify([...data].filter(el => el.id !== Number(req))));
        });
    });
    readJSON(usersAddr, (_, data) => {
        res.end("Deleted!");
    });
};


const route = (req, res, data) => {
    const parsedUrl = req.url.split("/").filter((part)=>part);
    switch(parsedUrl[0]){
        case "get":
            get(req, res);
            break;
        case "add":
            add(req, res, data);
            break;
        case "patchUser":
            patch(parsedUrl[1], res, data);
            break;
        case "deleteUser":
            deleteMethod(parsedUrl[1], res);
            break;
        default:
            res.end("Hello man");
    }
};

const server = http.createServer((req, res) => {
    const reqMethod = req.method;
    const reqUrl = req.url;
    let body = [];
    req
        .on('data', (chunk) => {
            body.push(chunk);
        })
        .on('end', () => {
            body = Buffer.concat(body).toString();
            route(req, res, body ? JSON.parse(body) : undefined);
        });
});

server.listen(8080, () => {
    console.log("You can reach the server here http://localhost:8080");
});