const { readJSON, writeJSON } = require('./utils/main');
const { readFile } = require('fs');
const { resolve } = require('path');
const http = require("http");
const { join } = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const usersAddr = join(__dirname, './users.json');
const levelsAddr = join(__dirname, './levels.json');


app.use(express.json());
app.use(bodyParser.json());

app.get('/get', (req, res) => {
    readJSON(usersAddr, (_, data) => {
        res.send(data);
    });
});


app.delete("/:id", ({ params }, res) => {
    const { id } = params;
    readJSON(usersAddr, (_, data) => {
        const obj = data.find(el => el.id == id);
        delete data[id-1];
        const newArr = [...data].filter(el => el !== undefined);
        writeJSON(usersAddr, newArr, () => {
            res.end(JSON.stringify(newArr));
        });
    });
    readJSON(usersAddr, (_, data) => {
        res.send("Deleted!");
    });
});

app.patch('/:id', ({ body, params }, res) => {
    const { id } = params;
    readJSON(usersAddr, (_, data) => {
        const index = data.findIndex(el => el.id == id);
        data[index] = body;
        data[index].id = Number(id);
        writeJSON(usersAddr, data, () => {
            res.end(JSON.stringify(data));
        });
    });
    res.send('Patched');
});

app.post('/add', ({ body }, res) => {
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
            res.send(newData);
        });
    });
});

app.get('/', (req, res) => {
    res.send('Hello man!');
});

app.listen(port, () => {
    console.log(`Listening http://localhost:${port}`);
});