import React from 'react';

import logo from '../../assets/RocktBox-Icon-Def.svg';
import './styles.css';

function Main() {

    return(

        <div id="main-container">
            <form action="">
                <img src={logo} alt=""/>
                <input 
                    placeholder="Criar pasta"
                />
                <button type="submit" >Criar </button>
            </form>
        </div>

    );

}

export default Main;