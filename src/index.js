import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.css";
import PolicyEngine from "./PolicyEngine.jsx";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration.js";
import loc_en_gb from "./lang/plotly_locales/locale-en-gb.js";
import loc_en_us from "./lang/plotly_locales/locale-en-us.js";
import Auth0ProviderWithNavigate from "./auth/Auth0ProviderWithNavigate.jsx";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from "react-router-dom";
import ErrorPage from "./layout/Error.jsx";
import Home from "./pages/Home.jsx";
import RedirectToCountry from "./routing/RedirectToCountry.jsx";
import CountryIdLayout from "./routing/CountryIdLayout.jsx";

var Plotly = require("plotly.js/dist/plotly.js");
Plotly.register(loc_en_gb);
Plotly.register(loc_en_us);

const router = createBrowserRouter([
 {
    element: <Auth0ProviderWithNavigate />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <RedirectToCountry />
      },
      {
        path: "/:countryId",
        element: <CountryIdLayout />,
        children: [
          {
            index: true,
            element: <Home />
          }
        ]
        
      }
    ]
 }
]);
/*
        <Route path="/" element={<Navigate to={`/${countryId}`} />} />

        <Route path="/callback" element={<AuthCallback />} />
        <Route path="/:countryId" element={<Home />} />
        <Route path="/:countryId/about" element={<About />} />
        <Route path="/:countryId/jobs" element={<Jobs />} />
        <Route path="/:countryId/testimonials" element={<Testimonials />} />
        <Route
          path="/:countryId/calculator"
          element={<CalculatorInterstitial />}
        />
        <Route path="/:countryId/research" element={<Research />} />
        <Route path="/:countryId/contact" element={<Contact />} />
        <Route path="/:countryId/donate" element={<Donate />} />
        <Route path="/:countryId/research/*" element={<BlogPage />} />
        <Route path="/:countryId/privacy" element={<PrivacyPage />} />
        <Route path="/:countryId/terms" element={<TACPage />} />

        <Route
          path="/:countryId/household/*"
          element={metadata ? householdPage : error ? errorPage : loadingPage}
        />
        <Route
          path="/:countryId/policy/*"
          element={metadata ? policyPage : error ? errorPage : loadingPage}
        />

        <Route
          path="/:countryId/profile"
          element={
            <Navigate to={`/${countryId}/profile/${userProfile.user_id}`} />
          }
        />
        <Route
          path="/:countryId/profile/:user_id"
          element={
            <UserProfilePage
              metadata={metadata}
              authedUserProfile={userProfile}
            />
          }
        />

        <Route
          path="/:countryId/api"
          element={<APIDocumentationPage metadata={metadata} />}
        />
        <Route path="/uk/cec" element={<CitizensEconomicCouncil />} />
        <Route
          path="/us/trafwa-ctc-calculator"
          element={<TrafwaCalculator />}
        />
*/
        {/* redirect from /countryId/blog/slug to /countryId/research/slug */}
        /*
        <Route
          path="/:countryId/blog/:slug"
          element={<Navigate to={`/${countryId}/research/${pathParts[3]}`} />}
        />
        */

        {/* Redirect for unrecognized paths */}
        /*
        <Route path="*" element={<Navigate to={`/${countryId}`} />} />
        */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
);

serviceWorkerRegistration.unregister();