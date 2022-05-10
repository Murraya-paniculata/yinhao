import React, { useCallback, useState } from 'react'
import QqBox from './QqBox';
import "./index.css";
import { fetchQqInfoByNumber } from '../utils/server'
import { useDebounce } from "../hooks/useDebounce";
import Loading from "./Loading";
import Empty from './Empty';

export interface IQqBox {
    qlogo: string | undefined,
    name: string | undefined;
    qq: string | undefined;
}

export default function Search() {
    const [qqBoxProps, setQqBoxProps] = useState<null | IQqBox>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState('');
    const [verifyError, setVerifyError] = useState(false);
    const [searchError, setSearchError] = useState(false);

    /////////////////////////////////////////////////////////
    /// debounce optimization 
    /// time default 1s
    /////////////////////////////////////////////////////////
    var searchHandler = useDebounce(async function searchqq() {
        setIsLoading(true);
        try {
           const { data } =  await fetchQqInfoByNumber(inputValue);
           if(data.code === 1){
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
        } catch (error) {
            setIsLoading(false)
        }
    }, 1000)

    const changeValue = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setInputValue(e.target.value);
            const reg = /^[1-9]\d*$/;
            if(!reg.test(e.target.value.trim())) { // remove leading and trailing spaces
                setVerifyError(true);
                if(e.target.value==="") {
                    setVerifyError(false);
                }
            } else {
                setVerifyError(false);
                searchHandler();
            }
       },
       [],
    )
    

  return (
    <div className='search'>
        <div style={{marginBottom: 30}}>
            <h1>QQ号查询</h1>
            <p style={{fontSize: 12, color: "green"}}>QQ号事例：1395039366</p>
            <label>QQ:</label>
            &nbsp;&nbsp;&nbsp;
            <input type="text" placeholder='请输入QQ号' value={inputValue} onChange={(e) => changeValue(e)} />
        </div>
        { 
            verifyError ? <span style={{color: "red", fontSize: 14}}>请输入正确的QQ号</span> : null
        }
        {
            qqBoxProps ? <QqBox {...qqBoxProps} /> : searchError ? <Empty>暂无数据，请稍后重试</Empty> : null
        }
        {
            isLoading ? <Loading /> : null
        }
    </div>
  )
}
