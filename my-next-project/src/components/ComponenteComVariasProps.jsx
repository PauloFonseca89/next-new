
export default function ComponenteComVariasProps({ titulo, cor, nome, idade }) {
  return (
    <div className={`bg-${cor}-500 border border-${cor}-400 text-${cor}-400 px-4 py-3 rounded mb-4`}>
      <h2 className="text-xl font-semibold">{titulo}</h2>
      <p>Nome: {nome}</p>
      <p>Idade: {idade} anos</p>
      <p>Este componente recebeu o nome, a idade, o titulo e a cor como props!</p>
    </div>
  )
}
