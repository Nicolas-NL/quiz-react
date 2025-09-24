import MainButton from "../components/MainButton";
import { useNavigate } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import JSLogo from "../assets/JSLogo.svg";
import file from "../assets/file.svg";
function MenuPage() {
  const navigate = useNavigate();
  const ReactPageClick = () => {
    navigate("/react");
  };
  const JPageClick = () => {
    navigate("/js");
  };
    const GCPageClick = () => {
    navigate("/gc");
  };
  return (
    <div className="w-screen h-screen bg-slate-900 flex items-center justify-center p-6">
      <div className="flex flex-col items-center bg-slate-800 rounded-xl p-8 gap-6 shadow-xl w-full h-90 max-w-md border border-black">
        <h1 className="text-4xl font-bold text-white">Menu</h1>
        <p className="text-slate-400 text-sm mb-4">
          Escolha um quiz para testar seus conhecimentos
        </p>
        <div className="flex flex-col items-center gap-4 ">
          <MainButton onClick={ReactPageClick}>
            <img
              src={reactLogo}
              className="logo react w-5 h-6 "
              alt="React logo"
            />
            React Quiz
          </MainButton>
          <MainButton  onClick={JPageClick}>
            <img
              src={JSLogo}
              className="logo react w-5 h-6 "
              alt="React logo"
            />
            JavaScript Quiz
          </MainButton>
          <MainButton onClick={GCPageClick}>
            <img
              src={file}
              className="logo react w-5 h-6 "
              alt="file logo"
            />
            Conhecimentos Gerais Quiz
          </MainButton>
        </div>
      </div>
    </div>
  );
}
export default MenuPage;
