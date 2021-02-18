import React, {useState, useEffect} from 'react'
import './SideMenu.css';

export default function SideMenu({ vvisible }) {
    const [visible, setVisible] = useState(vvisible);
    const items = [
        { name: 'home' },
        { name: 'contact' },
        { name: 'about us' },
        { name: 'shop' },
        { name: 'locations' },
    ];

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
                <div className="t-side-menu__logo">

                </div>
                <div className="td-side-menu__list--s">
                    <div className="td-side-menu__list">
                        {items.map(i => <div key={i.name} className="td-side-menu__list__item">{i.name}</div>)}
                    </div>
                </div>
            </div>
            <div
                onClick={onClickModal} 
                className={`td-modal td-side-menu__modal ${visible.value ? 'show' : 'hide'}`}
            >
            </div>
        </div>
    )
}
