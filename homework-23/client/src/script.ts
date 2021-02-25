import { div, get, a, img, span } from './utils';

interface ObjectCharacter {
  id:number;
  name:string;
  status:string;
  species:string;
  type:string;
  gender:string;
  origin:{
    name:string;
    url:string
  };
  location:{
    name:string;
    url:string
  };
  image:string;
  episode:string[];
  url:string;
  creader:string;
}

function GetPerson (arr:ObjectCharacter[], number:number):ObjectCharacter[] {
  const newArrPersons:ObjectCharacter[] = [];
  for (let i = 0; i < number; i++){
    newArrPersons.push(arr[(Math.floor(Math.random() * Math.floor(20)))])
  }
  return newArrPersons;
}

const getPokemon = () => fetch('https://rickandmortyapi.com/api/character');
getPokemon().then((response) => (response.json())).then((data) => {
    const arrPersons = GetPerson(data.results, 6);
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
              setActualSlide(currentSlide === arrPersons.length - 1 ? arrPersons.length - 1 : currentSlide + 1);
            },
          },
          children: ['❯'],
        }),
        ...(cards = arrPersons.map((user, i) =>
          div({
            classNames: ['mySlides', 'fade', !i ? 'active' : 'hide'],
            children: [
              div({
                classNames: ['numbertext'],
                children: [`${i + 1}/${arrPersons.length}`],
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
      children: (dots = arrPersons.map((_, i) =>
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