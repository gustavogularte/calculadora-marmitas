import React from 'react';

const App = () => {
  const [frango, setFrango] = React.useState(0);
  const [moida, setMoida] = React.useState(0);
  const [picadinho, setPicadinho] = React.useState(0);
  const [lentilha, setLentilha] = React.useState(0);
  const [proteinaSoja, setProteinaSoja] = React.useState(0);
  const [bico, setBico] = React.useState(0);
  const [feijao, setFeijao] = React.useState(0);
  const [arrozIntegral, setArrozIntegral] = React.useState(0);
  const [arrozBranco, setArrozBranco] = React.useState(0);
  const [massaIntegral, setMassaIntegral] = React.useState(0);
  const [batataDoce, setBatataDoce] = React.useState(0);
  const [batata, setBatata] = React.useState(0);
  //const [pure, setPure] = React.useState(0);
  const [moranga, setMoranga] = React.useState(0);
  const [abobrinha, setAbobrinha] = React.useState(0);
  const [couve, setCouve] = React.useState(0);
  const [brocolis, setBrocolis] = React.useState(0);
  const [legumes, setLegumes] = React.useState(0);

  function lowCarb(calc) {
    if (calc === 'mais') {
      setFrango(frango + 400);
      setMoida(moida + 300);
      setLentilha(lentilha + 120);
      setBatataDoce(batataDoce + 120);
      setMoranga(moranga + 300);
      setAbobrinha(abobrinha + 200);
      setCouve(couve + 80);
      setLegumes(legumes + 460);
    } else {
      setFrango(frango - 400);
      setMoida(moida - 300);
      setLentilha(lentilha - 120);
      setBatataDoce(batataDoce - 120);
      setMoranga(moranga - 300);
      setAbobrinha(abobrinha - 200);
      setCouve(couve - 80);
      setLegumes(legumes - 460);
    }
  }

  function vegetariano(calc) {
    if (calc === 'mais') {
      setBico(bico + 100);
      setProteinaSoja(proteinaSoja + 180);
      setLentilha(lentilha + 240);
      setFeijao(feijao + 210);
      setArrozIntegral(arrozIntegral + 120);
      setArrozBranco(arrozBranco + 100);
      setMassaIntegral(massaIntegral + 110);
      setBatataDoce(batataDoce + 100);
      setBatata(batata + 120);
      setMoranga(moranga + 100);
      setCouve(couve + 80);
      setBrocolis(brocolis + 160);
      setLegumes(legumes + 80);
    } else {
      setBico(bico - 100);
      setProteinaSoja(proteinaSoja - 180);
      setLentilha(lentilha - 240);
      setFeijao(feijao - 210);
      setArrozIntegral(arrozIntegral - 120);
      setArrozBranco(arrozBranco - 100);
      setMassaIntegral(massaIntegral - 110);
      setBatataDoce(batataDoce - 100);
      setBatata(batata - 120);
      setMoranga(moranga - 100);
      setCouve(couve - 80);
      setBrocolis(brocolis - 160);
      setLegumes(legumes - 80);
    }
  }

  function fitness(calc) {
    if (calc === 'mais') {
      setFrango(frango + 420);
      setMoida(moida + 100);
      setPicadinho(picadinho + 100);
      setArrozIntegral(arrozIntegral + 120);
      setMassaIntegral(massaIntegral + 120);
      setBatataDoce(batataDoce + 240);
      setMoranga(moranga + 120);
      setCouve(couve + 80);
      setLegumes(legumes + 420);
    } else {
      setFrango(frango - 420);
      setMoida(moida - 100);
      setPicadinho(picadinho - 100);
      setArrozIntegral(arrozIntegral - 120);
      setMassaIntegral(massaIntegral - 120);
      setBatataDoce(batataDoce - 240);
      setMoranga(moranga - 120);
      setCouve(couve - 80);
      setLegumes(legumes - 420);
    }
  }

  return (
    <main>
      <article>
        <h1>COMBOS</h1>
        <section>
          <h2>LOW CARB</h2>
          <div>
            <button onClick={() => lowCarb('menos')}>-</button>
            <button onClick={() => lowCarb('mais')}>+</button>
          </div>
        </section>
        <section>
          <h2>VEGETARIANO</h2>
          <div>
            <button onClick={() => vegetariano('menos')}>-</button>
            <button onClick={() => vegetariano('mais')}>+</button>
          </div>
        </section>
        <section>
          <h2>FITNESS</h2>
          <div>
            <button onClick={() => fitness('menos')}>-</button>
            <button onClick={() => fitness('mais')}>+</button>
          </div>
        </section>
        <section>
          <h2>TRADICIONAL</h2>
          <div>
            <button>-</button>
            <button>+</button>
          </div>
        </section>
      </article>
      <article>
        <ul>
          <li>Frango: {frango}g</li>
          <li>Carne Moída: {moida}g</li>
          <li>Picadinho de carne: {picadinho}g</li>
          <li>Grão de bico: {bico}g</li>
          <li>Proteina de soja com legumes: {proteinaSoja}g</li>
          <li>Lentilha: {lentilha}g</li>
          <li>Feijão: {feijao}g</li>
          <li>Arroz integral: {arrozIntegral}g</li>
          <li>Arroz branco: {arrozBranco}g</li>
          <li>Massa integral: {massaIntegral}g</li>
          <li>Batata doce: {batataDoce}g</li>
          <li>Moranga: {moranga}g</li>
          <li>Abobrinha: {abobrinha}g</li>
          <li>Couve: {couve}g</li>
          <li>Brócolis: {brocolis}g</li>
          <li>Legumes: {legumes}g</li>
        </ul>
      </article>
    </main>
  );
};

export default App;
