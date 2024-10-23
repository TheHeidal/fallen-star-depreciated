import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import CharacterSheet from "./components/CharacterSheet";
import Root from "./components/root";
import Wizard from "./components/Wizard";
import Codex from "./components/Codex";
import Orrery from "./components/orrery/Orrery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Navigate to="orrery" replace />,
      },
      { path: "orrery", element: <Orrery /> },
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
          { path: "codex", element: <Codex /> },
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
