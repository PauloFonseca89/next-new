import ComponenteComCondicional from "@/components/ComponenteComCondicional";
import ComponenteComEventos from "@/components/ComponenteComEventos";
import ComponenteComMap from "@/components/ComponenteComMap";
import ComponenteComState from "@/components/ComponenteComState";
import ComponenteComUmaProp from "@/components/ComponenteComUmaProp";
import ComponenteComUseEffect from "@/components/ComponenteComUseEffect";
import ComponenteComVariasProps from "@/components/ComponenteComVariasProps";
import PrimeiroComponente from "@/components/PrimeiroComponente";

export default function Home() {
  return (
    <div className="min-h-screen color-white">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-black">Resumo do React😀</h1>
        <PrimeiroComponente />
        <ComponenteComUmaProp nome="Paulo Fonseca" />
        <ComponenteComVariasProps titulo="Perfil do Utilizador" cor="blue" nome="Renato" idade="32" />
        <ComponenteComCondicional />
        <ComponenteComMap />
        <ComponenteComEventos />
        <ComponenteComState />
        <ComponenteComUseEffect />
        <ComponenteComFormix />
      </div>
    </div>
  );
}
