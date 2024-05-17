import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.css";
import PolicyEngine from "./PolicyEngine.jsx";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration.js";
import { BrowserRouter as Router } from "react-router-dom";
import loc_en_gb from "./lang/plotly_locales/locale-en-gb.js";
import loc_en_us from "./lang/plotly_locales/locale-en-us.js";
import Auth0ProviderWithNavigate from "./auth/Auth0ProviderWithNavigate.jsx";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

var Plotly = require("plotly.js/dist/plotly.js");
Plotly.register(loc_en_gb);
Plotly.register(loc_en_us);

const router = createBrowserRouter([
  {
    path: "/",
    element: <PolicyEngine />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} >
      <Auth0ProviderWithNavigate>
      {/*<PolicyEngine />*/}
      </Auth0ProviderWithNavigate>
    </RouterProvider>
);

serviceWorkerRegistration.unregister();
