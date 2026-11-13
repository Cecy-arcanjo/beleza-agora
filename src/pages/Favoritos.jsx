import React, { useState } from 'react';
import './Favoritos.css';


const ASSETS_FOTOS = {
  
  usuarioHeader: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100',

  
  colecaoCasamento: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600',
  colecaoCasa: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600',
  colecaoPresentes: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600',

 
  profMarina: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600',
  profRita: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=600',
  profJessica: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
  profAna: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=600',
};

export function Favoritos({ irParaTela }) {
  const [filtroAtivo, setFiltroAtivo] = useState('Todas');

  const colecoes = [
    { id: 1, titulo: 'Meu casamento', qtd: '8 profissionais', tag: 'Planejando', imagem: ASSETS_FOTOS.colecaoCasamento },
    { id: 2, titulo: 'Casa em ordem', qtd: '5 profissionais', tag: 'Coleção', imagem: ASSETS_FOTOS.colecaoCasa },
    { id: 3, titulo: 'Presentes afetivos', qtd: '12 profissionais', tag: 'Coleção', imagem: ASSETS_FOTOS.colecaoPresentes },
  ];

  const profissionaisFavoritas = [
    {
      id: 'marina',
      nome: 'Marina Lima',
      categoria: 'Maquiagem e penteado · 1,2 km',
      nota: '4,9',
      status: 'verificada',
      preco: 'a partir de R$ 70',
      imagem: ASSETS_FOTOS.profMarina,
    },
    {
      id: 'rita',
      nome: 'Rita Gomes',
      categoria: 'Costura sob medida · 1,2 km',
      nota: '4,9',
      status: 'verificada',
      preco: 'a partir de R$ 55',
      imagem: ASSETS_FOTOS.profRita,
    },
    {
      id: 'jessica',
      nome: 'Jéssica Moura',
      categoria: 'Fotografia de família · 1,2 km',
      nota: '4,9',
      status: 'verificada',
      preco: 'a partir de R$ 180',
      imagem: ASSETS_FOTOS.profJessica,
    },
    {
      id: 'ana',
      nome: 'Ana Cláudia',
      categoria: 'Confeitaria afetiva · 1,2 km',
      nota: '4,9',
      status: 'verificada',
      preco: 'a partir de R$ 95',
      imagem: ASSETS_FOTOS.profAna,
    },
  ];

  return (
    <div className="fav-container">
      {/* HEADER / NAVBAR */}
      <header className="fav-navbar">
        <div className="fav-logo-box" onClick={() => irParaTela && irParaTela('inicio')}>
          <div className="fav-logo-badge">B</div>
          <div className="fav-logo-texto">
            <h1>Beleza agora</h1>
            <span className="fav-logo-sub">AGENDE SUA BELEZA, DO SEU JEITO</span>
          </div>
        </div>

        <nav className="fav-nav-links">
          <button onClick={() => irParaTela && irParaTela('inicio')} className="fav-nav-item">Início</button>
          <button onClick={() => irParaTela && irParaTela('explorar')} className="fav-nav-item">Explorar</button>
          <button className="fav-nav-item ativo">Favoritos</button>
          <button onClick={() => irParaTela && irParaTela('mensagem')} className="fav-nav-item">Mensagens</button>
        </nav>

        <div className="fav-user-badge">
          <span>📍 Massapê, CE</span>
          <img
            src={ASSETS_FOTOS.usuarioHeader}
            alt="Usuário"
          />
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="fav-main">
        
        {/* CABEÇALHO DA SEÇÃO DE COLEÇÕES */}
        <div className="fav-section-header">
          <div>
            <span className="fav-tag-top">SUA CURADORIA LOCAL</span>
            <h2>Favoritos e coleções</h2>
            <p>Guarde talentos e ideias para contratar quando precisar.</p>
          </div>
          <button className="fav-btn-criar">
            <span>+</span> Criar coleção
          </button>
        </div>

        {/* CARDS DE COLEÇÕES */}
        <div className="fav-colecoes-grid">
          {colecoes.map((col) => (
            <div key={col.id} className="fav-colecao-card">
              <img src={col.imagem} alt={col.titulo} />
              <div className="fav-colecao-overlay">
                <span className="fav-badge-tag">{col.tag}</span>
                <div className="fav-colecao-info">
                  <h3>{col.titulo}</h3>
                  <small>{col.qtd}</small>
                </div>
              </div>
            </div>
          ))}

          {/* CARD DE ADICIONAR NOVA COLEÇÃO */}
          <button className="fav-card-nova-colecao">
            <span className="fav-plus-icon">+</span>
            <span>Nova coleção</span>
          </button>
        </div>

        {/* SEÇÃO PROFISSIONAIS FAVORITAS */}
        <div className="fav-profissionais-section">
          <div className="fav-prof-header">
            <div>
              <span className="fav-tag-top">4 PERFIS SALVOS</span>
              <h3>Profissionais favoritas</h3>
            </div>
            
            {/* FILTROS */}
            <div className="fav-filtros">
              {['Todas', 'Beleza', 'Confeitaria', 'Costura', 'Fotografia'].map((filtro) => (
                <button
                  key={filtro}
                  className={`fav-filtro-btn ${filtroAtivo === filtro ? 'ativo' : ''}`}
                  onClick={() => setFiltroAtivo(filtro)}
                >
                  {filtro}
                </button>
              ))}
            </div>
          </div>

          {/* GRID DE CARDS DAS PROFISSIONAIS */}
          <div className="fav-cards-grid">
            {profissionaisFavoritas.map((prof) => (
              <div 
                key={prof.id} 
                className="fav-card-item"
                onClick={() => prof.id === 'marina' && irParaTela && irParaTela('perfil')}
              >
                <div className="fav-card-img-box">
                  <img src={prof.imagem} alt={prof.nome} />
                  <button className="fav-heart-btn" onClick={(e) => e.stopPropagation()}>
                    ♥
                  </button>
                </div>

                <div className="fav-card-details">
                  <h4>{prof.nome}</h4>
                  <p className="fav-card-cat">{prof.categoria}</p>
                  
                  <div className="fav-card-meta">
                    <div className="fav-rating">
                      <span className="fav-star">★</span>
                      <strong>{prof.nota}</strong>
                      <span className="fav-verificada">({prof.status})</span>
                    </div>
                    <span className="fav-preco">{prof.preco}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BANNER INFERIOR DE SUGESTÕES */}
        <div className="fav-banner-sugestoes">
          <div className="fav-sugestao-texto">
            <span>✨</span>
            <p>Com base nos seus favoritos, separamos novos talentos para você conhecer.</p>
          </div>
          <button className="fav-btn-sugestoes" onClick={() => irParaTela && irParaTela('explorar')}>
            Ver sugestões →
          </button>
        </div>

      </main>
    </div>
  );
}

export default Favoritos;