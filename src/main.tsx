import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import Module1Page from "./modules/module1/components/Module1Page.tsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./modules/core/store/store.ts";
import CountriesPage from "./modules/countries-page/components/CountriesPage.tsx";
import CountryDetails from "./modules/countries-page/components/CountryDetails.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, Component: CountriesPage },
      { path: ":countryId", Component: CountryDetails },
    ],
  },
  {
    path: "/module1",
    element: <Module1Page />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
