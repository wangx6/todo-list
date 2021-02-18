import React, {useState, useEffect} from 'react'
import './SideMenu.css';

export default function SideMenu({ vvisible }) {
    const [visible, setVisible] = useState(vvisible);

    useEffect(() => {
        setVisible(vvisible);
    }, [vvisible]);


    const onClickModal = () => {
        setVisible(false)
    }

    return (
        <div className={`td-side-menu`}>
            <div 
                className={`td-side-menu__menu ${visible.value ? 'show' : 'hide'}`}
            >
            </div>
            <div
                onClick={onClickModal} 
                className={`td-modal td-side-menu__modal ${visible.value ? 'show' : 'hide'}`}
            >
            </div>
        </div>
    )
}
