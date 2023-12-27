import CardItens from "../components/CardItens";
import itens from "../database.json"

export default function TodosItens(){
  return (
    <div>
      <nav className="gridItens navItens">
        <div>ID</div>
        <div>Nome</div>
        <div>Em estoque</div>
        <div>Categoria</div>
        <div>Ações</div>
      </nav>
      {itens.map((item) => (
        <CardItens key={item.id} id={item.id} nome={item.nome} estoque={item.estoque} categoria={item.categoria} />
      ))}
    </div>
  )
}