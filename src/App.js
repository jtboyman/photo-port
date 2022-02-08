import React from 'react';
import Nav from './components/Nav';
import About from './components/About';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;

// Think of App.js as the root component, or the wrapper component that houses all of the other components. To effect any change on the application, we need to either modify this file or add components inside it.