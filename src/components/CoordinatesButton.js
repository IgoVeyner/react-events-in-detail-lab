// Code CoordinatesButton Component Here
import React from 'react'

const CoordinatesButton = ({onReceiveCoordinates}) => {
  const handleClick = e => onReceiveCoordinates([e.clientX, e.clientY])

  return <button onClick={handleClick}>Get Cords</button>
}

export default CoordinatesButton

// export default class CoordinatesButton extends React.Component {

//   handleClick = e => this.props.onReceiveCoordinates([e.clientX, e.clientY])

//   render() {
//     return (
//       <button onClick={this.handleClick}>Get Cords</button>
//     )
//   }
// }