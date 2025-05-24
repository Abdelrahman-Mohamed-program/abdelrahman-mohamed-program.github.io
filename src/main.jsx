
import { createRoot } from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/umd/popper.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
    <BrowserRouter>

        <App />

    </BrowserRouter>
    
)