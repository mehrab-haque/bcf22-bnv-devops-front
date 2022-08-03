import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Main from "./components/Main";

var showToast;

function App() {



  showToast = message => {
    toast.dark(message, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <div>
      <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
      />

      <Main/>

    </div>
  );
}

export default App;
export {showToast}
