"use client";
import React from 'react'
import Lottie from 'lottie-react'

import bannerAni from "@/../public/banner.json";

export default function Banner() {
  return (
    <div>
    <div className="mb-10 mt-3 px-5">
      <div className=" flex ps-3 lg:ps-1  justify-between lg:pt-10 mx-auto max-w-screen-2xl">
        <div className="lg:mt-10 lg:pt-10 pt-6 text-start ">
          

          <h1 className="lg:text-[55px] md:text-[25px] text-[13px] font-bold  mt-2 md:pb-5 lg:mt-2   lg:absolute md:absolute lg:absolute">
          Culinary Delights: 
          </h1>
          <h2 className="lg:text-[55px] md:text-[25px] text-[13px] font-bold pt-2  lg:mt-10 lg:pt-10 md:pt-9 md:relative relative lg:relative text-yellow-500">
          Explore, Create, Savor with Recipe App.
          </h2>

          <p className=" hidden  lg:block md:block md:mt-7 text-lg font-semibold text-red-500 mt-5 mb-6">
          Embark on a culinary journey with Recipe App. Discover diverse recipes,<br/> unleash your creativity, and
         savor delightful homemade dishes. <br/>Explore, create, and enjoy delicious moments today!
          </p>

        </div>

        {/* animation part */}

        <div className="w-[50%] h-[50%] ">
          <Lottie
            animationData={bannerAni}
            loop={true}
          
          />
        </div>
      </div>
    </div>
  </div>
  )
}
