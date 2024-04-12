import styled from 'styled-components'

export const PopupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center
  background-color: #ffffff;
  height: 100vh;
  width: 100vw;
`
export const PopUpBody = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  @media screen and (min-width: 768px) {
    width: 440px;
    height: 440px;
  }
`
export const CloseButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  font-size: 26px;
  margin-right: 10px;
  align-self: end;
`
export const PopUpImage = styled.img`
  width: 80%;
`
export const TriggerButton = styled.button`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Bree Serif';
  color: #223a5f;
  padding: 8px 15px 8px 15px;
  margin: 8px;
  margin-right: 28px;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  align-self: end;
`
