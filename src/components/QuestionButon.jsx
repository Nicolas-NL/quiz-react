function QuestionButton(props) {
  return (
    <button {... props}
      className="w-80 bg-slate-400 p-2 rounded-md border border-black"
      >
        {props.children}
      </button>
  );
}   
export default QuestionButton;