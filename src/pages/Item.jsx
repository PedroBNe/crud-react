import { useParams } from "react-router-dom"
import itens from "../database.json"

export default function Item(){
  const { itensId } = useParams()

  const item = itens.find(i => i.id === itensId)

  if(!item) {
    return (
      <h2>Ops... Esse item não foi encontrado =(</h2>
    )
  }

  return (
    <>
      <div style={{display: "flex", gap: "1rem", marginBottom: "1rem"}}>
        <h3>{item.nome}</h3>
        <button>Atualizar</button>
        <button>Excluir</button>
      </div>
      <div style={{display: "flex", gap: "1rem"}}>
        <div style={{background: "#1C1A1D", borderRadius: "5px", padding: "1rem"}}>
          <p>Categoria: {item.categoria}</p>
        </div>
        <div style={{background: "#1C1A1D", borderRadius: "5px", padding: "1rem"}}>
          <p>Quantidade de estoque: {item.estoque}</p>
        </div>
        <div style={{background: "#1C1A1D", borderRadius: "5px", padding: "1rem"}}>
          <p>Preço: {item.preco}</p>
        </div>
      </div>
      <p>{item.descricao}</p>
      <p>Cadastrado em: {item.dateCreated}  Atualizado em: {item.dateModification}</p>
    </>
  )
}