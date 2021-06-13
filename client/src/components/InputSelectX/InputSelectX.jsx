import React from 'react';
import './InputSelectX.scss';

const InputSelectX = (props) => {
  const {
    name = '', 
    classes = '',
    placeholder = '', 
    options = [],
    onChangeSelect = (e) => {console.log('e', e)},
  } = props;
  const renderOptions = options.map((el, i) => (
    <option key={i} value={el.value}>{el.text}</option>
  ))
  return (
    <div className='select-x'>
      <select
        name={name}
        className={'select-x__select browser-default' + classes}
        placeholder={placeholder}
        onChange={(e) => onChangeSelect(e)}
      >
        {renderOptions}
      </select>
    </div>
  );
};

export default InputSelectX;
