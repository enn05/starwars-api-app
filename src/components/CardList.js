import React from 'react';
import Card from './Card';
// import { starwars } from '../starwars';


const CardList = ({ starwars }) => {
    return (
        <div>
            {
                starwars.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            name={starwars[i].name}
                            height={starwars[i].job}
                            mass={starwars[i].mass}
                        />
                    )
                })
            }
        </div>
    );
}

export default CardList;