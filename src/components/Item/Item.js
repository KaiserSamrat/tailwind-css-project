import React from 'react';
import Pizza from '../../images/pizza.jpg'
import Burger from '../../images/burger.jpg'

const Item = () => {
    return (
        <>
            <div className='menu-card'>
                <img src={Pizza} alt='egg' className='h-full rounded mb-10 shadow' />
                <div className='center-content'>
                    <h2 className='text-2xl mb-2'>Pizza</h2>
                    <p className='mb-2'>Chicken, 8 Inch, and nutritious</p>
                    <span>$16</span>
                </div>
            </div>
            <div className='menu-card'>
                <img src={Burger} alt='egg' className='h-full rounded mb-10 shadow' />
                <div className='center-content'>
                    <h2 className='text-2xl mb-2'>Burger</h2>
                    <p className='mb-2'>Chicken, Double Petty, and nutritious</p>
                    <span>$18</span>
                </div>
            </div>
        </>
    );
};

export default Item;