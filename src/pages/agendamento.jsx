import React, { useState } from 'react';
import './Agendamento.css';

export function Agendamento({ irParaTela }) {
  const [dataSelecionada, setDataSelecionada] = useState(14);
  const [horarioSelecionado, setHorarioSelecionado] = useState('14:00');

  const diasDoMes = [
    { dia: 28, outroMes: true }, { dia: 29, outroMes: true }, { dia: 30, outroMes: true },
    { dia: 1 }, { dia: 2 }, { dia: 3 }, { dia: 4 },
    { dia: 5 }, { dia: 6 }, { dia: 7 }, { dia: 8 }, { dia: 9 }, { dia: 10 }, { dia: 11 },
    { dia: 12 }, { dia: 13 }, { dia: 14, selecionado: true }, { dia: 15 }, { dia: 16 }, { dia: 17 }, { dia: 18 },
    { dia: 19 }, { dia: 20 }, { dia: 21 }, { dia: 22 }, { dia: 23 }, { dia: 24 }, { dia: 25 },
    { dia: 26 }, { dia: 27 }, { dia: 28 }, { dia: 29 }, { dia: 30 }, { dia: 31 }, { dia: 1, outroMes: true }
  ];

  const horariosManha = ['08:00', '09:00', '10:30'];
  const horariosTarde = ['13:30', '14:00', '15:30', '17:00'];
  const horariosNoite = ['18:30', '19:30'];

  return (
    <div className="container-agendamento-pagina">
     
      <header className="cabecalho-topo">
        <div className="logotipo-marca">
          <div className="icone-logo">B</div>
          <div className="texto-logo">
            <span className="titulo-marca">Beleza agora</span>
            <span className="slogan-marca">AGENDE SUA BELEZA, DO SEU JEITO</span>
          </div>
        </div>

        <nav className="menu-navegacao">
          <a href="#inicio" className="item-nav" onClick={(e) => { e.preventDefault(); irParaTela && irParaTela('inicio'); }}>Início</a>
          <a href="#explorar" className="item-nav ativo" onClick={(e) => { e.preventDefault(); irParaTela && irParaTela('explorar'); }}>Explorar</a>
          <a href="#favoritos" className="item-nav">Favoritos</a>
          <a href="#mensagens" className="item-nav">Mensagens</a>
        </nav>

        <div className="perfil-topo">
          <span className="localizacao">📍 Massapê, CE</span>
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
            alt="Usuário"
            className="foto-perfil"
          />
        </div>
      </header>

    
      <main className="conteudo-principal-agendamento">
        <div className="titulo-secao-agendamento">
          <h1>Quando você prefere?</h1>
          <p>Escolha uma data disponível e o melhor horário para você.</p>
        </div>

        <div className="grid-painel-agendamento">
          
        
          <div className="card-calendario">
            <div className="topo-mes">
              <button className="btn-seta-mes">〈</button>
              <h2>Outubro de 2026</h2>
              <button className="btn-seta-mes">〉</button>
            </div>

            <div className="dias-da-semana">
              <span>DOM</span><span>SEG</span><span>TER</span><span>QUA</span><span>QUI</span><span>SEX</span><span>SÁB</span>
            </div>

            <div className="grade-dias">
              {diasDoMes.map((item, index) => (
                <button
                  key={index}
                  className={`dia-celula ${item.outroMes ? 'outro-mes' : ''} ${item.dia === dataSelecionada ? 'selecionado' : ''}`}
                  onClick={() => !item.outroMes && setDataSelecionada(item.dia)}
                >
                  {item.dia}
                </button>
              ))}
            </div>

            <div className="legenda-calendario">
              <span className="bolinha disponivel"></span> Disponível
              <span className="bolinha selecionado-legenda"></span> Selecionado
            </div>
          </div>

         
          <div className="card-horarios">
            <div className="cabecalho-horarios-dia">
              <h3>Quarta-feira, 14 de outubro</h3>
              <span className="badge-livres">6 horários livres</span>
            </div>
            <p className="sub-atendimento">Marina atende no estúdio neste dia</p>

            <div className="bloco-periodo">
              <span className="periodo-titulo">Manhã</span>
              <div className="grade-horarios">
                {horariosManha.map((hora) => (
                  <button 
                    key={hora} 
                    className={`btn-horario ${horarioSelecionado === hora ? 'ativo' : ''}`}
                    onClick={() => setHorarioSelecionado(hora)}
                  >
                    {hora}
                  </button>
                ))}
              </div>
            </div>

            <div className="bloco-periodo">
              <span className="periodo-titulo">Tarde</span>
              <div className="grade-horarios">
                {horariosTarde.map((hora) => (
                  <button 
                    key={hora} 
                    className={`btn-horario ${horarioSelecionado === hora ? 'ativo' : ''}`}
                    onClick={() => setHorarioSelecionado(hora)}
                  >
                    {hora}
                  </button>
                ))}
              </div>
            </div>

            <div className="bloco-periodo">
              <span className="periodo-titulo">Noite</span>
              <div className="grade-horarios">
                {horariosNoite.map((hora) => (
                  <button 
                    key={hora} 
                    className={`btn-horario ${horarioSelecionado === hora ? 'ativo' : ''}`}
                    onClick={() => setHorarioSelecionado(hora)}
                  >
                    {hora}
                  </button>
                ))}
              </div>
            </div>

            <div className="aviso-reserva">
              <span>O horário fica reservado por 10 minutos enquanto você confirma.</span>
            </div>
          </div>

          {/* RESUMO DO AGENDAMENTO (CARD LATERAL) */}
          <div className="card-resumo-lateral">
            <span className="sub-resumo">SEU AGENDAMENTO</span>
            <h2>Maquiagem social completa</h2>
            <p className="com-profissional">com Marina Lima</p>
            
            <div className="detalhes-data-hora">
              <strong>14 out · {horarioSelecionado}</strong>
              <span>1h30 · no estúdio</span>
            </div>

            <div className="rodape-resumo">
              <span className="preco-final">R$ 90</span>
              <button className="btn-continuar">➔ Continuar</button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default Agendamento;