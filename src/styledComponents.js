import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  font-family: 'Bree Serif';
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #223a5f;
`
export const GameScoreContainer = styled.div`
  border-style: solid;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-color: #ffffff;
  border-radius: 8px;
  padding: 10px;
  @media screen and (min-width: 768px) {
    width: 70%;
  }
`
export const GameScoreContainerHeading = styled.h1`
  color: #ffffff;
  width: 150px;
  font-size: 24px;
`
export const GameScoreContainerScorecontainer = styled.div`
  background-color: #ffffff;
  width: 40%;
  max-width: 150px;
  border-radius: 8px;
  text-align: center;
`
export const GameScoreContainerScorepara = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 700;
  color: #223a5f;
`
export const GameScoreContainerScore = styled.p`
  font-size: 28px;
  font-family: 'Roboto';
  font-weight: 700;
  color: #223a5f;
`
export const GameIconsContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    width: 70%;
  }
`
