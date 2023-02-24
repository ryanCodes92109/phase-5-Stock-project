import React from 'react'

const StockCard = ({name, price}) => {
    console.log(name)
    console.log(price)



  return (
    
        <div className='stockCard'>
            {name} <br/>
            {price}
        </div>
  )
}

export default StockCard
