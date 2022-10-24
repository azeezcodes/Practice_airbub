import React from 'react'
import Navbar from './components/Navbar'
import Box from "./components/Box";
import Variety from "./components/Variety"
const App = () => {
  return (
     <div>
        <Navbar />
        <Variety />
        <Box />
     </div>
  );
}

export default App