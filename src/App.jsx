import React from 'react';
import styles from './App.module.css';

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
  const [arrozPrimavera, setArrozPrimavera] = React.useState(0);
  const [massaIntegral, setMassaIntegral] = React.useState(0);
  const [macarrao, setMacarrao] = React.useState(0);
  const [batataDoce, setBatataDoce] = React.useState(0);
  const [batata, setBatata] = React.useState(0);
  const [batataSaute, setBatataSaute] = React.useState(0);
  const [moranga, setMoranga] = React.useState(0);
  const [abobrinha, setAbobrinha] = React.useState(0);
  const [couve, setCouve] = React.useState(0);
  const [brocolis, setBrocolis] = React.useState(0);
  const [legumes, setLegumes] = React.useState(0);
  const [cenoura, setCenoura] = React.useState(0);
  const [panquecaCarne, setPanquecaCarne] = React.useState(0);
  const [escondidinhoCarne, setEscondidinhoCarne] = React.useState(0);

  const [lowct, setlowct] = React.useState(0);
  const [vegct, setvegct] = React.useState(0);
  const [fitct, setfitct] = React.useState(0);
  const [tradct, settradct] = React.useState(0);
  const [quantidades, setQuantidades] = React.useState({});

  function lowCarb(calc) {
    const sinal = calc === 'mais' ? 1 : -1;
    setlowct(lowct + sinal);
    setFrango(frango + sinal * 400);
    setMoida(moida + sinal * 300);
    setLentilha(lentilha + sinal * 120);
    setBatataDoce(batataDoce + sinal * 120);
    setBatata(batata + sinal * 120);
    setMoranga(moranga + sinal * 300);
    setAbobrinha(abobrinha + sinal * 200);
    setCouve(couve + sinal * 80);
    setLegumes(legumes + sinal * 460);
  }

  function vegetariano(calc) {
    const sinal = calc === 'mais' ? 1 : -1;
    setvegct(vegct + sinal);
    setBico(bico + sinal * 100);
    setProteinaSoja(proteinaSoja + sinal * 180);
    setLentilha(lentilha + sinal * 240);
    setFeijao(feijao + sinal * 210);
    setArrozIntegral(arrozIntegral + sinal * 120);
    setArrozBranco(arrozBranco + sinal * 100);
    setMassaIntegral(massaIntegral + sinal * 110);
    setBatataDoce(batataDoce + sinal * 100);
    setBatata(batata + sinal * 120);
    setMoranga(moranga + sinal * 100);
    setCouve(couve + sinal * 80);
    setBrocolis(brocolis + sinal * 160);
    setLegumes(legumes + sinal * 80);
  }

  function fitness(calc) {
    const sinal = calc === 'mais' ? 1 : -1;
    setfitct(fitct + sinal);
    setFrango(frango + sinal * 420);
    setMoida(moida + sinal * 100);
    setPicadinho(picadinho + sinal * 100);
    setPanquecaCarne(panquecaCarne + sinal * 200);
    setArrozIntegral(arrozIntegral + sinal * 120);
    setArrozPrimavera(arrozPrimavera + sinal * 180);
    setMassaIntegral(massaIntegral + sinal * 120);
    setBatataDoce(batataDoce + sinal * 240);
    setMoranga(moranga + sinal * 120);
    setCouve(couve + sinal * 80);
    setLegumes(legumes + sinal * 420);
  }

  function tradicional(calc) {
    const sinal = calc === 'mais' ? 1 : -1;
    settradct(tradct + sinal);
    setFrango(frango + sinal * 400);
    setMoida(moida + sinal * 200);
    setPanquecaCarne(panquecaCarne + sinal * 100);
    setFeijao(feijao + sinal * 180);
    setLentilha(lentilha + sinal * 180);
    setMacarrao(macarrao + sinal * 120);
    setArrozBranco(arrozBranco + sinal * 380);
    setBatataDoce(batataDoce + sinal * 120);
    setBatataSaute(batataSaute + sinal * 100);
    setMoranga(moranga + sinal * 120);
    setCouve(couve + sinal * 120);
    setLegumes(legumes + sinal * 80);
  }

  function unidades(opc, calc) {
    const sinal = calc === 'mais' ? 1 : -1;

    setQuantidades(prevQuantidades => ({
      ...prevQuantidades,
      [opc]: calc === 'mais' ? (prevQuantidades[opc] || 0) + 1 : (prevQuantidades[opc] || 0) - 1
    }));

    if (opc === 1) {
      setArrozIntegral(arrozIntegral + sinal * 100);
      setFrango(frango + sinal * 100);
      setBrocolis(brocolis + sinal * 40);
      setBatataSaute(batataSaute + sinal * 60);
    }
    if (opc === 2) {
      setEscondidinhoCarne(escondidinhoCarne + sinal * 220);
      setLegumes(legumes + sinal * 80);
    }
    if (opc === 3) {
      setMassaIntegral(massaIntegral + sinal * 120);
      setMoida(moida + sinal * 100);
      setLegumes(legumes + sinal * 80);
    }
    if (opc === 4) {
      setArrozIntegral(arrozIntegral + sinal * 120);
      setMoida(moida + sinal * 100);
      setCouve(couve + sinal * 40);
      setBrocolis(brocolis + sinal * 40);
    }
    if (opc === 5) {
      setBatataDoce(batataDoce + sinal * 120);
      setFrango(frango + sinal * 100);
      setLegumes(legumes + sinal * 80);
    }
    if (opc === 6) {
      setBatataDoce(batataDoce + sinal * 80);
      setFrango(frango + sinal * 100);
      arrozIntegral(arrozIntegral + sinal * 40);
      setCouve(couve + sinal * 40);
      setMoranga(moranga + sinal * 40);
    }
    if (opc === 7) {
      setFrango(frango + sinal * 100);
      arrozIntegral(arrozIntegral + sinal * 120);
      setBrocolis(brocolis + sinal * 40);
      setLegumes(legumes + sinal * 40);
    }
    if (opc === 8) {
      setMoida(moida + sinal * 100);
      arrozIntegral(arrozIntegral + sinal * 120);
      setCouve(couve + sinal * 40);
      setLegumes(legumes + sinal * 40);
    }
    if (opc === 9) {
      panquecaCarne(panquecaCarne + sinal * 220);
      setLegumes(legumes + sinal * 80);
    }
    if (opc === 10) {
      setMoida(moida + sinal * 100);
      setMassaIntegral(massaIntegral + sinal * 120);
      setCouve(couve + sinal * 40);
      setLegumes(legumes + sinal * 40);
    }
    if (opc === 11) {
      setFrango(frango + sinal * 100);
      setArrozPrimavera(arrozPrimavera + sinal * 120);
      setAbobrinha(abobrinha + sinal * 40);
      setCenoura(cenoura + sinal * 40);
    }
    if (opc === 12) {
      setFrango(frango + sinal * 100);
      setBatataDoce(batataDoce + sinal * 120);
      setBrocolis(brocolis + sinal * 40);
      setCouve(couve + sinal * 40);
    }
    if (opc === 13) {
      setPicadinho(picadinho + sinal * 100);
      setMoranga(moranga + sinal * 120);
      setCouve(couve + sinal * 80);
    }
    if (opc === 14) {
      setPicadinho(picadinho + sinal * 100);
      setBatataDoce(batataDoce + sinal * 120);
      setCouve(couve + sinal * 80);
    }
    if (opc === 15) {
      setFrango(frango + sinal * 120);
      setLegumes(legumes + sinal * 180);
    }
  }

  let nOpcoes = [];
  for (let i = 1; i <= 15; i++) {
    nOpcoes.push(i);
  }

  return (
    <main className={styles.main}>
      <article>
        <h1>COMBOS</h1>
        <ul>
          <li>
            <h2>
              <span>{lowct}</span>LOW CARB
            </h2>
            <div>
              <button onClick={() => lowCarb('menos')}>-</button>
              <button onClick={() => lowCarb('mais')}>+</button>
            </div>
          </li>
          <li>
            <h2><span>{vegct}</span>VEGETARIANO</h2>
            <div>
              <button onClick={() => vegetariano('menos')}>-</button>
              <button onClick={() => vegetariano('mais')}>+</button>
            </div>
          </li>
          <li>
            <h2><span>{fitct}</span>FITNESS</h2>
            <div>
              <button onClick={() => fitness('menos')}>-</button>
              <button onClick={() => fitness('mais')}>+</button>
            </div>
          </li>
          <li>
            <h2><span>{tradct}</span>TRADICIONAL</h2>
            <div>
              <button onClick={() => tradicional('menos')}>-</button>
              <button onClick={() => tradicional('mais')}>+</button>
            </div>
          </li>
        </ul>
      </article>

      <article>
        <h1>UNIDADES</h1>
        <ul>
          {nOpcoes.map((opc) => (
            <li key={opc}>
              <h2><span>{quantidades[opc] || 0}</span>Opção {opc}</h2>
              <div>
                <button onClick={() => unidades(opc, 'menos')}>-</button>
                <button onClick={() => unidades(opc, 'mais')}>+</button>
              </div>
            </li>
          ))}
        </ul>
      </article>

      <article>
        <ul className={styles.lista}>
          <li>Frango: {frango}g</li>
          <li>Carne Moída: {moida}g</li>
          <li>Picadinho de carne: {picadinho}g</li>
          <li>Grão de bico: {bico}g</li>
          <li>Proteina de soja com legumes: {proteinaSoja}g</li>
          <li>Lentilha: {lentilha}g</li>
          <li>Feijão: {feijao}g</li>
          <li>Arroz integral: {arrozIntegral}g</li>
          <li>Arroz branco: {arrozBranco}g</li>
          <li>Arroz primavera: {arrozPrimavera}g</li>
          <li>Massa integral: {massaIntegral}g</li>
          <li>Batata doce: {batataDoce}g</li>
          <li>Batata: {batata}g</li>
          <li>Batata sauté: {batataSaute}g</li>
          <li>Moranga: {moranga}g</li>
          <li>Abobrinha: {abobrinha}g</li>
          <li>Couve: {couve}g</li>
          <li>Brócolis: {brocolis}g</li>
          <li>Legumes: {legumes}g</li>
          <li>Cenoura: {cenoura}g</li>
          <li>Panqueca de carne: {panquecaCarne}g</li>
          <li>Escondidinho de batata(carne): {escondidinhoCarne}g</li>
        </ul>
      </article>
    </main>
  );
};

export default App;
