import React,{Fragment} from 'react';

const NewsList = (props) => {

    const renderList = props.newsdata.map((data) => {
        return(
            <div>
                <h3>{data.title}</h3>
                <p>{data.feed}</p>
            </div>
        )
    })

    return(
        <Fragment>
            {renderList}
        </Fragment>
    )
}

export default NewsList;