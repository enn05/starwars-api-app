import React from 'react'
// import {starwars} from '../starwars';

const Card = ({name, height, mass}) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <div>
                <h2>{name}</h2>
                <p>Height: {height}</p>
                <p>Mass: {mass}</p>
            </div>
        </div>
    )
}

export default Card;