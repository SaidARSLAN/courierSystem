import React, { useContext } from 'react'
import GlobalContext from '../context/MainContext'
import { orders } from '../contains'
import Order from '../components/Order'

const EmptyPackets = () => {
    const {empty} = useContext(GlobalContext)
  return (
    <div className='flex items-center justify-center space-y-4 w-full flex-col py-24 px-4'>
        {orders.map((order) => {
            if (empty.includes(order.id)) {
                return <Order order={order} />
            }
        })}
    </div>
  )
}

export default EmptyPackets