import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function AnswersPage() {
  const location = useLocation();
  const { questions, answers } = location.state || { questions: [], answers: [] }; // Default to empty if no state is passed
  const navigate = useNavigate();
  const startPageClick = () => {
    navigate('/');
  }
  // Calculate the number of correct answers
  const correctAnswersCount = answers.filter(answer => answer).length;

  return (
    <div className="flex flex-col items-center justify-center bg-slate-100 rounded-lg p-6 gap-4 shadow-lg border border-black w-full max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Resultado do Quiz</h1>
      <p className="text-xl mb-6">Você acertou {correctAnswersCount} de {questions.length} perguntas!</p>
      <button onClick={startPageClick} className="h-10 bg-slate-300 p-2 rounded-md border border-black mb-4">
        Voltar para o início

      </button>
      </div>
  );
}

export default AnswersPage;
