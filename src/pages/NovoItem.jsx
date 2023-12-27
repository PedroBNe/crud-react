import { useState } from "react"
import item from "../database.json"

export default function NovoItem(){

  const [name, setName] = useState()
  const [qtd, setQtd] = useState(0)
  const [price, setPrice] = useState(0)
  const [categoria, setCategoria] = useState()
  const [desc, setDesc] = useState()

  function salvar() {
    console.log(name, qtd, price, categoria, desc)
    item.push(
      {
        id: +item[(item.length -1)].id + 1,
        nome: name,
        estoque: qtd,
        preco: price,
        categoria: categoria,
        descricao: desc,
        dateCreated: new Date,
        dateModification: ""
      }
    )
    setName("")
    setQtd(0)
    setPrice(0)
    setCategoria("")
    setDesc("")
  }

  return (
    <div className="formItem">
      <div>
        <label htmlFor="nameItem">Nome</label>
        <input
          type="text"
          id="nameItem"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />
      </div>
      <div>
        <label htmlFor="quantItem">Quantidade</label>
        <input
          type="number"
          id="quantItem"
          min={0}
          value={qtd}
          onChange={(ev) => setQtd(ev.target.value)}
        />
      </div>
      <div>
        <label htmlFor="priceItem">Preço</label>
        <input
          type="number"
          id="priceItem"
          min={0}
          value={price}
          onChange={(ev) => setPrice(ev.target.value)}
        />
      </div>
      <div>
        <label htmlFor="categoriaItem">Categoria</label>
        <select id="categoriaItem" value={categoria} onChange={(ev) => setCategoria(ev.target.value)}>
          <option value="">Selecione uma Categoria</option>
          <option value="livros">Livros</option>
          <option value="jogos">Jogos</option>
        </select>
      </div>
      <div>
        <label htmlFor="descItem">Descrição</label>
        <textarea id="descItem" cols="50" rows="3" value={desc} onChange={(ev) => setDesc(ev.target.value)}></textarea>
      </div>
      <div>
        <button onClick={() => salvar()}>Salvar</button>
      </div>
    </div>
  )
}