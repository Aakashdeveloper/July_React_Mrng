import React from 'react';

function DisplayComponent(props){
    const renderNews = ({mydata}) => {
        if(mydata){
            return mydata.map((item) =>{
                return(
                    <div>
                        <h1>{item.title}</h1>
                    </div>
                )
            })
        }
    }
    return(
        <div>
            <center>
                <h2>News Details</h2>
            </center>
            {renderNews(props)}
        </div>
    )
}

export default DisplayComponent