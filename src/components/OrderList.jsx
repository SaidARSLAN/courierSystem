import React from 'react'
import { orders } from '../contains';
import Order from './Order';

const OrderList = () => {
  return (
    <div className='flex items-center justify-center space-y-4 w-full flex-col py-24'>
        {orders.map((order,idx) => {
                return <Order key={idx} order={order} id={idx}/>
        })}
    </div>

  )
}

export default OrderList