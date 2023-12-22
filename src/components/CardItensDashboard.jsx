import PropTypes from "prop-types"

CardItensDashboard.propTypes = {
  name: PropTypes.string,
  qtd: PropTypes.number
}

export default function CardItensDashboard({ name, qtd }){
  return (
    <div style={{display: "flex", justifyContent: "space-around", marginBottom: "1rem"}}>
      <p>{name}</p>
      <p style={!qtd ? {display: "none"}: {display: "block"}}>{qtd}</p>
      <button>Ver</button>
    </div>
  )
}