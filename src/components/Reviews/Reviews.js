import React from 'react';
import Pizza from '../../images/pizza.jpg'
const Reviews = () => {
    return (
        <>
            <h1 className='m-7 text-center font-bold text-3xl'>Reviews</h1>
            <div className='flex items-center justify-center m-7'>
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3">
                    <div class="">
                        <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" styles="background-image: url('/src/images/burger.jpg')" title="Woman holding a mug">
                        </div>
                        <div class="border-r border-b border-l border-gray-400 lg:border-l-1 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                            <div class="mb-8">
                                <p class="text-sm text-gray-600 flex items-center">
                                    <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                    </svg>
        Members only
      </p>
                                <div class="text-gray-900 font-bold text-xl mb-2">Review Of Chicken Burger </div>
                                <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                            <div class="flex items-center">
                                <img class="w-10 h-10 rounded-full mr-4" src={Pizza} alt="Avatar of Jonathan Reinink" />
                                <div class="text-sm">
                                    <p class="text-gray-900 leading-none">Kaiser</p>
                                    <p class="text-gray-600"> July 20</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" styles="background-image: url('/src/images/burger.jpg')" title="Woman holding a mug">
                        </div>
                        <div class="border-r border-b border-l border-gray-400 lg:border-l-1 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                            <div class="mb-8">
                                <p class="text-sm text-gray-600 flex items-center">
                                    <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                    </svg>
        Members only
      </p>
                                <div class="text-gray-900 font-bold text-xl mb-2">Review Of Chicken Burger </div>
                                <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                            <div class="flex items-center">
                                <img class="w-10 h-10 rounded-full mr-4" src={Pizza} alt="Avatar of Jonathan Reinink" />
                                <div class="text-sm">
                                    <p class="text-gray-900 leading-none">Kaiser</p>
                                    <p class="text-gray-600"> July 20</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" styles="background-image: url('/src/images/burger.jpg')" title="Woman holding a mug">
                        </div>
                        <div class="border-r border-b border-l border-gray-400 lg:border-l-1  lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r  p-4 flex flex-col justify-between leading-normal">
                            <div class="mb-8">
                                <p class="text-sm text-gray-600 flex items-center">
                                    <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                    </svg>
        Members only
      </p>
                                <div class="text-gray-900 font-bold text-xl mb-2">Review Of Chicken Burger </div>
                                <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                            <div class="flex items-center">
                                <img class="w-10 h-10 rounded-full mr-4" src={Pizza} alt="Avatar of Jonathan Reinink" />
                                <div class="text-sm">
                                    <p class="text-gray-900 leading-none">Kaiser</p>
                                    <p class="text-gray-600"> July 20</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Reviews;