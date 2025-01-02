import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./Components/Layout/AppLayout";
import './App.css'
import { Home } from "./Components/Home/Home";
import { About } from "./Components/About/About";
import { Country } from "./Components/Country/Country";
import { Contact } from "./Components/Contact/Contact";
import { ErrorPage } from "./Components/Layout/ErrorPage";
import { CountryDetails } from "./Components/Country/CountryDetails";

const router = createBrowserRouter([
{
   path: "/",
element: <AppLayout/>,
errorElement:<ErrorPage/>,


children:[
  {
  path: "/",
  element: <Home />,
},
{
  path: "about",
  element: <About />,
},
{
  path: "country",
  element: <Country />,
},
{
  path: "country/:id",
  element: <CountryDetails/>,
},
{
  path: "contact",
  element: <Contact />,
},


]
},
]);
const App = () => {

  return <RouterProvider router={router}> </RouterProvider>;

};

export default App; 
