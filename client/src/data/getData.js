import axios from 'axios';
import {url, heads, paramsParseLaminate, paramsParseParquet, paramsParseLinoleum, paramsParseBacking} from './data';

const filterRes = (res = [], str = '') => {
  if (res.length === 0 || str === '') return res;
  const newRes = res.filter(el => {
    const newPrice = parseFloat(el?.price.replace(/\s/g, ''));
    el.price = newPrice;
    return el?.title.toLowerCase().includes(str);
  })
  return newRes;
}


const search = async (data, setParseResult = () => {}, str = '') => {
  try {
    await axios.post(url, {...data}, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      const result = filterRes(response.data, str);
      setParseResult(result);
    })
  } catch (error) {
    console.error(error)
  }        
}

export const searchLaminate = async (setParseResult, dopAttr, headsBD = {}, setShowSpinner = () => {}) => {
  const newLink = paramsParseLaminate?.link + dopAttr;
  const data = {...paramsParseLaminate, 'link': newLink, 'heads': headsBD};
  await search(data, setParseResult, 'ламинат');
  setShowSpinner(false);
}

export const searchParquet = async (setParseResult, dopAttr, headsBD = {}, setShowSpinner = () => {}) => {
  const newLink = paramsParseParquet?.link + dopAttr;
  const data = {...paramsParseParquet, 'link': newLink, 'heads': headsBD};
  await search(data, setParseResult, 'паркетная');
  setShowSpinner(false);
}

export const searchLinoleum = async (setParseResult, dopAttr, headsBD = {}, setShowSpinner = () => {}) => {
  const newLink = paramsParseLinoleum?.link + dopAttr;
  const data = {...paramsParseLinoleum, 'link': newLink, 'heads': headsBD};
  await search(data, setParseResult, 'линолеум');
  setShowSpinner(false);
}

export const searchBacking = async (setParseResult, dopAttr, headsBD = {}, setShowSpinner = () => {}) => {
  const newLink = paramsParseBacking?.link + dopAttr;
  const data = {...paramsParseBacking, 'link': newLink, 'heads': headsBD};
  await search(data, setParseResult, 'подложка');
  setShowSpinner(false);
}
