import CardDashboard from "../components/CardDashboard";
import CardItensDashboard from "../components/CardItensDashboard";

export default function Dashboard(){
  return (
    <div style={{padding: "5px 20px"}} >
      <h1>Dashboard</h1>
      <section className="container">
        <CardDashboard title="Diversidade de itens" valor={2} />
        <CardDashboard title="Inventário total" valor={40} />
        <CardDashboard title="Itens recentes" valor={2} />
        <CardDashboard title="Itens acabando" valor={1} />
        <div className="wide-box">
          <div style={{display: "flex", justifyContent: "space-around", background: "#1C1A1D", marginBottom: "1rem"}}>
            <p>Itens Recentes</p>
            <p>Ações</p>
          </div>
          <CardItensDashboard name="7 algo" />
        </div>
        <div className="wide-box">
          <div style={{display: "flex", justifyContent: "space-around", background: "#1C1A1D", marginBottom: "1rem"}}>
            <p>Itens Recentes</p>
            <p>Qtd.</p>
            <p>Ações</p>
          </div>
          <CardItensDashboard name="O senhor dos aneis" qtd={8} />
        </div>
      </section>
    </div>
  )
}