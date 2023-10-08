import React, { useContext, useState } from 'react'


const CompletedOrders = ({order}) => {


  return (
    <div className='border-2 px-2 py-2 flex bg-white space-x-4 rounded-lg h-[175px]'>
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
    </div>
  )
}

export default CompletedOrders