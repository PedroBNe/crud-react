import PropTypes from "prop-types"

CardDashboard.propTypes = {
  title: PropTypes.string,
  valor: PropTypes.number
}

export default function CardDashboard({ title, valor }){
  return (
    <div style={{ background: "#1C1A1D", padding: "1rem", borderRadius: "5px", boxShadow: "1px 1px 1px black" }}>
      <span>{title}</span>
      <h1 style={{display: "flex", justifyContent: "center"}}>{valor}</h1>
    </div>
  )
}