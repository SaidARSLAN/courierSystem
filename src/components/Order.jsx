import React, { useContext, useRef } from 'react'
import { useState } from 'react';

import {GiConfirmed} from 'react-icons/gi'
import GlobalContext from '../context/MainContext';
import { NavLink } from 'react-router-dom';

const Order = ({order}) => {
  const buttonRef = useRef();
    const {sendData,sendDetailID} =  useContext(GlobalContext);
  const handleClick = () => {
      sendData(order.id);
  }

  

  return (
    <div  className='border-2 px-2 py-2 flex bg-white space-x-2 rounded-lg h-[175px] hover:bg-gray-200 cursor-pointer'>
      <div className='flex items-center justify-center space-x-2'>
      <div className='flex flex-col items-center justify-center'>
        <label className='font-bold bg-yellow-400 px-1'>Restoran</label>
        <h1 className='text-base font-bold whitespace-nowrap '>{order.resturantName}</h1>
        </div>
        <div className='w-[2px] h-full bg-black'>
        </div>
      </div>
      <div className='flex items-center justify-center space-x-2'>
      <div className='flex flex-col w-full items-center justify-center'>
        <label className='font-bold bg-yellow-400  px-1 text-center'>Adres</label>
        <p className='text-lg font-bold text-center'>{order.Address}</p>
      </div>
      <div className='w-[2px] h-full bg bg-black'></div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='font-bold whitespace-nowrap bg-yellow-400 px-1'>Tutar</h1>
        <p className='text-2xl font-extrabold whitespace-nowrap'>{order.Price} TL</p>
        <p className='font-bold'>{order.Type}</p>
      </div>
      <div className='flex items-center justify-center h-full'>
        <button className='text-sm bg-green-400  font-bold w-[50px]  flex items-center justify-center h-[125px]' onClick={handleClick} ref={buttonRef}><GiConfirmed size={40} /></button>
      </div>
    </div>
  )
}

export default Order