import React, {useState, useContext} from 'react';
import {ParseResultContext} from '../../context/ParseResultContext';
import {backingType, backingMaterial} from '../../data/requestsData';
import {searchBacking} from '../../data/getData';
import InputSelectX from '../InputSelectX/InputSelectX';
import './CardParamsMaterials.scss';

const initValueSelects = {
  'type': backingType[0].value,
  'material': backingMaterial[0].value
}

const CardParamsBacking = (props) => {
  const {headsBD = {}, setShowSpinner = () => {}} = props;
  const [valueSelects, setValueSelects] = useState(initValueSelects);
  const {parseResult, setParseResult} = useContext(ParseResultContext);

  const handleChangeSelect = (e) => {
    setValueSelects({...valueSelects, [e.target.name]: e.target.value});
  }

  const handleClick = () => {
    const dopAttr = valueSelects.type + valueSelects.material;
    setShowSpinner(true);
    searchBacking(setParseResult, dopAttr, headsBD, setShowSpinner);
  }

  return (
    <div className="card-params">
      <p className="card-params__title">Подложка</p>
      <div className="card-params__block-img">
        <img src='img/backing.jpg' className="card-params__img" alt=''/>
      </div>
      <div className='card-params__input'>
        <p className='card-params__label'>Выберите тип</p>
        <InputSelectX 
          name='type' 
          options={backingType} 
          onChangeSelect={handleChangeSelect}
        />
      </div>
      <div className='card-params__input'>
        <p className='card-params__label'>Выберите материал</p>
        <InputSelectX 
          name='material' 
          options={backingMaterial} 
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

export default CardParamsBacking;
