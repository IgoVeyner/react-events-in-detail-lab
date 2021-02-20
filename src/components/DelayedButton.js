// Code DelayedButton Component Here
import React from 'react'

const DelayedButton = ({onDelayedClick, delay}) => {
  const handleClick = e => {
    e.persist()
    setTimeout(() => onDelayedClick(e), delay)
  }

  return <button onClick={handleClick}>Delay</button>
}

export default DelayedButton

// export default class DelayedButton extends React.Component {
//   handleClick = e => {
//     e.persist()
//     setTimeout(() => this.props.onDelayedClick(e), this.props.delay)
//   }
  
//   render() {
//     return <button onClick={this.handleClick}>Delay</button>
//   }
// }