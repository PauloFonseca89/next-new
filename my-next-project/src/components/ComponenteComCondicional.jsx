// Em react o if else é feito a partir do ternário ou com && para mostrar algo apenas se for verdadeiro
// OPERADOR TERNÁRIO: condição ? seVerdadeiro : seFalso

export default function ComponenteComCondicional() {
  let estaLogado = true;
  let nomeUtilizador = "Paulo Renato";
  let acessoCompleto = true;

  return (
    <div className="bg-purple-100 border border-purple-500 text-purple-700 px-44 py-2 rounded mb-7">
      <h2 className="text-xl font-semibold">Estado do Login</h2>
      
      {/* estaLogado é TRUE? Se sim: "Bem-vinda, {nomeUtilizador}!" Se não: "Não estás logado!" */} 
      {estaLogado ? (  
        <p>Bem-vinda, {nomeUtilizador}!</p>
      ) : (
        <p>Não estás logado!</p>
      )}
      
      {/* Também podes usar && para mostrar algo apenas se for verdadeiro */}
      {acessoCompleto && <p>Tens acesso completo!</p>}
    </div>
  )
}

// COMO USAR no index.js:
// <ComponenteComCondicional />