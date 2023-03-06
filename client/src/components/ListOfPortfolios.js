import React, {useContext, useState} from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import StyledCard from '../styled_components/Card.style'
import PortfolioOfStock from './PortfolioOfStock'
import CardParent from '../styled_components/CardParent.style'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import Button from '../styled_components/Button.style'
import SubmitField from '../styled_components/TextField.style'
import PortfolioSubmitForm from '../styled_components/PortfolioSubmitForm.sty'

const ListOfPortfolios = ({portfolios}) => {
  const navigate=useNavigate()
  const {investor,
          setInvestor
        } =useContext(UserContext)

        const newPortfolioFormData = {
          portfolio_name: ''
        }

        const [portfolioSubmit, setPortfolioSubmit] = useState(newPortfolioFormData)

        console.log(portfolios)

  const newPortfolioSubmit = (e, portfolioFormData) => {
    console.log('hello')
    e.preventDefault()
    fetch('/portfolios', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(portfolioFormData)
        })
        .then(res => {
              if(res.status !== 201) {
                alert('Something went wrong')
              } else {
                res.json()
                .then(data => {
                  const updatedInvestor = { 
                    ...investor, 
                    portfolios: [...investor.portfolios, data]
                  }
                  setInvestor(updatedInvestor)
                } 
              )
              }
            })
  }
  // console.log(portfolios)

  const newPortfolioHandleChange = e => {
    console.log(e.target.value)
    const {name,value} =e.target
    setPortfolioSubmit({...portfolioSubmit, [name]:value})
  }
  const portfolioDelete = (p) => {
    console.log("FUCK YEAH")
    fetch(`/portfolios/${p.id}`, {
      method: "DELETE"
    })
    .then(res => {
      if(res.status === 204) {
        const updatedInvestor = {
          ...investor,
          portfolios: investor.portfolios.filter(portfolio => portfolio.id !== p.id)
        }
        setInvestor(updatedInvestor)        
        console.log(res)
      } else {
      res.json()
      .then(error => alert(error))
      }
    })
  }
  console.log(portfolios)

  const mappedPortfolioNames = portfolios.map( p => (
    <StyledCard 
      key ={p.id}
      id = {p.id}
      // onClick={() => navigate(`/portfolios/${p.id}/`)}
      >  
      {p.portfolio_name} <br/>
      ${p.quantity}
      <Button
        onClick={() => navigate(`/portfolios/${p.id}`)}
      >View Portfolio</Button>
      <Button
        onClick = {() => portfolioDelete(p)}
      >Delete</Button>
    </StyledCard>

    )
  ) 
// console.log(mappedPortfolioNames[0].props.id)

// console.log(portfolios)
  return (
    // <>
      <CardParent >
      <PortfolioSubmitForm 
        onSubmit={e => newPortfolioSubmit(e, portfolioSubmit)}>
          <SubmitField 
            onChange={newPortfolioHandleChange}
            placeholder='New Portfolio Name'
            name='portfolio_name'
            value= {portfolios.portfolio_name}
          ></SubmitField>
        <Button>Submit</Button>

      </PortfolioSubmitForm>

        {mappedPortfolioNames }

      </CardParent>
    // </>
  )
}

export default ListOfPortfolios