// 跑马灯效果
import React, { useEffect, useState } from 'react';
import "./index.css";
import src1 from "../../assets/1.jpg";
import src2 from "../../assets/2.jpg";
import src3 from "../../assets/3.jpg";

const srcs = [src1, src2, src3];

/////////////////////////////////////////////////////////////
//// 简单跑马灯效果
//// 移入暂停 移出继续
/////////////////////////////////////////////////////////////

export default function Marquee() {
    var timer: any;
    const [index, setIndex] = useState(0);

    function exchange() {
        timer = setTimeout(() => {
            setIndex((index + 1) % 3);
        }, 2000)
    }

    useEffect(() => {
        exchange()
        return () => {
            clearTimeout(timer);
        }
    }, [index])

    return (
        <div className='warrp'>
            <img src={srcs[index]} alt="img" onMouseEnter={() => {
                clearTimeout(timer);
            }} onMouseLeave={() => {
                exchange();
            }} />
            <p>{index+1} / {srcs.length}</p>
        </div>
    )
}
