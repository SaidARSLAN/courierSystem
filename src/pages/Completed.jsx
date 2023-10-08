import React, { useContext } from 'react'
import CompletedOrders from '../components/CompletedOrder'
import GlobalContext from '../context/MainContext'

const Completed = () => {
    const {completedOrdersID,orders} = useContext(GlobalContext)
  return (
    <div className='flex items-center justify-center space-y-4 w-full flex-col py-24 px-4'>
        <div className='flex items-center justify-center space-y-4 w-full flex-col py-24'>
        {orders.map((order) => {
              if (completedOrdersID.includes(order.id))
                return <CompletedOrders key={order.id} order={order}/>
        })}
    </div>
    </div>


  )
}

export default Completed