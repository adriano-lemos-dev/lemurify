import React from 'react';
import './app.css';
import Image from '../assets/lemos.jpg';
import Pearls from './pearls/pearls';

export const App = (props) => {
    return (
        <div className='container'>
            <img src={Image} />
            <Pearls />
        </div>
    )
};
