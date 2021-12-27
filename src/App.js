import React from 'react'; 
import RenderProp from './components/RenderProp';
import Hello from './components/Hello'
const App = () => {
  const welcome = (name) => {
    return `Welcome ${name}`;
  };
  const obj = {
    name: 'khalid Hossain',
    welcome: welcome,
  };
  console.log(obj); 
  return (
    <div>
      <RenderProp data={obj} >
        {
          data => <Hello data={data}/>
        }
      </RenderProp>
    </div>
  );
};

export default App;
