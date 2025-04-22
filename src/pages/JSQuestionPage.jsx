import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MainButton from "../components/MainButton";
import QuestionButton from "../components/QuestionButon";
import JSLogo from "../assets/JSLogo.svg";
function JSQuestionPage() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const jsQuestions = [
    {
      question: "O que é JavaScript?",
      options: [
        "Uma linguagem de marcação",
        "Uma linguagem de programação de baixo nível",
        "Uma linguagem de programação interpretada",
        "Um banco de dados",
      ],
      correctAnswer: "Uma linguagem de programação interpretada",
    },
    {
      question: "Qual destes tipos de dados NÃO existe em JavaScript?",
      options: ["String", "Boolean", "Float", "Undefined"],
      correctAnswer: "Float",
    },
    {
      question: "Como declarar uma variável em JavaScript no ES6?",
      options: ["var", "const", "let", "Todas as alternativas"],
      correctAnswer: "Todas as alternativas",
    },
    {
      question: "O que o operador '===' faz?",
      options: [
        "Compara apenas valores",
        "Compara valores e tipos",
        "Atribui um valor",
        "Verifica se é diferente",
      ],
      correctAnswer: "Compara valores e tipos",
    },
    {
      question: "O que é hoisting em JavaScript?",
      options: [
        "Mover variáveis para fora do escopo",
        "Aumentar a performance do código",
        "Levar declarações ao topo do escopo",
        "Criar variáveis automaticamente",
      ],
      correctAnswer: "Levar declarações ao topo do escopo",
    },
    {
      question: "Qual a saída de: typeof null?",
      options: ["'null'", "'object'", "'undefined'", "'boolean'"],
      correctAnswer: "'object'",
    },
    {
      question: "O que é uma função de callback?",
      options: [
        "Uma função que é chamada após outra função",
        "Uma função que retorna outra função",
        "Uma função que só funciona com arrays",
        "Uma função que chama o console",
      ],
      correctAnswer: "Uma função que é chamada após outra função",
    },
    {
      question: "Para que serve o método `map()`?",
      options: [
        "Modificar arrays in-place",
        "Iterar sobre arrays e retornar um novo array",
        "Filtrar elementos de um array",
        "Buscar elementos em um array",
      ],
      correctAnswer: "Iterar sobre arrays e retornar um novo array",
    },
    {
      question: "O que acontece se usarmos `let` fora de um bloco?",
      options: [
        "Ela será global",
        "Ela será local apenas ao escopo onde foi declarada",
        "Ela se comporta igual ao `var`",
        "Ela gera erro",
      ],
      correctAnswer: "Ela será local apenas ao escopo onde foi declarada",
    },
    {
      question: "Qual é a principal diferença entre `==` e `===`?",
      options: [
        "`==` compara tipos e valores, `===` só valores",
        "`==` ignora tipos, `===` compara tipos e valores",
        "`===` converte valores automaticamente",
        "Não há diferença",
      ],
      correctAnswer: "`==` ignora tipos, `===` compara tipos e valores",
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
      selectedOption === jsQuestions[currentQuestionIndex].correctAnswer;

    const newAnswer = { selectedAnswer: selectedOption, isCorrect };
    const updatedAnswers = [...answers, newAnswer];

    if (currentQuestionIndex < jsQuestions.length - 1) {
      setAnswers(updatedAnswers);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null); // reseta seleção
    } else {
      alert(
        `Fim do quiz! Você acertou ${
          updatedAnswers.filter((answer) => answer.isCorrect).length
        } de ${jsQuestions.length}`
      );
      navigate("/answers", {
        state: {
          answers: updatedAnswers,
          questions: jsQuestions,
        },
      });
    }
  };
  return (
    <div className="w-screen h-screen bg-slate-900 flex justify-center p-6">
      <div className="flex flex-col items-center justify-center bg-slate-200 rounded-lg p-6 gap-4 shadow-lg border border-black">
        <img src={JSLogo} className="logo react w-30 h-40 " alt="JS logo" />
        <h1>{jsQuestions[currentQuestionIndex].question}</h1>
        {jsQuestions[currentQuestionIndex].options.map((option, index) => (
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
export default JSQuestionPage;
