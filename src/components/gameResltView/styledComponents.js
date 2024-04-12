import styled from 'styled-components'

export const GameResultContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  @media screen and (min-width: 768px) {
    width: 70%;
  }
`
export const GameResultImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 540px;
`
export const GameResultItemsContainer = styled.div`
  text-align: center;
  color: #ffff;
  font-weight: 600;
`
export const GameResultText = styled.p`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 21px;
`
export const GameResultImage = styled.img`
  width: 80%;
  @media screen and (min-width: 768px) {
    max-width: 200px;
  }
`
export const GameResultWinOrLossText = styled.p`
  color: #ffff;
  font-weight: 600;
  font-family: 'Roboto';
  font-size: 21px;
`
export const GameResultResetBtn = styled.button`
  width: 200px;
  height: 52px;
  background-color: #ffff;
  color: #223a5f;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 18px;
`
