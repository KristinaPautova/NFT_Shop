import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function showToast(text, color){
    toast(text, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        type: color
    });
}


export default showToast;
