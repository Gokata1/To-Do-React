import React from 'react';
import { Toaster } from 'react-hot-toast';
import Home from './pages/home/Home.js';
import Test from './pages/test/Test.js';

export default function App() {
  return (
    <div>
      <Toaster/>
       <Home />
      {/* <Test/> */}
    </div>
  )
}
