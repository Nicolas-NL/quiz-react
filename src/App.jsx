import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MainButton from "./components/MainButton";
import { useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate();
  
  const nextPageClick = () => {
    navigate('/first');
  }
  return (
    <div className="w-screen h-screen bg-slate-900 flex justify-center p-6">
      <div className="flex flex-col items-center justify-center rounded-lg p-6 shadow-lg">
        
        <div className="flex gap-4 mb-4">
          <img src={reactLogo} className="logo react w-50 h-60 " alt="React logo" />
          
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">React Quiz</h1>
        <p className=" mb-4 font-bold text-slate-300">Teste seus conhecimentos com nosso quiz!</p>

      <MainButton onClick={() => nextPageClick()}>Começar Quiz</MainButton>
      </div>
    </div>
  );
}

export default App
