import React, { forwardRef, useRef } from 'react';
import Marquee from './pages/marquee/Marquee';
// import ContextTest from './pages/context';
// import PagerTest from './components/pagination';
import Students from './pages/students';
import "./redux/indexTest";

function A (props: any, ref: any) {
  console.log(props.abc, ref);
  return <div>
    <h1 ref={props.abc}>A组件</h1>
  </div>
}


const Awarp = forwardRef(A)

function App() {
const ref = useRef(null);
  return (
    <div className="App">
      <Awarp abc={ref} />
    </div>
  );
}

export default App;
