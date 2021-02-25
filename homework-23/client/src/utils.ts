import { fetchOptions, apiUrl } from './constants';
import { chain } from 'lodash';

const prepareUrl = (postFix:string):string => `${apiUrl}${postFix}`;
const responseToJson = (response:any):any => response.json();

export const get = (url:string = '/'):object =>
  fetch(prepareUrl(url), fetchOptions('get')).then(responseToJson);

export const addClasses = (el:any, classes = []):HTMLElement => {
  const newElement:HTMLElement = el.cloneNode();
  newElement.classList.add(...classes);
  return newElement;
};

export const appendChildren = (el:any, children = []):HTMLElement => {
  const newElement:HTMLElement = el.cloneNode();
  children.forEach((child) => {
    if (child !== null && typeof child !== 'object') {
      newElement.append(document.createTextNode(child));
    } else if (child !== null) {
      newElement.append(child);
    }
  });
  return newElement;
};


export const element = (
  tagName:string,
  {  classNames, children, listeners, ...additionalProps }:any[any]
):HTMLElement =>
  chain(document.createElement(tagName))
    .thru((el:any) => addClasses(el, classNames))
    .thru((el:any) => appendChildren(el, children))
    .tap((el:any) => {
      Object.entries(listeners).forEach(([listener, callback]) => {
        el.addEventListener(listener, callback);
      });
    })
    .value();

 
export const div = (props:any):HTMLElement => element('div', props);
export const a = (props:any):HTMLElement => element('a', props);
export const img = (props:any):HTMLElement => element('img', props);
export const span = (props:any):HTMLElement => element('span', props);