import React from 'react';

function PhotoCard(props) {
    //console.log(props)
    return(
        <div>
            <h2>{props.title}</h2>
            <img src={props.url} alt='nasa img of the day'/>
            <p>
                {props.explanation}
            </p>
        </div>
    )
}

export default PhotoCard;