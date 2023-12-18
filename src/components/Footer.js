import { useState } from 'react'
import {
  FormattedDate,
  FormattedNumber,
  FormattedPlural,
  FormattedMessage
} from 'react-intl'

const Footer = () => {
  const [count, setCount] = useState(0)
  const onChange = () => {
    setCount(prevState => prevState + 1)
  }

  return (
    <div className='container mt'>
      {/* Footer content here */}
      <p>Please click the button below</p>
      <button onClick={onChange}>click here</button>
      <p>
        <FormattedMessage id='click_count' values={{ count: count }} />
      </p>
      <FormattedDate
        value={Date.now()}
        year='numeric'
        month='long'
        day='2-digit'
      />
      <br />
      <FormattedNumber value={2000} style={`currency`} currency='USD' />
      <br />
      <FormattedPlural value={5} one='1 click' other='5 clicks' />
    </div>
  )
}

export default Footer
