function QuestionButton({ isSelected, children, ...rest }) {
  return (
    <button
      {...rest}
      className={`w-80 bg-slate-400 p-2 rounded-md border-2 transition-all 
        ${isSelected ? "border-blue-400" : "border-transparent"}`}
    >
      {children}
    </button>
  );
}

export default QuestionButton;
