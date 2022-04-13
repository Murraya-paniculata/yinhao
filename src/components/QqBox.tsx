import React from 'react'
import './index.css';
import { IQqBox } from './Search';

export default function QqBox(props: IQqBox) {
    const { qlogo, name, qq } = props;
  return (
    <div className='qq__box'>
        <img src={qlogo} alt="img" />
      <div>
          <b>{name}</b>
          <span>{qq}</span>
      </div>
    </div>
  )
}
