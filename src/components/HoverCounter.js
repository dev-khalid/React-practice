import React from 'react';
import withCounter from './HOC/withCounter';
const HoverCounter = ({ count, handler }) => {
  console.log(count, handler);
  return <h1 onMouseOver={handler}>Hovered {count} times</h1>;
};

export default withCounter(HoverCounter);

/**
 * Program executation flow
 * HoverCounter will be called withCounter() functionality
 * this will be then replaced with <NewComponent /> that contains <HoverCounter count={count} handler={incrementCounter] />
 * then HoverCounter will get's it's necessary values to work. and on a event there is a callback registered in the memory . it will be executed when the event is fired .
 */
