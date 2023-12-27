import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard";
import Itens from "./pages/Itens";
import TodosItens from "./pages/TodosItens";
import NovoItem from "./pages/NovoItem";
import Item from "./pages/Item";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: "itens",
        element: <Itens />,
        children: [
          {
            index: true,
            element: <TodosItens />
          },
          {
            path: "novoitem",
            element: <NovoItem />
          },
        ]
      },
      {
        path: "itens/:itensId",
        element: <Item />
      }
    ]
  }
])

export default router