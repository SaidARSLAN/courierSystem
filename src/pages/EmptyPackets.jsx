import React, { useContext } from 'react'
import GlobalContext from '../context/MainContext'
import Order from '../components/Order'

const EmptyPackets = () => {
  const {confirmedOrdersID,orders} =useContext(GlobalContext)



  return (
    <div className='flex items-center justify-center space-y-4 w-full flex-col  px-4'>
              <div className='flex items-center justify-center space-y-4 w-full flex-col py-24'>
        {orders.map((order) => {
              if (!confirmedOrdersID.includes(order.id))
                return <Order key={order.id} order={order}/>
        })}
    </div>
        
    </div>
  )
}

export default EmptyPackets