import ComponenteComCondicional from "@/components/ComponenteComCondicional";
import ComponenteComEventos from "@/components/ComponenteComEventos";
import ComponenteComMap from "@/components/ComponenteComMap";
import ComponenteComUmaProp from "@/components/ComponenteComUmaProp";
import ComponenteComVariasProps from "@/components/ComponenteComVariasProps";
import PrimeiroComponente from "@/components/PrimeiroComponente";

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-500 flex flex-col items-center
justify-center">
<h1 className="text-3xl font-bold text-black">Resumo do React😀</h1>
<PrimeiroComponente />
<ComponenteComUmaProp  nome= "Paulo Fonseca"/>
<ComponenteComVariasProps tilulo="Perfil do Utilizador" cor="blue" nome="Renato" idade="32"/>
<ComponenteComCondicional/>
<ComponenteComMap/>
<ComponenteComEventos/>
</div>
)}
