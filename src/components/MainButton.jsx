function MainButton(props) {
  return (
    <button
      {...props}
      className="bg-blue-900 w-1/2 h-auto font-sans font-bold p-2 rounded-md  text-white"
    >
      {props.children}
    </button>
  );
}
export default MainButton;
