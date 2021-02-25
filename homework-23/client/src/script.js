"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
function GetPockemon(arr) {
    return arr[(Math.floor(Math.random() * Math.floor(250)))];
}
var getPokemon = function () { return fetch('https://api.pokemontcg.io/v2/cards'); };
getPokemon().then(function (response) { return (response.json()); }).then(function (data) {
    var arrPockemons = [
        new GetPockemon(data.data), new GetPockemon(data.data),
        new GetPockemon(data.data), new GetPockemon(data.data),
        new GetPockemon(data.data), new GetPockemon(data.data)
    ];
    console.log(arrPockemons);
    var app = document.getElementById('app');
    var currentSlide = 0;
    var cards, dots;
    var setActualSlide = function (index) {
        cards.forEach(function (slide) { return slide.classList.remove('active'); });
        dots.forEach(function (dot) { return dot.classList.remove('active'); });
        cards[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    };
    var wrapper = utils_1.div({
        classNames: ['slideshow-container'],
        children: __spreadArrays([
            utils_1.a({
                classNames: ['prev'],
                listeners: {
                    click: function () {
                        setActualSlide(!currentSlide ? 0 : currentSlide - 1);
                    },
                },
                children: ['❮'],
            }),
            utils_1.a({
                classNames: ['next'],
                listeners: {
                    click: function () {
                        setActualSlide(currentSlide === arrPockemons.length - 1 ? arrPockemons.length - 1 : currentSlide + 1);
                    },
                },
                children: ['❯'],
            })
        ], (cards = arrPockemons.map(function (user, i) {
            return utils_1.div({
                classNames: ['mySlides', 'fade', !i ? 'active' : 'hide'],
                children: [
                    utils_1.div({
                        classNames: ['numbertext'],
                        children: [i + 1 + "/" + arrPockemons.length],
                    }),
                    utils_1.img({
                        classNames: ['slider-image'],
                        src: '',
                    }),
                    utils_1.div({
                        classNames: ['text'],
                        children: [user.name],
                    }),
                ],
            });
        }))),
    });
    var dotsWrapper = utils_1.div({
        classNames: ['dots-wrapper'],
        children: (dots = arrPockemons.map(function (_, i) {
            return utils_1.span({
                classNames: ['dot', !i ? 'active' : 'hide'],
                listeners: {
                    click: function () { return setActualSlide(i); }
                }
            });
        })),
    });
    app.append(wrapper);
    app.append(dotsWrapper);
});
