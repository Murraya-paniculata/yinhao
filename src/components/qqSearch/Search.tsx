import React, { useState } from 'react'
import QqBox from './QqBox';
import "./index.css";
import { get } from '../../utils/require'
import { debounce } from "../../utils/deounce";
import Loading from "./Loading";

export interface IQqBox {
    qlogo: string,
    name: string;
    qq: string;
}

export default function Search() {
    const [qqBoxProps, setQqBoxProps] = useState<null | IQqBox>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState('');
    const [verifyError, setVerifyError] = useState(false);
    const [searchError, setSearchError] = useState(false);

    /////////////////////////////////////////////////////////
    /// 这里使用函数防抖优化数据请求，防止在短时间内用户重复发起请求时
    /////////////////////////////////////////////////////////
    var searchHandler = debounce(async function searchqq() {
        // 对于重复的请求不做处理
        if(qqBoxProps && qqBoxProps.qq === inputValue) return;
        setIsLoading(true);
        get({
            url: "https://api.uomg.com/api/qq.info",
            params: {
                qq: inputValue
            }
        }).then((data: any) => {
            console.log(data);
            if(data.code === 1) {
                setSearchError(false);
                setQqBoxProps({
                    name: data.name,
                    qlogo: data.qlogo,
                    qq: data.qq
                })
            } else {
                alert(data.msg);
                setSearchError(true);
                setQqBoxProps(null);
            }
            setIsLoading(false)
        }).catch((err) => {
            setIsLoading(false)
        })
    }, 200)

    const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        const reg = /^[1-9]\d*$/;
        if(!reg.test(e.target.value)) {
            setVerifyError(true);
            if(e.target.value==="") {
                setVerifyError(false);
            }
        } else {
            setVerifyError(false);
        }
    }

  return (
    <div className='search'>
        <div style={{marginBottom: 30}}>
            <h1>QQ号查询</h1>
            <p style={{fontSize: 12, color: "green"}}>QQ号事例：1395039366</p>
            <label>QQ:</label>
            &nbsp;&nbsp;&nbsp;
            <input type="text" placeholder='请输入QQ号' value={inputValue} onChange={(e) => changeValue(e)}
                onKeyUp={(key) => {
                if(key.keyCode === 13){
                    searchHandler();
                }
            }} />
        </div>
        { 
            verifyError ? <span style={{color: "red", fontSize: 14}}>请输入正确的QQ号</span> : null
        }
        {
            qqBoxProps ? <QqBox {...qqBoxProps} /> : searchError ? <div>暂无数据，请稍后重试</div> : null
        }
        {
            isLoading ? <Loading /> : null
        }
    </div>
  )
}
