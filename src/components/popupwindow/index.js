import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  TriggerButton,
  CloseButton,
  PopUpImage,
  PopUpBody,
} from './styledComponents'

const Popupwindow = () => (
  <>
    <Popup
      modal
      trigger={<TriggerButton type="button">Rules</TriggerButton>}
      closeOnEscape
      window
    >
      {close => (
        <PopUpBody>
          <PopUpImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
          <CloseButton type="button" onClick={() => close()}>
            <RiCloseLine />
          </CloseButton>
        </PopUpBody>
      )}
    </Popup>
  </>
)
export default Popupwindow
