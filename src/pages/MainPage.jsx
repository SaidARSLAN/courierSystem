import React, { useContext } from 'react'
import Order from '../components/Order'
import GlobalContext from '../context/MainContext'
import ConfirmedOrder from '../components/ConfirmedOrder'

const MainPage = () => {
  const {confirmedOrdersID,orders,completedOrdersID} = useContext(GlobalContext)
  return (
    <div className='flex items-center justify-center space-y-4 w-full flex-col py-24 px-4'>
      {orders.map((order) => {
            if (confirmedOrdersID.includes(order.id) && !completedOrdersID.includes(order.id)) {
                return <ConfirmedOrder order={order} />
            }
        })}
    </div>
  )
}

export default MainPage