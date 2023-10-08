import React, { useContext } from 'react'
import GlobalContext from '../context/MainContext'

const OrderDetails = () => {
    const {selectedOrder} = useContext(GlobalContext);
    console.log(selectedOrder);
  return (
    <div className='flex flex-col items-center justify-center space-y-4 w-full  py-24 px-4'>
        <div className='flex items-center justify-center border-2 px-12 py-12'>
            <div>
        <h3 className='text-xl text-white font-bold'>{selectedOrder.resturantName}</h3>
        <h3 className='text-xl text-white font-bold'>{selectedOrder.Address}</h3>
        </div>
        <div>
        <h3 className='text-3xl text-green-300 font-bold whitespace-nowrap'>{selectedOrder.Price} TL</h3>
        <h3 className='text-3xl text-rose-400 font-bold'>{selectedOrder.Type}</h3>
        </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
        <iframe width="420" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Manisa+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://maps-generator.com/'>Maps Generator</a>
        </div>
    </div>
  )
}

export default OrderDetails