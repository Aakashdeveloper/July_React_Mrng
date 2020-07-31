import React,{useState,useEffect} from 'react';
import DisplayNews from './DisplayNews';

const url = "http://localhost:8900/news";

function HookComponent(){
    const [title] = useState('NareshIT');
    const [topic] = useState('Developer Funnel');
    const [count,setCount] = useState(0)
    const [data,setData] = useState(0)
    const [news,setNews] = useState()

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setNews(data)
        })
    },[news])

    return(
        <div>
            <h1>Hooks</h1>
            <h2>{title}</h2>
            <h2>{topic}</h2>
            <h2>{count}</h2>
            <button onClick={() => {setCount(count+1)}}>
                Click
            </button>
            <h2>{data}</h2>
            <button onClick={() => {setData(data+1)}}>
                Click
            </button>
            <DisplayNews mydata={news}/>
        </div>
    )
}

export default HookComponent