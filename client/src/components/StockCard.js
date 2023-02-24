import React from 'react'

const StockCard = ({name, price}) => {


  return (
    
        <div className='stockCard'>
            {name} <br/>
            {price}
        </div>
  )
}

export default StockCard
