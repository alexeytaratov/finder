import React, {useState, useContext} from 'react';
import {ParseResultContext} from '../../context/ParseResultContext';
import {parquetWoodType, parquetDesign, parquetCoating} from '../../data/requestsData';
import {searchParquet} from '../../data/getData';
import InputSelectX from '../InputSelectX/InputSelectX';
import './CardParamsMaterials.scss';

const initValueSelects = {
  'woodtype': parquetWoodType[0].value,
  'design': parquetDesign[0].value,
  'coating': parquetCoating[0].value
}

const CardParamsParquet = (props) => {
  const {headsBD = {}, setShowSpinner = () => {}} = props;
  const [valueSelects, setValueSelects] = useState(initValueSelects);
  const {parseResult, setParseResult} = useContext(ParseResultContext);

  const handleChangeSelect = (e) => {
    setValueSelects({...valueSelects, [e.target.name]: e.target.value});
  }

  const handleClick = () => {
    const dopAttr = valueSelects.woodtype + valueSelects.design + valueSelects.coating;
    setShowSpinner(true);
    searchParquet(setParseResult, dopAttr, headsBD, setShowSpinner);
  }

  return (
    <div className="card-params">
      <p className="card-params__title">Паркетная доска</p>
      <div className="card-params__block-img">
        <img src='img/parquet.jpg' className="card-params__img" alt=''/>
      </div>
      <div id='woodtype' className='card-params__input'>
        <p className='card-params__label'>Выберите породу дерева</p>
        <InputSelectX 
          name='woodtype' 
          options={parquetWoodType} 
          onChangeSelect={handleChangeSelect}
        />
      </div>
      <div id='design' className='card-params__input'>
        <p className='card-params__label'>Выберите дизайн</p>
        <InputSelectX 
          name='design' 
          options={parquetDesign} 
          onChangeSelect={handleChangeSelect}
        />
      </div>
      <div id='coating' className='card-params__input'>
        <p className='card-params__label'>Выберите покрытие</p>
        <InputSelectX 
          name='coating' 
          options={parquetCoating} 
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

export default CardParamsParquet;
