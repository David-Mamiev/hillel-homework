import { div, get, a, img, span } from './utils';

function GetPockemons (arr:object[], number:number):object[] {
  const newArrPockemons:object[] = [];
  for (let i = 0; i < number; i++){
    newArrPockemons.push(arr[(Math.floor(Math.random() * Math.floor(250)))])
  }
  return newArrPockemons;
}

const getPokemon = () => fetch('https://api.pokemontcg.io/v2/cards');
getPokemon().then((response) => (response.json())).then((data) => {
    const arrPockemons = GetPockemons(data.data, 6);
    const app:HTMLElement | null = document.getElementById('app');
    let currentSlide = 0;

    let cards:HTMLElement[], dots:HTMLElement[];

      const setActualSlide = (index:number):void => {
          cards.forEach(slide => slide.classList.remove('active'));
          dots.forEach(dot => dot.classList.remove('active'));

          cards[index].classList.add('active');
          dots[index].classList.add('active');
          currentSlide = index;
      }

    const wrapper = div({
      classNames: ['slideshow-container'],
      children: [
        a({
          classNames: ['prev'],
          listeners: {
            click: () => {
              setActualSlide(!currentSlide ? 0 : currentSlide - 1);
            },
          },
          children: ['❮'],
        }),
        a({
          classNames: ['next'],
          listeners: {
            click: () => {
              setActualSlide(currentSlide === arrPockemons.length - 1 ? arrPockemons.length - 1 : currentSlide + 1);
            },
          },
          children: ['❯'],
        }),
        ...(cards = arrPockemons.map((user, i) =>
          div({
            classNames: ['mySlides', 'fade', !i ? 'active' : 'hide'],
            children: [
              div({
                classNames: ['numbertext'],
                children: [`${i + 1}/${arrPockemons.length}`],
              }),
              img({
                classNames: ['slider-image'],
                src: '',
              }),
              div({
                classNames: ['text'],
                children: [user.name],
              }),
            ],
          })
        )),
      ],
    });

    const dotsWrapper = div({
      classNames: ['dots-wrapper'],
      children: (dots = arrPockemons.map((_, i) =>
        span({
          classNames: ['dot',  !i ? 'active' : 'hide'],
          listeners: {
              click: () => setActualSlide(i)
          }
        })
      )),
    });
  
    if (app !== null){
      app.append(wrapper);
      app.append(dotsWrapper);
    }
});