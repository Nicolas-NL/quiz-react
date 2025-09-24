import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MainButton from "../components/MainButton";
import QuestionButton from "../components/QuestionButon";
import file from "../assets/file.svg";

function GCQuestionPage() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const gcQuestions = [
{
    question: "Qual é o país mais populoso do mundo?",
    options: ["Índia", "Estados Unidos", "China", "Brasil"],
    correctAnswer: "China",
  },
  {
    question: "Quem pintou a Mona Lisa?",
    options: [
      "Michelangelo",
      "Leonardo da Vinci",
      "Vincent van Gogh",
      "Pablo Picasso",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "Qual é o maior planeta do sistema solar?",
    options: ["Marte", "Terra", "Júpiter", "Saturno"],
    correctAnswer: "Júpiter",
  },
  {
    question: "Em que continente fica o Egito?",
    options: ["África", "Ásia", "Europa", "América"],
    correctAnswer: "África",
  },
  {
    question: "Quem escreveu 'Dom Quixote'?",
    options: [
      "José de Alencar",
      "Miguel de Cervantes",
      "Fernando Pessoa",
      "Machado de Assis",
    ],
    correctAnswer: "Miguel de Cervantes",
  },
  {
    question: "Qual é o símbolo químico da água?",
    options: ["H2", "O2", "H2O", "HO2"],
    correctAnswer: "H2O",
  },
  {
    question: "Quantos estados tem o Brasil?",
    options: ["24", "25", "26", "27"],
    correctAnswer: "26",
  },
  {
    question: "Quem foi o primeiro homem a pisar na Lua?",
    options: [
      "Yuri Gagarin",
      "Neil Armstrong",
      "Buzz Aldrin",
      "John Glenn",
    ],
    correctAnswer: "Neil Armstrong",
  },
  {
    question: "Qual é a capital da Austrália?",
    options: ["Sydney", "Melbourne", "Camberra", "Brisbane"],
    correctAnswer: "Camberra",
  },
  {
    question: "Em que ano ocorreu a Proclamação da República no Brasil?",
    options: ["1822", "1889", "1500", "1922"],
    correctAnswer: "1889",
  },
  ];

  // currentQuestionIndex: Controla a pergunta atual que está sendo exibida.
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  //answers: Armazena se as respostas fornecidas estão corretas ou não.
  const [answers, setAnswers] = useState([]);
  //handleAnswer: Verifica se a resposta selecionada está correta. Ela compara a resposta
  const handleAnswer = (selectedAnswer) => {
    setSelectedOption(selectedAnswer); // salvar a opção selecionada
  };
  //nextQuestion: Avança para a próxima pergunta. Quando todas as perguntas foram respondidas, ela mostra o total de acertos.
  const nextQuestion = () => {
    const confirmNext = window.confirm(
      "Tem certeza que deseja ir para a próxima pergunta?"
    );
    if (!confirmNext) return;

    if (!selectedOption) {
      alert("Por favor, selecione uma resposta antes de continuar.");
      return;
    }

    const isCorrect =
      selectedOption === gcQuestions[currentQuestionIndex].correctAnswer;

    const newAnswer = { selectedAnswer: selectedOption, isCorrect };
    const updatedAnswers = [...answers, newAnswer];

    if (currentQuestionIndex < gcQuestions.length - 1) {
      setAnswers(updatedAnswers);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null); // reseta seleção
    } else {
      alert(
        `Fim do quiz! Você acertou ${
          updatedAnswers.filter((answer) => answer.isCorrect).length
        } de ${gcQuestions.length}`
      );
      navigate("/answers", {
        state: {
          answers: updatedAnswers,
          questions: gcQuestions,
        },
      });
    }
  };
  return (
    <div className="w-screen h-screen bg-slate-900 flex justify-center p-6">
      <div className="flex flex-col items-center justify-center bg-slate-200 rounded-lg p-6 gap-4 shadow-lg border border-black">
        <img src={file} className="logo react w-30 h-40 " alt="JS logo" />
        <h1>{gcQuestions[currentQuestionIndex].question}</h1>
        {gcQuestions[currentQuestionIndex].options.map((option, index) => (
          <QuestionButton
            key={index}
            isSelected={selectedOption === option}
            onClick={() => handleAnswer(option)}
          >
            {option}
          </QuestionButton>

          //<>2</>
        ))}
        <MainButton  onClick={nextQuestion} disabled={!selectedOption}>
          Proximo
        </MainButton>
      </div>
    </div>
  );
}
export default GCQuestionPage;
