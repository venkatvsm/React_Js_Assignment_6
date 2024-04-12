import './index.css'
import {
  GameResultContainer,
  GameResultImageContainer,
  GameResultItemsContainer,
  GameResultText,
  GameResultImage,
  GameResultWinOrLossText,
  GameResultResetBtn,
} from './styledComponents'

const GameResltView = props => {
  const {userChoice, opponentChoosen, onResetBtnTrigger, winOrLossText} = props
  const onClickResetBtn = () => {
    onResetBtnTrigger()
  }
  return (
    <GameResultContainer>
      <GameResultImageContainer>
        <GameResultItemsContainer>
          <GameResultText>You</GameResultText>
          <GameResultImage src={userChoice[0].imageUrl} alt="your choice" />
        </GameResultItemsContainer>
        <GameResultItemsContainer>
          <GameResultText>opponent</GameResultText>
          <GameResultImage
            src={opponentChoosen.imageUrl}
            alt="opponent choice"
          />
        </GameResultItemsContainer>
      </GameResultImageContainer>
      <GameResultWinOrLossText>{winOrLossText}</GameResultWinOrLossText>
      <GameResultResetBtn type="button" onClick={onClickResetBtn}>
        Play Again
      </GameResultResetBtn>
    </GameResultContainer>
  )
}
export default GameResltView
