import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import MainButton from '../components/MainButton';
function AnswersPage() {
  const location = useLocation();
  const { questions, answers } = location.state || { questions: [], answers: [] }; // Default to empty if no state is passed
  const navigate = useNavigate();
  const startPageClick = () => {
    navigate('/');
  }

  return (
    <div className="w-screen h-full bg-slate-900 flex justify-center p-6">
    <div className="w-full h-full max-w-2xl space-y-6">
        {questions.map((question, index) => {
          const userAnswer = answers[index]?.selectedAnswer;
          const isCorrect = answers[index]?.isCorrect;

          return (
            <div key={index} className="bg-slate-500 p-4 rounded-lg shadow-lg border border-slate-700">
              <h2 className="font-semibold text-lg">{question.question}</h2>
              <p className="mt-2">
                <span className="font-bold">Sua resposta: </span>
                <span className={isCorrect ? "text-green-400" : "text-red-400"}>
                  {userAnswer}
                </span>
              </p>
              {!isCorrect && (
                <p className="mt-1 text-green-400">
                  <span className="font-bold">Correta: </span>
                  {question.correctAnswer}
                </p>
              )}
            </div>
          );
        })}
        <MainButton onClick={startPageClick}>
          Voltar para o início
        </MainButton>
      </div>
      </div>
  );
}

export default AnswersPage;
