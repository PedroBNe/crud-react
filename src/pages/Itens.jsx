import { NavLink, Outlet } from "react-router-dom";

export default function Itens(){

  return (
    <div>
      <h1>Stock Items</h1>
      <NavLink 
        to="/itens" 
        className={({ isActive }) => isActive ? 'ativo' : ''}
        end
      >Todos os Itens</NavLink>
      <NavLink to="novoitem" className={({ isActive }) => isActive ? 'ativo' : ''}>Novo Item</NavLink>
      <hr />
      <Outlet />
    </div>
  )
}