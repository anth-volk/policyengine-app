import { createBrowserRouter, Outlet } from "react-router-dom";
import Auth0ProviderWithNavigate from "../auth/Auth0ProviderWithNavigate";
import ErrorPage from "../layout/Error";
import RedirectToCountry from "./RedirectToCountry";
import CountryIdLayout from "./CountryIdLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Jobs from "../pages/Jobs";
import Testimonials from "../pages/Testimonials";
import CalculatorInterstitial from "../pages/CalculatorInterstitial";
import Research from "../pages/Research";
import Donate from "../pages/Donate";
import PrivacyPage from "../pages/PrivacyPage";
import Contact from "../pages/Contact";
import TACPage from "../pages/TermsAndConditions";
import BlogPage from "../pages/BlogPage";
import CitizensEconomicCouncil from "../applets/CitizensEconomicCouncil";
import TrafwaCalculator from "../applets/TrafwaCalculator";
import { metadataLoader } from "./metadataLoader";

export const router = createBrowserRouter([
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
        loader: metadataLoader,
        children: [
          {
            index: true,
            element: <Home />
          },
          {
            path: "about",
            element: <About />
          },
          {
            path: "jobs",
            element: <Jobs />
          },
          {
            path: "testimonials",
            element: <Testimonials />
          },
          {
            path: "calculator",
            element: <CalculatorInterstitial />
          },
          {
            path: "research",
            element: <Outlet />, 
            children: [
              {
                index: true,
                element: <Research />
              },
              {
                path: ":slug",
                element: <BlogPage />,
              }
            ]
          },
          {
            path: "donate",
            element: <Donate />
          },
          {
            path: "privacy",
            element: <PrivacyPage />
          },
          // Note: The contact page is deprecated,
          // but removing it is out of the scope
          // of the PR creating this router
          {
            path: "contact",
            element: <Contact />
          },
          {
            path: "terms",
            element: <TACPage />
          },
        ]
        
      },
      {
        path: "/uk/cec",
        element: <CitizensEconomicCouncil />
      },
      {
        path: "/us/trafwa-ctc-calculator",
        element: <TrafwaCalculator />
      }
    ]
 }
]);

/*

        <Route path="/callback" element={<AuthCallback />} />

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