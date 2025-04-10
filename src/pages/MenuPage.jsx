import MainButton from "../components/MainButton";
import { useNavigate } from 'react-router-dom';

function MenuPage() {
const navigate = useNavigate();
const ReactPageClick = () => {
  navigate('/react');
}
const JSageClick = () => {
    navigate('/js');
  }
  return (
      <div className="w-screen h-screen bg-slate-900 flex items-center justify-center p-6">
        <div className="flex flex-col items-center bg-slate-800 rounded-xl p-8 gap-6 shadow-xl w-full h-80 max-w-md border border-black">
          <h1 className="text-4xl font-bold text-white">Menu</h1>
          <p className="text-slate-300 text-sm mb-4">Escolha um quiz para testar seus conhecimentos</p>
          <div className="flex flex-col sm:flex-row items-center gap-4 ">
            <MainButton onClick={ReactPageClick}>
              React Quiz  
            </MainButton>
            <MainButton onClick={JSageClick}>
              JavaScript Quiz   
            </MainButton>
          </div>
        </div>
      </div>
    );
    
}
export default MenuPage;