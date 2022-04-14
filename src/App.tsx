import React from 'react';
import Marquee from './pages/marquee/Marquee';
// import ContextTest from './pages/context';
// import PagerTest from './components/pagination';
import Students from './pages/students';
import "./redux/indexTest";

export const ctx = React.createContext({
  a: ""
});
export const ctx2 = React.createContext({
  a: ""
});

function App() {
  return (
    <div className="App">
      <Students />
    </div>
  );
}

export default App;
