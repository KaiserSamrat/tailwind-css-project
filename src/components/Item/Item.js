import React from 'react';
import Pizza from '../../images/pizza.jpg'
import Burger from '../../images/burger.jpg'

const Item = () => {
    return (
        <>
            <div className='menu-card'>
                <img src={Pizza} alt='egg' className='h-full rounded mb-20 shadow' />
                <div className='center-content'>
                    <h2 className='text-2xl mb-2'>Egg Muffins</h2>
                    <p className='mb-2'>Cripsy, delicious, and nutritious</p>
                    <span>$16</span>
                </div>
            </div>
            <div className='menu-card'>
                <img src={Burger} alt='egg' className='h-full rounded mb-20 shadow' />
                <div className='center-content'>
                    <h2 className='text-2xl mb-2'>Egg Salad</h2>
                    <p className='mb-2'>Cripsy, delicious, and nutritious</p>
                    <span>$18</span>
                </div>
            </div>
        </>
    );
};

export default Item;