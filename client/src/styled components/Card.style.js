import styled from "styled-components";
import { Card } from "@mui/material";
import { createTheme } from "@mui/material";

const theme = createTheme();
theme.spacing(2);

 const StyledCard = styled.div`
    /* border:5px solid black; */
  display: flex;
  flex-direction:column;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 3vh 3vw;
  width: 11rem;
  height:8rem;
  background: transparent;
  color: white;
  border: 2px solid white;
`

export default StyledCard