import { Link } from "react-router-dom";

export default function Header(){
  return(
    <header>
      <nav style={{display: "flex", justifyContent: "space-between", color: "white", padding: "5px 20px"}}>
        <span>REACT STOCK</span>
        <div style={{display: "flex", gap: "1rem"}}>
          <Link to="/">Início</Link>
          <Link to="/itens">Itens</Link>
        </div>
      </nav>
    </header>
  )
}