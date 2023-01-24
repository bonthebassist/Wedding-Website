import React from 'react'

import Mains from '../../resources/images/Menu/Mains.jpg';
import Dessert from '../../resources/images/Menu/Dessert.jpg';
import { menu } from '../../resources/text'


export default function Menu() {
    const mainsMenu = menu.mains
    const mainsItems = mainsMenu.map((dish) =>
        <li key={dish}>
            <em>{dish.dishName}</em> - <small>{dish.description}</small>
        </li>
    );
    return (
        <>
            <ul className='menu-items'>
                <li><strong>Entree</strong></li>
                {menu.entree}
                <li><strong>Mains</strong></li>
                {mainsItems}
                <li><strong>Dessert</strong></li>
                {menu.dessert}
            </ul>
            <img className='menu-images'
                src={Mains}
                alt=""
            />
            <img className='menu-images'
                src={Dessert}
                alt=""
            />
        </>
    )
}
