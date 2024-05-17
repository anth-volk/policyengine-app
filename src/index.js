import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration.js";
import loc_en_gb from "./lang/plotly_locales/locale-en-gb.js";
import loc_en_us from "./lang/plotly_locales/locale-en-us.js";
import {
  RouterProvider
} from "react-router-dom";
import { router } from "./routing/router.js";

var Plotly = require("plotly.js/dist/plotly.js");
Plotly.register(loc_en_gb);
Plotly.register(loc_en_us);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
);

serviceWorkerRegistration.unregister();