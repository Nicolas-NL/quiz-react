function MainButton(props) {
  return (
    <button
      {...props}
      className="bg-blue-900 w-30 h-auto font-sans font-bold p-2 rounded-md  text-white border border-black gap-2 items-center flex" 
    >
      {props.children}
    </button>
  );
}
export default MainButton;
