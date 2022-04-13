import React from 'react';
import Marquee from './pages/marquee/Marquee';
import Students from './pages/student/Students';
import ContextTest from './pages/context';

export const ctx = React.createContext({
  a: ""
});
export const ctx2 = React.createContext({
  a: ""
});

function App() {
  return (
    <div className="App">
      <ctx2.Provider value={{a: "上下文2的数据"}}>
        <ctx.Provider value={{a: "上下文1的数据"}}>
          <ContextTest />
        </ctx.Provider>
      </ctx2.Provider>
    </div>
  );
}

export default App;
