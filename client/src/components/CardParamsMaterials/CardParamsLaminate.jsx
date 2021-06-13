import React, {useState, useContext} from 'react';
import {ParseResultContext} from '../../context/ParseResultContext';
import {laminateClass, laminateDesign} from '../../data/requestsData';
import {searchLaminate} from '../../data/getData';
import InputSelectX from '../InputSelectX/InputSelectX';
import './CardParamsMaterials.scss';

const initValueSelects = {
  'resistance': laminateClass[0].value,
  'design': laminateDesign[0].value
}

const CardParamsLaminate = (props) => {
  const {headsBD = {},  setShowSpinner = () => {}} = props;
  const [valueSelects, setValueSelects] = useState(initValueSelects);
  const {parseResult, setParseResult} = useContext(ParseResultContext);

  const handleChangeSelect = (e) => {
    setValueSelects({...valueSelects, [e.target.name]: e.target.value});
  }

  const handleClick = () => {
    const dopAttr = valueSelects.resistance + valueSelects.design;
    setShowSpinner(true);
    searchLaminate(setParseResult, dopAttr, headsBD, setShowSpinner);
  }

  return (
    <div className="card-params">
      <p className="card-params__title">Ламинат</p>
      <div className="card-params__block-img">
        <img src='img/laminate.jpg' className="card-params__img" alt=''/>
      </div>
      <div id='resistance' className='card-params__input'>
        <p className='card-params__label'>Выберите класс износостойкости</p>
        <InputSelectX 
          name='resistance' 
          options={laminateClass} 
          onChangeSelect={handleChangeSelect}
        />
      </div>
      <div id='design' className='card-params__input'>
        <p className='card-params__label'>Выберите дизайн</p>
        <InputSelectX 
          name='design' 
          options={laminateDesign} 
          onChangeSelect={handleChangeSelect}
        />
      </div>
      <div className='card-params__btn-block'>
        <button
          className="card-params__btn waves-effect" 
          onClick={handleClick}
        >Найти</button>
      </div>
    </div>
  );
};

export default CardParamsLaminate;
