import React from 'react';
import Left from './home/left/Left';   // Ensure this path is correct
import Right from './home/right/Right'; // Ensure this path is correct

const App = () => {
  return (
    <div className="flex h-screen">
      <Left />
      <Right />
    </div>
  );
};

export default App;
