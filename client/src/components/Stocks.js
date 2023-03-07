
import React, { useContext, useEffect, useState } from 'react'
import StockCard from './StockCard'
import { UserContext } from '../context/UserContext'
import CardParent  from '../styled_components/CardParent.style' 

const Stocks = () => {


    const [selectedPortfolio, setSelectedPortfolio] = useState('');
    const [selectedStock, setSelectedStock] = useState('');
    
    const addedStock = {
      portfolio_id: selectedPortfolio,
      stock_id: selectedStock
    };

    const{stock, setStock, investor, setInvestor} = useContext(UserContext)

    useEffect(() => {
        fetch('/stocks')
        .then(res => res.json())
        .then(data => setStock(data))
    }, [setStock])

    // const handleAddToPortfolio = () => {
    //     const addedStock = {
    //         portfolio_id: selectedPortfolio,
    //         stock_id: selectedStock
    //     };
    //     fetch('/portfolio_stocks', {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(addedStock)
    //     })
    //     .then(res => {
    //         if (res.status !== 201) {
    //             console.log('not adding to portfolio_stocks')
    //         } else {
    //             res.json().then(data => {
    //                 const updatedPortfolioStock = {
    //                     ...investor,
    //                     portfolioStock: [...investor.portfolio_stocks, data]
    //                 };
    //                 setInvestor(updatedPortfolioStock);
    //             })
    //         }
    //     });
    // }
    
    const handleAddToPortfolio = () => {
        
        fetch('/portfolio_stocks', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(addedStock)
        })
          .then(res => {
            if (res.status !== 201) {
              console.log('not adding to portfolio_stocks')
            } else {
              res.json().then(data => {
                const updatedPortfolioStock = {
                  ...investor,
                  portfolio_stocks: [...investor.portfolio_stocks, data]
                };
                setInvestor(updatedPortfolioStock);
              })
            }
          });
      }

    const handleStockChange = e => {
        setSelectedStock(e.target.value);
    };


    const mappedPortfolioNames = investor.portfolio_info.map(portfolioName => <option key={portfolioName.id}>{portfolioName.portfolio_name}</option> )

    const mappedStocks = stock.map(singleStock => (
        <StockCard 
            key = {singleStock.id} 
            name ={singleStock.name}
            value={addedStock.portfolio_id}
            price={singleStock.current_price}
            mappedPortfolioNames={mappedPortfolioNames}
            handleStockChange={handleStockChange}
            handleAddToPortfolio={handleAddToPortfolio}
        />))


  return (
    <CardParent>       
        {mappedStocks}    
    </CardParent>
  )
}

export default Stocks
