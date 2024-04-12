import {GameIconsList, GameIconBtn, GameIconImage} from './styledComponents'

const ChoicesList = props => {
  const {choicesList, onGameResultView} = props
  const {id, imageUrl} = choicesList
  const onclickIamge = () => {
    onGameResultView(id)
  }

  return (
    <GameIconsList>
      <GameIconBtn
        type="button"
        onClick={onclickIamge}
        data-testid={`${id.toLowerCase()}Button`}
      >
        <GameIconImage src={imageUrl} alt={id} />
      </GameIconBtn>
    </GameIconsList>
  )
}
export default ChoicesList
