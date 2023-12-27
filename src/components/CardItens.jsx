import { Link } from "react-router-dom"
import PropTypes from "prop-types"

CardItens.propTypes = {
  id: PropTypes.number.isRequired,
  nome: PropTypes.string,
  estoque: PropTypes.number,
  categoria: PropTypes.string
}

export default function CardItens({ id, nome, estoque, categoria }){
  return (
    <section className="gridItens sectionItens">
      <div>{id}</div>
      <div>{nome}</div>
      <div>{estoque} unid.</div>
      <div>{categoria}</div>
      <div className="actionBtn">
        <Link to={`/itens/${id}`}>
          <button>Ver</button>
        </Link>
        <button>Atualizar</button>
        <button>Excluir</button>
      </div>
    </section>
  )
}