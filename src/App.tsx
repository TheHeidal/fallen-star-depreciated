import "./App.css";
import "react-tabs/style/react-tabs.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import CharacterSheet from "./components/CharacterSheet";
import Root from "./components/root";
import Wizard from "./components/Wizard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Navigate to="warlock" replace />,
      },
      { path: "orrery", element: <>orrery</> },
      { path: "grimoire", element: <>grimoire</> },
      { path: "rulebook", element: <>rulebook</> },
      {
        path: ":pactPosition",
        element: <Wizard />,
        children: [
          {
            index: true,
            element: <Navigate to="summary" replace />,
          },
          { path: "summary", element: <CharacterSheet /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
