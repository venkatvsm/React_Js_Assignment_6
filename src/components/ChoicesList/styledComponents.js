import styled from 'styled-components'

export const GameIconsList = styled.div`
  width: 40%;
  text-align: center;
  @media screen and (min-width: 768px) {
    width: 35%;
  }
`
export const GameIconBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const GameIconImage = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    max-width: 200px;
  }
`
