import { Link, Outlet } from "react-router-dom";

export default function Itens(){
  return (
    <div>
      <h1>Stock Items</h1>
      <Link to="/itens">Todos os Itens</Link>
      <Link to="novoitem">Novo Item</Link>
      <Outlet />
    </div>
  )
}