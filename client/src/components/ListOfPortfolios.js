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
  const {investor
        } =useContext(UserContext)

        const newPortfolioFormData = {
          portfolio_name: ''
        }

        const [portfolioSubmit, setPortfolioSubmit] = useState(newPortfolioFormData)

  // const mappedPortfolioId = portfolios.map(portfolioId => (
  //   portfolioId.id
  //   )
  // )


  // console.log(portfolios[0].id)

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
                console.log('Something went wrong')
              } else {
                
              }
            })
  }

  const newPortfolioHandleChange = e => {
    console.log(e.target.value)
    const {name,value} =e.target
    setPortfolioSubmit({...portfolioSubmit, [name]:value})
  }


  const goToPortfolioClick = e  => {
    console.log('ello')
    navigate(`/current-portfolio/${portfolios.id}/` )
  } 

  const mappedPortfolioNames = portfolios.map( p => (
    <StyledCard 
      key ={p.id}
      id = {p.id}
      onClick={goToPortfolioClick}>  
      Portfolio: {p.id} <br/>
      {p.portfolio_name}
    </StyledCard>

    )
  ) 
// console.log(mappedPortfolioNames[0].props.id)

console.log(portfolios)
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
        {mappedPortfolioNames}
      </CardParent>
    // </>
  )
}

export default ListOfPortfolios
