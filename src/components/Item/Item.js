import React from 'react';
import Pizza from '../../images/pizza.jpg'
import Burger from '../../images/burger.jpg'

const Item = () => {
    return (
        // <>
        //     <div className='menu-card'>
        //         <img src={Pizza} alt='egg' className='h-full rounded mb-15 shadow' />
        //         <div className='center-content'>
        //             <h2 className='text-2xl mb-2'>Pizza</h2>
        //             <p className='mb-2'>Chicken, 8 Inch, and nutritious</p>
        //             <span>$16</span>
        //             <button class="btn btn-blue">Order Now</button>
        //         </div>
        //     </div>
        //     <div className='menu-card'>
        //         <img src={Burger} alt='egg' className='h-full rounded mb-10 shadow' />
        //         <div className='center-content'>
        //             <h2 className='text-2xl mb-2'>Burger</h2>
        //             <p className='mb-2'>Chicken, Double Petty, and nutritious</p>
        //             <span>$18</span>
        //             <button class="btn btn-blue">Order Now</button>
        //         </div>
        //     </div>
        // </>
        <div class="flex items-center justify-center">
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">

        <div class="w-80 h-full  relative">

            <div class="pb-24 bg-white py-4 px-4 border-8 border-pink-600 rounded-3xl h-full shadow-2xl">
                <img src={Pizza}
                    class="w-64 h-64 " />

                <div class="flex justify-between">
                    <div class="py-4 flex space-x-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                        </svg>
                        <p class="text-lg font-semibold">Pizza</p>
                    </div>
                    <div class="py-4 pr-5">
                        <p class="text-sm font-semibold text-gray-400">Total Bill</p>
                        <p class="text-lg font-semibold">RM 6.00</p>
                    </div>
                </div>
            </div>

            <div class="absolute bottom-0 left-0 ">
                <div class="flex justify-between">
                   
                    <div class="py-4 px-6 rounded-lg w-full flex items-end">
                        <button
                            class="bg-gradient-to-b from-blue-400 to-blue-500 text-white font-bold py-4 px-4 rounded-lg uppercase text-sm  shadow-xl">
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-80 h-full  relative">

            <div class="pb-24 bg-white py-4 px-4 shadow-2xl border-8 border-blue-600 rounded-3xl h-full">
                <img src={Burger} class=" w-64 h-64" />

                <div class="flex justify-between">
                    <div class="py-4 flex space-x-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                        </svg>
                        <p class="text-lg font-semibold">Burger</p>
                    </div>
                    <div class="py-4 pr-5">
                        <p class="text-sm font-semibold text-gray-400">Total Bill</p>
                        <p class="text-lg font-semibold">RM 2.00</p>
                    </div>
                </div>
            </div>

            <div class="absolute bottom-0 left-0 ">
                <div class="flex justify-between">
                    
                    <div class="py-4 px-6 rounded-lg w-full flex items-end">
                        <button
                            class="bg-gradient-to-b from-pink-400 to-pink-500 text-white font-bold py-4 px-4 rounded-lg uppercase text-sm  shadow-xl">
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-80 h-full  relative">

            <div class="pb-24 bg-white py-4 px-4 shadow-2xl border-8 border-blue-600 rounded-3xl h-full">
                <img src={Burger} class=" w-64 h-64" />

                <div class="flex justify-between">
                    <div class="py-4 flex space-x-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                        </svg>
                        <p class="text-lg font-semibold">Burger</p>
                    </div>
                    <div class="py-4 pr-5">
                        <p class="text-sm font-semibold text-gray-400">Total Bill</p>
                        <p class="text-lg font-semibold">RM 2.00</p>
                    </div>
                </div>
            </div>

            <div class="absolute bottom-0 left-0 ">
                <div class="flex justify-between">
                    
                    <div class="py-4 px-6 rounded-lg w-full flex items-end">
                        <button
                            class="bg-gradient-to-b from-pink-400 to-pink-500 text-white font-bold py-4 px-4 rounded-lg uppercase text-sm  shadow-xl">
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
};

export default Item;