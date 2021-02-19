import React from 'react'
import btnStyle from './VhiButton.module.css';

export default function VhiButton({ text, handleClick, clsName }) {

    // state space

    // controller space
    const onClickBtn = () => {
        if(!handleClick || typeof handleClick !== 'function') return;
        handleClick();
    };

    // view space
    return (
        <button 
            className={`${btnStyle['td-btn']} ${clsName}`} 
            onClick={onClickBtn}>{text}</button>
    )
}
