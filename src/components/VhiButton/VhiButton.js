import React from 'react'

export default function VhiButton({ text, handleClick, clsName }) {

    const onClickBtn = () => {
        if(handleClick) handleClick();
    };
    return (
        <div>
            <button className={`td-btn ${clsName}`} onClick={onClickBtn}>{text}</button>
        </div>
    )
}
