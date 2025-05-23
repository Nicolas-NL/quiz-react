import React, { useState } from "react";
import reactLogo from "../assets/react.svg";
import QuestionButton from "../components/QuestionButon";
import { useNavigate } from "react-router-dom";
import MainButton from "../components/MainButton";
function QuestionPage() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const questions = [
    {
      question: "O que é o React?",
      options: [
        "Uma linguagem de programação",
        "Uma biblioteca JavaScript",
        "Um framework de front-end",
        "Um banco de dados",
      ],
      correctAnswer: "Uma biblioteca JavaScript",
    },
    {
      question: "Qual o principal objetivo do React?",
      options: [
        "Gerenciar estados",
        "Criar interfaces de usuário",
        "Conectar com banco de dados",
        "Manipular APIs",
      ],
      correctAnswer: "Criar interfaces de usuário",
    },
    {
      question: "O que são componentes no React?",
      options: [
        "Funções que retornam JSX",
        "Estilos CSS",
        "Objetos JavaScript",
        "Variáveis",
      ],
      correctAnswer: "Funções que retornam JSX",
    },
    {
      question: "O que significa JSX?",
      options: [
        "JavaScript Xtreme Syntax",
        "JavaScript XML",
        "Java Syntax XML",
        "JavaScript Extra",
      ],
      correctAnswer: "JavaScript XML",
    },
    {
      question: "Como se cria um componente em React?",
      options: [
        'Com a palavra-chave "component"',
        "Com uma função que retorna JSX",
        "Usando a tag <component></component>",
        'Com a função "render"',
      ],
      correctAnswer: "Com uma função que retorna JSX",
    },
    {
      question:
        "Qual a diferença entre componentes de classe e componentes funcionais no React?",
      options: [
        "Componentes de classe são mais rápidos",
        "Componentes de classe têm mais funcionalidades que os funcionais",
        "Componentes de classe não podem ter estado",
        "Componentes de classe são obsoletos",
      ],
      correctAnswer:
        "Componentes de classe têm mais funcionalidades que os funcionais",
    },
    {
      question: "O que é o estado (state) no React?",
      options: [
        "Uma variável global",
        "Uma maneira de gerenciar a renderização do componente",
        "Um tipo de componente",
        "Uma biblioteca externa",
      ],
      correctAnswer: "Uma maneira de gerenciar a renderização do componente",
    },
    {
      question: "Como se passa dados entre componentes em React?",
      options: [
        "Através de props",
        "Através de state",
        "Através de context",
        "Através de variáveis globais",
      ],
      correctAnswer: "Através de props",
    },
    {
      question: "O que são hooks no React?",
      options: [
        "Funções para modificar componentes",
        "Funções para gerenciar estado e efeitos em componentes funcionais",
        "Funções que criam componentes",
        "Funções de renderização",
      ],
      correctAnswer:
        "Funções para gerenciar estado e efeitos em componentes funcionais",
    },
    {
      question:
        "Qual hook é usado para gerenciar o estado em componentes funcionais?",
      options: ["useEffect", "useState", "useReducer", "useCallback"],
      correctAnswer: "useState",
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
      selectedOption === questions[currentQuestionIndex].correctAnswer;

    const newAnswer = { selectedAnswer: selectedOption, isCorrect };
    const updatedAnswers = [...answers, newAnswer];

    if (currentQuestionIndex < questions.length - 1) {
      setAnswers(updatedAnswers);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null); // reseta seleção
    } else {
      alert(
        `Fim do quiz! Você acertou ${
          updatedAnswers.filter((answer) => answer.isCorrect).length
        } de ${questions.length}`
      );
      navigate("/answers", {
        state: {
          answers: updatedAnswers,
          questions: questions,
        },
      });
    }
  };
  return (
    <div className="w-screen h-screen bg-slate-900 flex justify-center p-6">
      <div className="flex flex-col items-center justify-center bg-slate-200 rounded-lg p-6 gap-4 shadow-lg border border-black">
        <img
          src={reactLogo}
          className="logo react w-30 h-40 "
          alt="React logo"
        />
        <h1>{questions[currentQuestionIndex].question}</h1>
        {questions[currentQuestionIndex].options.map((option, index) => (
          <QuestionButton
            key={index}
            isSelected={selectedOption === option}
            onClick={() => handleAnswer(option)}
          >
            {option}
          </QuestionButton>

          //<>2</>
        ))}
        <MainButton onClick={nextQuestion} disabled={!selectedOption}>
          Proximo
        </MainButton>
      </div>
    </div>
  );
}
export default QuestionPage;
