import React from 'react';
import Marquee from './pages/marquee/Marquee';
import Students from './pages/student/Students';
// import ContextTest from './pages/context';
import PagerTest from './components/pagination';

export const ctx = React.createContext({
  a: ""
});
export const ctx2 = React.createContext({
  a: ""
});

function App() {
  return (
    <div className="App">
      <PagerTest/>
    </div>
  );
}

export default App;
