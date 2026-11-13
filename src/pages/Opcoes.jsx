import React, { useState } from 'react';
import './Opcoes.css';

export function Opcoes({ irParaTela }) {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState('estudio');
  const [imagemAtiva, setImagemAtiva] = useState(0);

  const fotos = [
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500",
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500"
  ];

  const opcoes = [
    {
      id: 'estudio',
      titulo: 'Maquiagem no estúdio',
      subtitulo: 'Centro de Massapê',
      preco: 'R$ 90'
    },
    {
      id: 'domicilio',
      titulo: 'Maquiagem em domicílio',
      subtitulo: 'Deslocamento de até 5 km incluso',
      preco: 'R$ 115'
    },
    {
      id: 'penteado',
      titulo: 'Maquiagem + penteado',
      subtitulo: 'Pacote completo para eventos',
      preco: 'R$ 165'
    }
  ];

  return (
    <div className="opcoes-container">
     
      <header className="navbar-opcoes">
        <div className="logo-box" onClick={() => irParaTela && irParaTela('inicio')}>
          <div className="logo-badge-opcoes">B</div>
          <div className="logo-texto-opcoes">
            <h1>Beleza agora</h1>
            <span className="logo-subtexto-opcoes">AGENDE SUA BELEZA, DO SEU JEITO</span>
          </div>
        </div>

        <nav className="nav-links-opcoes">
          <button onClick={() => irParaTela && irParaTela('inicio')} className="nav-item">
            Início
          </button>
          <button onClick={() => irParaTela && irParaTela('explorar')} className="nav-item ativo">
            Explorar
          </button>
          <button className="nav-item">Favoritos</button>
          <button className="nav-item">Mensagens</button>
        </nav>

        <div className="local-usuario-badge">
          📍 Massapê, CE
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
            alt="Usuário"
            className="avatar-usuario"
          />
        </div>
      </header>

     
      <main className="conteudo-opcoes">
        
        <div className="coluna-galeria">
          <div className="foto-principal-wrapper">
            <img src={fotos[imagemAtiva]} alt="Serviço de maquiagem" />
            <button className="btn-favoritar">♡</button>
          </div>

          <div className="miniaturas-grid">
            {fotos.map((foto, idx) => (
              <div
                key={idx}
                className={`miniatura-item ${imagemAtiva === idx ? 'ativa' : ''}`}
                onClick={() => setImagemAtiva(idx)}
              >
                <img src={foto} alt={`Miniatura ${idx + 1}`} />
              </div>
            ))}
          </div>

       
          <div 
            className="card-profissional-resumo"
            onClick={() => irParaTela && irParaTela('perfil')}
          >
            <div className="prof-info-esquerda">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=200"
                alt="Marina Lima"
                className="foto-prof-pequena"
              />
              <div>
                <h4 className="prof-nome">
                  Marina Lima <span className="icone-verificado">✓</span>
                </h4>
                <p className="prof-subtitulo">Maquiadora · responde em até 20 min</p>
              </div>
            </div>

            <div className="prof-avaliacao">
              ⭐ <strong>4,9</strong> <small>(127 avaliações)</small>
            </div>
          </div>
        </div>

        {/* COLUNA DIREITA: OPÇÕES E AGENDAMENTO */}
        <div className="card-detalhes-servico">
          <div className="tags-topo">
            <span className="badge-tag rosa">Beleza</span>
            <span className="badge-tag dourado">Mais contratado</span>
          </div>

          <h2 className="titulo-servico">Maquiagem social completa</h2>

          <div className="meta-info-servico">
            <span className="meta-item"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke=" #B28A42" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock-3 preview-icon"><circle cx="12" cy="12" r="10"/><path d="M12 6v6h4"/></svg> 1h30 de duração</span>
            <span className="meta-item"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke=" #B28A42" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin preview-icon"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg> Estúdio ou domicílio</span>
          </div>

          <div className="descricao-servico-box">
            <h4>Sobre o serviço</h4>
            <p>
              Preparação de pele, maquiagem personalizada para o evento, cílios e finalização. Produtos
              profissionais e orientação para retoques.
            </p>
          </div>

          <div className="secao-escolha-opcao">
            <h4>Escolha uma opção</h4>
            <div className="lista-opcoes">
              {opcoes.map((op) => {
                const isSelected = opcaoSelecionada === op.id;
                return (
                  <div
                    key={op.id}
                    className={`opcao-card ${isSelected ? 'selecionada' : ''}`}
                    onClick={() => setOpcaoSelecionada(op.id)}
                  >
                    <div className="opcao-esquerda">
                      <div className="radio-custom">
                        {isSelected && <div className="radio-ponto" />}
                      </div>
                      <div className="opcao-textos">
                        <strong>{op.titulo}</strong>
                        <small>{op.subtitulo}</small>
                      </div>
                    </div>
                    <span className="opcao-preco">{op.preco}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="garantias-lista">
            <span className="garantia-item"><span className="icone-check">✓</span> Cílios inclusos</span>
            <span className="garantia-item"><span className="icone-check">✓</span> Produtos profissionais</span>
            <span className="garantia-item"><span className="icone-check">✓</span> Higiene garantida</span>
          </div>

          <div className="rodape-agendamento">
            <div className="preco-box">
              <small>a partir de</small>
              <strong>R$ 90</strong>
            </div>

            <button className="btn-escolher-data">
               Escolher data e horário
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Opcoes;