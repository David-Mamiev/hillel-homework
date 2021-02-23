import { fetchOptions, apiUrl } from './constants';
import { chain } from 'lodash';

const prepareUrl = (postFix:string) => `${apiUrl}${postFix}`;
const responseToJson = (response:any) => response.json();

export const get = (url:string = '/') =>
  fetch(prepareUrl(url), fetchOptions('get')).then(responseToJson);

export const addClasses = (el:any, classes = []) => {
  const newElement = el.cloneNode();
  newElement.classList.add(...classes);
  return newElement;
};

export const appendChildren = (el:any, children = []) => {
  const newElement = el.cloneNode();
  children.forEach((child) => {
    if (child !== null && typeof child !== 'object') {
      newElement.append(document.createTextNode(child));
    } else if (child !== null) {
      newElement.append(child);
    }
  });
  return newElement;
};

interface ObjElement {
  children:[],
  classNames:[],
  listeners:{},
  additionalProps:[]
}


export const element = (
  tagName:string,
  { children, classNames, listeners, ...additionalProps }:ObjElement
) =>
  chain(document.createElement(tagName))
    .thru((el:any) => addClasses(el, classNames))
    .thru((el:any) => appendChildren(el, children))
    .tap((el:any) => {
      Object.entries(listeners).forEach(([listener, callback]) => {
        el.addEventListener(listener, callback);
      });
    })
    .value();



export const div = (props:any) => element('div', props);
export const a = (props:any) => element('a', props);
export const img = (props:any) => element('img', props);
export const span = (props:any) => element('span', props);