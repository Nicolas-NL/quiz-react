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

      <div className="w-full">
        {questions.map((question, index) => {
          const isCorrect = answers[index];
          return (
            <div key={index} className="mb-4">
              <h2 className="font-semibold text-lg">{question.question}</h2>
              <div className="flex flex-col gap-2 mt-2">
                {question.options.map((option, i) => (
                  <div
                    key={i}
                    className={`p-2 rounded-md ${option === question.correctAnswer ? 'bg-green-300' : 'bg-gray-200'} ${
                      answers[index] === option ? 'border-2 border-green-500' : ''
                    }`}
                  >
                    {option}
                    {option === question.correctAnswer && (
                      <span className="text-green-700 ml-2 text-sm">(Correto)</span>
                    )}
                    {answers[index] === option && option !== question.correctAnswer && (
                      <span className="text-red-700 ml-2 text-sm">(Errado)</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <button
        className="mt-6 bg-blue-500 text-white p-3 rounded-md w-full max-w-xs hover:bg-blue-600 transition"
        onClick={() => startPageClick()}
      >
        Refazer Quiz
      </button>
    </div>
  );
}

export default AnswersPage;
