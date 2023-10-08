import React, { useContext, useState } from 'react'
import {TbMotorbike} from 'react-icons/tb'
import GlobalContext from '../context/MainContext'
const ConfirmedOrder = ({order}) => {

    const {completeData} = useContext(GlobalContext)
    const [onTheWay, setonTheWay] = useState(false)

    const handleDelivery = () => {
        completeData(order.id);
    }

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

      <div className='flex flex-col items-center justify-center space-y-1'>
        <button className='text-sm bg-yellow-400 px-2 py-2 font-bold w-[60px] rounded-full flex items-center justify-center' onClick={() => {setonTheWay(true)}}>{onTheWay ? <TbMotorbike size={30} /> : "Yolda"}</button>
        <button className='text- sm bg-red-600 px-2 py-2 font-bold w-[60px] rounded-full' onClick={handleDelivery}>Teslim</button>
      </div>

    
    </div>
  )
}

export default ConfirmedOrder