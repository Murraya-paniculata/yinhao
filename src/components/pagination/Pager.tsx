import React from 'react'
import './index.css';

interface Ipager {
    limit: number;
    total: number;
    pannerNumber: number;
    current: number;
    onPageChange: (newPage: number) => void
}

export default function Pager(props: Ipager) {

    console.log(props);
    
    const { limit, total, pannerNumber, current, onPageChange } = props;
    // 计算最小的数字
    const minNumber = getMinNumber(props);
    const pageNumber = getPageNumber(props);
    const maxNumber = getMaxNumber(minNumber, pageNumber, props);
    const numbers = [];
    for(let i = minNumber; i <= maxNumber; i++) {
        numbers.push(
            <span 
                key={i}
                onClick={()=> {
                    onPageChange(i)
                } }
                className={i === current ? "item active": "item"}>
                {i}
            </span>
        )
    }
    return (
        <>
            <span className='item' onClick={() => {
                onPageChange(1)
            }}>首页</span>
            <span className='item' onClick={() => {
                if(current === 1) return;
                onPageChange(current - 1);
            }}>上一页</span>
            {numbers}
            <span className='item' onClick={() => {
                if(current === pageNumber) return;
                onPageChange(current + 1);
            }}>下一页</span>
            <span className='item' onClick={() => {
                onPageChange(pageNumber); 
            }}>尾页</span>
        </>
  )
}

function getMinNumber(props: Ipager) {
    let min = props.current - Math.floor(props.pannerNumber / 2);
    if(min < 1) {
        min = 1;
    }
    return min;
}

function getMaxNumber(min: number,pageNumber: number, props: Ipager) {
    let max = min + props.pannerNumber - 1;
    if(max > pageNumber) {
        max = pageNumber;
    }
    return max;
}

function getPageNumber(props: Ipager) {
    return Math.floor(props.total / props.limit)
}