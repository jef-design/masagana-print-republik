import {createBrowserRouter, RouterProvider, Navigate} from "react-router-dom";
import Home from "./pages/Home";
import LookBook from "./pages/LookBook";
import Shop from "./pages/Shop"
import HomeScreen from "./pages/HomeScreen";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            children: [
              {
                index: true,
                element: <HomeScreen/>
              },
              {
                path: '/shop',
                element: <Shop/>
              },
              {
                path: "/lookbook",
                element: <LookBook />,
            },
            ]
        },
       
    ]);
    return <RouterProvider router={router} />;
}

export default App;
