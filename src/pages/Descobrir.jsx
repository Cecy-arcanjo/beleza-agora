import React from 'react';
import '../App.css';
import './Descobrir.css';

export function Descobrir() {
  return (
    <div className="container-geral">
      
      {/* LADO ESQUERDO: Imagem e Barra de Pesquisa */}
      <div className="painel-esquerdo">
        <div className="cartao-busca">
          <label className="rotulo-busca">O que você procura?</label>
          <div className="caixa-input">
            <span className="icone">🔍</span>
            <input type="text" value="Bolo para aniversário" readOnly />
            <span className="atalho">⌘ K</span>
          </div>
          <div className="sugestoes">
            <span>Sugestões:</span>
            <button>costureira</button>
            <button>manicure</button>
            <button>fotografia</button>
          </div>
        </div>
      </div>
        
      {/* LADO DIREITO: Informações e Categorias */}
      <div className="painel-direito">
        
        {/* Cabeçalho */}
        <header className="cabeleira-topo">
          <div className="logo-bloco">
            <div className="circulo-b">B</div>
            <div>
              <h1>Beleza agora</h1>
              <span>AGENDE SUA BELEZA, DO SEU JEITO</span>
            </div>
          </div>
          <button className="btn-pular">PULAR</button>
        </header>

        {/* Texto Principal */}
        <main className="conteudo-principal">
          <span className="subtitulo-destaque">CONHEÇA O QUE HÁ POR PERTO</span>
          <h2>Descubra talentos locais que fazem a diferença.</h2>
          <p>Pesquise por serviço, compare perfis verificados e encontre a profissional certa em poucos minutos.</p>

          {/* Cards de Categorias */}
          <div className="grid-categorias">
            <div className="card-categoria">
              <span className="emoji-caixa bg-rosa">✂️</span>
              <div>
                <h3>Beleza</h3>
                <p>42 profissionais</p>
              </div>
              <span className="seta">›</span>
            </div>

            <div className="card-categoria">
              <span className="emoji-caixa bg-laranja">🎂</span>
              <div>
                <h3>Confeitaria</h3>
                <p>28 profissionais</p>
              </div>
              <span className="seta">›</span>
            </div>
          </div>
        </main>

        {/* Rodapé (Paginação e Botão Avançar) */}
        <footer className="rodape-painel">
          <div className="pontinhos">
            <span className="ponto ativo"></span>
            <span className="ponto"></span>
          </div>
          <button className="btn-continuar">Continuar ›</button>
        </footer>

      </div>
    </div>
  );
}