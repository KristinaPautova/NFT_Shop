import './App.css';
import NavBar from "./Components/Navbar/NavBar";
import MainRouts from "./MainRouts";
import Footer from "./Components/Footer/Footer";
import NftContextProvider from "./context/NFTContextProvider";
import AuthContextProvider from "./context/AuthContext";
import CartContextProvider from "./context/CartContextProvider";
import {ToastContainer} from "react-toastify";


function App() {
  return (
      <AuthContextProvider>
          <CartContextProvider>
      <NftContextProvider>
         <NavBar/>
          <div style={{marginTop:'60px'}}>
             <MainRouts/>
          </div>
          <Footer/>
          <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover={false}
          />
      </NftContextProvider>
          </CartContextProvider>
      </AuthContextProvider>
  );
}

export default App;
