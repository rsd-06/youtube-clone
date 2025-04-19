import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

//Importing App.jsx
import App from "./App";

//Creating Root Element & Rendering it.
createRoot(document.getElementById("root")).render(
    <>
        <React.StrictMode>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </React.StrictMode>
    </>
)