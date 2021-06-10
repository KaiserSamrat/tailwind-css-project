import React from 'react';
import Pizza from '../../images/pizza.jpg'
import Burger from '../../images/burger.jpg'
import Pasta from '../../images/pasta.jpeg'
import Sandwich from '../../images/sandwich.jpg'

const Item = () => {
    return (
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
                                <p class="text-lg font-semibold">BDT 600.00</p>
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
                                <p class="text-lg font-semibold">BDT 250.00</p>
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
                        <img src={Sandwich} class=" w-64 h-64" />

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
                                <p class="text-lg font-semibold">BDT 250.00</p>
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

                    <div class="pb-24 bg-white py-4 px-4 shadow-2xl border-8 border-red-600 rounded-3xl h-full">
                        <img src={Pasta} class=" w-64 h-64" />

                        <div class="flex justify-between">
                            <div class="py-4 flex space-x-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                                </svg>
                                <p class="text-lg font-semibold">Pasta</p>
                            </div>
                            <div class="py-4 pr-5">
                                <p class="text-sm font-semibold text-gray-400">Total Bill</p>
                                <p class="text-lg font-semibold">BDT 300.00</p>
                            </div>
                        </div>
                    </div>

                    <div class="absolute bottom-0 left-0 ">
                        <div class="flex justify-between">

                            <div class="py-4 px-6 rounded-lg w-full flex items-end">
                                <button
                                    class="bg-gradient-to-b from-green-400 to-green-500 text-white font-bold py-4 px-4 rounded-lg uppercase text-sm  shadow-xl">
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