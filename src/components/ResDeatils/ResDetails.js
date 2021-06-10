import React from 'react';
import res1 from '../../images/res1.jpg'
import res2 from '../../images/res2.jpg'
import res3 from '../../images/res3.jpg'
const ResDetails = () => {
    return (
        <>
        <h1 className='m-7 text-center font-bold text-3xl'>Our featured restaurant</h1>
        <div className="flex m-7 items-center justify-center">
            
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3'>
            <div class="max-w-sm rounded overflow-hidden shadow-lg ">
        <img class="w-full h-64" src={res1} alt="Sunset in the mountains"/>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Coffee Adda cafe </div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Coffee</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Tea</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Cold Drinks</span>
        </div>
      </div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg ">
        <img class="w-full" src={res2} alt="Sunset in the mountains"/>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Barcode Cafe</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Burger</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Pizza</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Shawrma</span>
        </div>
      </div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full h-auto" src={res3} alt="Sunset in the mountains"/>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Cafe Milano</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Pasta</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Chicken</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Sandwich</span>
        </div>
      </div>
            </div>
        </div>
        </>
    );
};

export default ResDetails;