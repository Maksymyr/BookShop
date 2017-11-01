import React from 'react';

import Menu from '../components/Menu';
import Slider from '../components/Slider';


const Header = (props) => (
    <header className="header">
        <h1 className="page-title">React Lesson: 4 [ context, Children API ]</h1>
     
        <Slider>
            <p>Степа</p>
            <p>Препод</p>
            <p>У нас</p>
            <p>А Максим - </p>
            <p>МО</p>
            <p>ЛО</p>
            <p>ДЕЦ!</p>
            
            
        </Slider>
        <Menu/>
    </header>
);

export default Header;