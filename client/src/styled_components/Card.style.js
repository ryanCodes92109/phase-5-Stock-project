import styled from "styled-components";
import { Card } from "@mui/material";
import { createTheme } from "@mui/material";

const theme = createTheme();
theme.spacing(2);

 const StyledCard = styled.div`
     border:5px solid black; 
   display: flex;
  flex-direction:column;
  border-radius: 1rem;
  padding: 0.5rem 0;
  margin: 4vh 3vw;
  width: 11rem;
  height:8rem;
  background: white;
  color: black;
  align-items: center;
  background-color: lightgrey; 

   border-radius: 1; 
   box-shadow: 1vw 1vh black;
  border: 2px solid white; 
`

export default StyledCard