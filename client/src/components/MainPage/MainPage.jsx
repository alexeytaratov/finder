import React, {useState, useContext, useEffect} from 'react';
import axios from 'axios';
import CardParamsLaminate from '../CardParamsMaterials/CardParamsLaminate';
import CardParamsParquet from '../CardParamsMaterials/CardParamsParquet';
import CardParamsLinoleum from '../CardParamsMaterials/CardParamsLinoleum';
import CardParamsBacking from '../CardParamsMaterials/CardParamsBacking';
import {ParseResultContext} from '../../context/ParseResultContext';
import Spinner from '../Spinner/Spinner';
import './MainPage.scss';

const MainPage = () => {
  const {parseResult, setParseResult} = useContext(ParseResultContext);
  const [requests, setRequests] = useState({});
  const [showSpinner, setShowSpinner] = useState(null);
  const [count, setCount] = useState('1');

  useEffect(() => {
    async function fetchData() {
      try {
        await axios.get('/api/requests', {
          headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
          setRequests(response.data[0]?.heads)
        })
      } catch (error) {
        console.log('error')
      }
      }
    fetchData();
  }, []);

  const handleChangeInput = (e) => {
    let number = Math.trunc(+(e.target.value.replace(/[^\d]/g, '')));
    if (number < 1) number = 1; 
    if (number > 9999) number = 9999; 
    setCount(number);
  }

  if (parseResult?.length > 20) parseResult.length = 20;

  const renderNotFound = 
    <div className='material-card__not-found'>
      Таких товаров не найдено, попробуйте смягчить условия поиска...
    </div>

  const renderInput = 
    <div className="main-page__count">
      <label htmlFor="count" className="main-page__count-label">
        Введите требуемое количество материала от 1 до 9999 (м²)
      </label>
      <input 
        type="number" 
        name="count" 
        id="count" 
        className='main-page__count-input'
        min='1'
        max="9999"
        value={count}
        step='1'
        onChange={(e) => handleChangeInput(e)}
      />
    </div>

  const materialList = parseResult.map(e => (
    <a href={e.linkEl} key={e.linkEl} className='material-card' target='_blank' >
      <div className='material-card__block-img'>
        <img className='material-card__img' src={e.imgUrl} alt='' />
      </div>
      <h3 className='material-card__name'>{e.title}</h3>
      <div className="material-card__footer">
        <p className='material-card__price'><span>{e.price}</span>₽/м²</p>
        <p className='material-card__cost'>Стоимость {count} м²: <span>{e.price * count}</span>₽</p>
      </div>   
    </a>
  ))

  return (
    <div className='container'>
      <div className="main-page">
        <div className="main-page__header">
          <h1 className="main-page__logo">
            Приложение для поиска материалов напольных покрытий
          </h1>
        </div>
        <div className="row main-page__cards">
          <CardParamsLaminate headsBD={requests} setShowSpinner={setShowSpinner} />
          <CardParamsParquet headsBD={requests} setShowSpinner={setShowSpinner} />
          <CardParamsLinoleum headsBD={requests} setShowSpinner={setShowSpinner} />
          <CardParamsBacking headsBD={requests} setShowSpinner={setShowSpinner} />
        </div>
        {renderInput}
        <h2 className="row main-page__title">Найденные материалы</h2>
        <div className="row main-page__result">
          {(!(showSpinner === null || showSpinner) && parseResult.length === 0) && renderNotFound}
          {materialList}
          {showSpinner && <Spinner/>}
        </div>
      </div>
    </div>
  )
}

export default MainPage;
