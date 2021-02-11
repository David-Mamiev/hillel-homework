import { div, get } from './utils';

get('/get').then((data) =>{
    const app = document.getElementById('app');
    let currentSlide = 0;
    const wrapper = div({
        classNames: ['gallery'],
        children: [
            div({
                classNames:['gellery__prev__wrapper'],
                listeners: {
                    click: () => {
                        currentSlide = !currentSlide ? 0 : currentSlide - 1;
                        console.log(currentSlide);
                    },
                },
                children: ['<'],
            }),
            div({
                classNames:['gellery__next__wrapper'],
                listeners: {
                    click: () => {
                        currentSlide = currentSlide === data.length ? data.length : currentSlide + 1;
                        console.log(currentSlide);
                    },
                },
                children: ['>'],
            }),
            div({
                classNames:['gellery__cards__wrapper'],
                children:data.map((user) => {
                    const card = div({
                        classNames: ['card'],
                        children: [
                            div({
                                classNames: ['card-header'],
                                children: [user.name],
                            }),
                            div({
                                classNames: ['card-body'],
                                children: [user.level],
                            }),
                        ],
                    });
                    return card;
                }),
                
            }),
        ],
    });
    console.log(wrapper);
    app.append(wrapper);
});
