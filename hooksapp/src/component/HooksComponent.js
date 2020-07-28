import React,{useState} from 'react';

function HookComponent(){
    const [title] = useState('NareshIT');
    const [topic] = useState('Developer Funnel');
    const [count,setCount] = useState(0)
    const [data,setData] = useState(0)

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
        </div>
    )
}

export default HookComponent