import React from 'react'
import { useState } from 'react';

import {GiConfirmed} from 'react-icons/gi'

const Order = ({order,id}) => {

    const [approved, setApproved] = useState(false)

  const handleClick = () => {
      setApproved(true);
      sendData(id);
  }

  return (
    <div className='border-2 px-2 py-2 flex bg-white space-x-4 rounded-lg' id={id}>
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
        <p className='text-base font-bold whitespace-nowrap'>{order.Price}</p>
        <p className='font-bold'>{order.Type}</p>
      </div>

      <div className='flex flex-col items-center justify-center space-y-1'>
        <button className='text-sm bg-green-400 px-2 py-2 font-bold w-[60px] rounded-full flex items-center justify-center' onClick={handleClick}>{approved ? <GiConfirmed size={20}/>  : "Onayla"}</button>
        <button className='text-sm bg-yellow-400 px-2 py-2 font-bold w-[60px] rounded-full'>Yolda</button>
        <button className='text- sm bg-red-600 px-2 py-2 font-bold w-[60px] rounded-full'>Teslim</button>
      </div>

    
    </div>
  )
}

export default Order