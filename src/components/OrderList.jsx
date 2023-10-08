import React, { useEffect, useState } from 'react'
import { orders } from '../contains';
import Order from './Order';

const OrderList = () => {
  const [mainOrder, setMainOrder] = useState([])
  useEffect(() => {
    setMainOrder(orders);
  },[])

  const sendDeletedData = (id) => {
    const tempList = orders.filter((order) => {
        return (order.id !== id)
    })
      setMainOrder(tempList);
  }

  return (
    <div className='flex items-center justify-center space-y-4 w-full flex-col py-24'>
        {mainOrder.map((order,idx) => {
                return <Order key={idx} order={order} id={idx} sendDeletedData={sendDeletedData}/>
        })}
    </div>

  )
}

export default OrderList