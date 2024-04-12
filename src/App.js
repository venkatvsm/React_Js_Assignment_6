import {Component} from 'react'
import ChoicesList from './components/ChoicesList'
import GameResltView from './components/gameResltView'
import Popupwindow from './components/popupwindow'
import {
  BgContainer,
  GameScoreContainer,
  GameScoreContainerHeading,
  GameScoreContainerScorecontainer,
  GameScoreContainerScorepara,
  GameScoreContainerScore,
  GameIconsContainer,
} from './styledComponents'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    gameStart: false,
    winOrLossText: '',
    totalScore: 0,
    userChoice: '',
    opponentChoosen: '',
  }

  onGameResultView = id => {
    const userChoiceId = id
    const randomEl = Math.random() * choicesList.length
    const opponentChoosen = choicesList[Math.floor(randomEl)]
    const userChoice = choicesList.filter(
      eachItem => eachItem.id === userChoiceId,
    )
    console.log(userChoice)
    if (userChoiceId === 'PAPER') {
      switch (opponentChoosen.id) {
        case 'PAPER':
          this.setState({
            gameStart: true,
            winOrLossText: 'IT IS DRAW',
            userChoice,
            opponentChoosen,
          })
          break
        case 'ROCK':
          this.setState(prevState => ({
            totalScore: prevState.totalScore + 1,
            gameStart: true,
            winOrLossText: 'YOU WON',
            userChoice,
            opponentChoosen,
          }))
          break
        default:
          this.setState(prevState => ({
            totalScore: prevState.totalScore - 1,
            gameStart: true,
            winOrLossText: 'YOU LOSE',
            userChoice,
            opponentChoosen,
          }))
      }
    } else if (userChoiceId === 'ROCK') {
      switch (opponentChoosen.id) {
        case 'ROCK':
          this.setState({
            gameStart: true,
            winOrLossText: 'IT IS DRAW',
            userChoice,
            opponentChoosen,
          })
          break
        case 'SCISSORS':
          this.setState(prevState => ({
            totalScore: prevState.totalScore + 1,
            gameStart: true,
            winOrLossText: 'YOU WON',
            userChoice,
            opponentChoosen,
          }))
          break
        default:
          this.setState(prevState => ({
            totalScore: prevState.totalScore - 1,
            gameStart: true,
            winOrLossText: 'YOU LOSE',
            userChoice,
            opponentChoosen,
          }))
      }
    } else {
      switch (opponentChoosen.id) {
        case 'SCISSORS':
          this.setState({
            gameStart: true,
            winOrLossText: 'IT IS DRAW',
            userChoice,
            opponentChoosen,
          })
          break
        case 'PAPER':
          this.setState(prevState => ({
            totalScore: prevState.totalScore + 1,
            gameStart: true,
            winOrLossText: 'YOU WON',
            userChoice,
            opponentChoosen,
          }))
          break
        default:
          this.setState(prevState => ({
            totalScore: prevState.totalScore - 1,
            gameStart: true,
            winOrLossText: 'YOU LOSE',
            userChoice,
            opponentChoosen,
          }))
      }
    }
  }

  onResetBtnTrigger = () => {
    this.setState({gameStart: false, winOrLossText: ''})
  }

  renderSuccessView = () => {
    const {winOrLossText, userChoice, opponentChoosen} = this.state
    return (
      <GameResltView
        winOrLossText={winOrLossText}
        userChoice={userChoice}
        opponentChoosen={opponentChoosen}
        onResetBtnTrigger={this.onResetBtnTrigger}
      />
    )
  }

  render() {
    const {totalScore, gameStart} = this.state
    return (
      <BgContainer className="bgContainer">
        <GameScoreContainer className="gameScoreContainer">
          <div>
            <GameScoreContainerHeading className="gameScoreContainer_Heading">
              Rock
              <br />
              Paper
              <br />
              Scissors{' '}
            </GameScoreContainerHeading>
          </div>
          <GameScoreContainerScorecontainer className="gameScoreContainer_Scorecontainer">
            <GameScoreContainerScorepara className="gameScoreContainer_scorepara">
              Score
            </GameScoreContainerScorepara>
            <GameScoreContainerScore className="gameScoreContainer_score">
              {totalScore}
            </GameScoreContainerScore>
          </GameScoreContainerScorecontainer>
        </GameScoreContainer>
        {!gameStart && (
          <GameIconsContainer className="gameIconsContainer">
            {choicesList.map(eachItem => (
              <ChoicesList
                choicesList={eachItem}
                key={eachItem.id}
                onGameResultView={this.onGameResultView}
                renderscore={this.renderscore}
              />
            ))}
          </GameIconsContainer>
        )}
        {gameStart && this.renderSuccessView()}
        <Popupwindow />
      </BgContainer>
    )
  }
}

export default App
