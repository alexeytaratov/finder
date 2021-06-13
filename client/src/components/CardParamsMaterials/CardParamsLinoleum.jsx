import React, {useState, useContext} from 'react';
import {ParseResultContext} from '../../context/ParseResultContext';
import {linoleumClass, linoleumDesign, linoleumPurpose} from '../../data/requestsData';
import {searchLinoleum} from '../../data/getData';
import InputSelectX from '../InputSelectX/InputSelectX';
import './CardParamsMaterials.scss';

const initValueSelects = {
  'resistance': linoleumClass[0].value,
  'design': linoleumDesign[0].value,
  'purpose': linoleumPurpose[0].value
}

const CardParamsLinoleum = (props) => {
  const {headsBD = {}, setShowSpinner = () => {}} = props;
  const [valueSelects, setValueSelects] = useState(initValueSelects);
  const {parseResult, setParseResult} = useContext(ParseResultContext);
  
  const handleChangeSelect = (e) => {
    setValueSelects({...valueSelects, [e.target.name]: e.target.value});
  }

  const handleClick = () => {
    const dopAttr = valueSelects.resistance + valueSelects.design + valueSelects.purpose;
    setShowSpinner(true);
    searchLinoleum(setParseResult, dopAttr, headsBD, setShowSpinner);
  }

  return (
    <div className="card-params">
      <p className="card-params__title">Линолеум</p>
      <div className="card-params__block-img">
        <img src='img/linoleum.jpg' className="card-params__img" alt=''/>
      </div>
      <div id='resistance' className='card-params__input'>
        <p className='card-params__label'>Выберите класс износостойкости</p>
        <InputSelectX 
          name='resistance' 
          options={linoleumClass} 
          onChangeSelect={handleChangeSelect}
        />
      </div>
      <div id='design' className='card-params__input'>
        <p className='card-params__label'>Выберите дизайн</p>
        <InputSelectX 
          name='design' 
          options={linoleumDesign} 
          onChangeSelect={handleChangeSelect}
        />
      </div>
      <div id='purpose' className='card-params__input'>
        <p className='card-params__label'>Выберите назначение</p>
        <InputSelectX 
          name='purpose' 
          options={linoleumPurpose} 
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

export default CardParamsLinoleum;
