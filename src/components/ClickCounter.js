import React from 'react'
import withCounter from './HOC/withCounter'; 
const ClickCounter = ({count,handler}) => {
  console.log(count,handler)
  return (
    
    <button onClick={handler} >
      Hovered {count} times
    </button>
  )
}

export default withCounter(ClickCounter); 

/**
 * Program executation flow 
 * ClickCounter will be called withCounter() functionality 
 * this will be then replaced with <NewComponent /> that contains <ClickCounter count={count} handler={incrementCounter] /> 
 * then ClickCounter will get's it's necessary values to work. and on a event there is a callback registered in the memory . it will be executed when the event is fired . 
 */
