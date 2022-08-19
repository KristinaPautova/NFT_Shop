import './App.css';
import NavBar from "./Components/Navbar/NavBar";
import MainRouts from "./MainRouts";
import Footer from "./Components/Footer/Footer";
import NftContextProvider from "./context/NFTContextProvider";
import AuthContextProvider from "./context/AuthContext";
import CartContextProvider from "./context/CartContextProvider";
import {ToastContainer} from "react-toastify";
import FavoritesContextProvider from "./context/FavoritesContextProvider";
import ChatContextProvider from "./context/ChatContextProvider";


function App() {
  return (
      <AuthContextProvider>
          <FavoritesContextProvider>
          <CartContextProvider>
              <ChatContextProvider>
      <NftContextProvider>
         <NavBar/>
          <div style={{marginTop:'50px'}}>
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
              </ChatContextProvider>
          </CartContextProvider>
          </FavoritesContextProvider>
      </AuthContextProvider>
  );
}

export default App;
