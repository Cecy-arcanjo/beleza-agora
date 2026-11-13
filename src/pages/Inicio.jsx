import React, { useState } from 'react';
import './Inicio.css';

export function Inicio({ irParaTela }) {
  const [busca, setBusca] = useState('');

  return (
    <div className="container-inicio">

      {/* 1. Header / Navbar */}
      <header className="cabecalho-topo">
        <div className="logotipo-marca">
          <div className="icone-logo">B</div>
          <div className="texto-logo">
            <span className="titulo-marca">Beleza agora</span>
            <span className="slogan-marca">AGENDE SUA BELEZA, DO SEU JEITO</span>
          </div>
        </div>

        <nav className="menu-navegacao">
          <a href="#inicio" className="item-nav ativo">Início</a>
          <a 
            href="#explorar" 
            className="item-nav" 
            onClick={(e) => { e.preventDefault(); irParaTela && irParaTela('explorar'); }}
          >
            Explorar
          </a>
          <a 
            href="#favoritos" 
            className="item-nav" 
            onClick={(e) => { e.preventDefault(); irParaTela && irParaTela('favoritos'); }}
          >
            Favoritos
          </a>
          <a 
            href="#mensagem" 
            className="item-nav" 
            onClick={(e) => { e.preventDefault(); irParaTela && irParaTela('mensagem'); }}
          >
            Mensagens
          </a>
        </nav>

        <div className="perfil-topo">
          <span className="localizacao">
            <span className="icone">📍</span> Massapê, CE
          </span>
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
            alt="Usuário"
            className="foto-perfil"
          />
        </div>
      </header>

      {/* 2. Área Conteúdo Principal */}
      <main className="pagina-principal">
        {/* Banner Hero */}
        <section className="banner-hero">
          <div className="conteudo-hero">
            <span className="saudacao">OLÁ, CAROLINA 👋</span>
            <h1>Qual talento local pode ajudar você hoje?</h1>

            <div className="caixa-busca">
              <span className="icone-busca"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B83B67" strokewidth="0.5" strokelinecap="round" strokeLineJoin="round" className="lucide lucide-search preview-icon"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg></span>
              <input
                type="text"
                placeholder="O que você precisa hoje?"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
              <span className="atalho-teclado">⌘ K</span>
            </div>
          </div>

          <aside className="card-estatisticas">
            <div className="tags-selo">
              <span>✓ Perfis verificados</span>
              <span>✓ Contratação segura</span>
              <span>✓ Talento local</span>
            </div>
            <div className="numeros-estatisticas">
              <div>
                <strong>180+</strong>
                <p>profissionais</p>
              </div>
              <div>
                <strong>4.9</strong>
                <p>nota média</p>
              </div>
              <span className="badge-cidade">Feito em Massapê</span>
            </div>
          </aside>
        </section>

        {/* 3. Seção Categorias */}
        <section className="secao-categorias">
          <div className="cabecalho-secao">
            <div>
              <span className="subtitulo-secao">EXPLORE</span>
              <h2>Categorias para cada momento</h2>
            </div>
            <a 
              href="#todas" 
              className="link-ver-mais" 
              onClick={(e) => { e.preventDefault(); irParaTela && irParaTela('explorar'); }}
            >
              Ver todas →
            </a>
          </div>

          <div className="grid-categorias">
            <article 
              className="card-categoria" 
              onClick={() => irParaTela && irParaTela('beleza')}
            >
              <div className="icone-categoria">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B83B67" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkle preview-icon"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/></svg>
              </div>
              <div>
                <h3>Beleza</h3>
                <p>42 perfis</p>
              </div>
              <span className="seta">›</span>
            </article>

            <article className="card-categoria">
              <div className="icone-categoria">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B83B67" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scissors preview-icon"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/></svg>
              </div>
              <div>
                <h3>Costura</h3>
                <p>31 perfis</p>
              </div>
              <span className="seta">›</span>
            </article>

            <article className="card-categoria">
              <div className="icone-categoria">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B83B67" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cake-slice preview-icon"><path d="M16 13H3"/><path d="M16 17H3"/><path d="m7.2 7.9-3.388 2.5A2 2 0 0 0 3 12.01V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8.654c0-2-2.44-6.026-6.44-8.026a1 1 0 0 0-1.082.057L10.4 5.6"/><circle cx="9" cy="7" r="2"/></svg>
              </div>
              <div>
                <h3>Confeitaria</h3>
                <p>28 perfis</p>
              </div>
              <span className="seta">›</span>
            </article>

            <article className="card-categoria">
              <div className="icone-categoria"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B83B67" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-camera preview-icon"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/><circle cx="12" cy="13" r="3"/></svg>
              </div>
              <div>
                <h3>Fotografia</h3>
                <p>19 perfis</p>
              </div>
              <span className="seta">›</span>
            </article>

            <article className="card-categoria">
              <div className="icone-categoria">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B83B67" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house preview-icon"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
              </div>
              <div>
                <h3>Para casa</h3>
                <p>23 perfis</p>
              </div>
              <span className="seta">›</span>
            </article>
          </div>
        </section>

        {/* 4. Seção Profissionais Recomendadas */}
        <section className="secao-profissionais">
          <div className="cabecalho-secao">
            <div>
              <span className="subtitulo-secao">BEM AVALIADAS</span>
              <h2>Profissionais recomendadas</h2>
            </div>
            <a 
              href="#ver-mais" 
              className="link-ver-mais" 
              onClick={(e) => { e.preventDefault(); irParaTela && irParaTela('explorar'); }}
            >
              Ver mais →
            </a>
          </div>

          <div className="grid-profissionais">
            <article 
              className="card-profissional" 
              onClick={() => irParaTela && irParaTela('perfil')}
            >
              <div className="imagem-box">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500" alt="Marina Lima" />
                <span className="selo-verificado">🛡️</span>
              </div>
              <h3>Marina Lima</h3>
              <p className="especialidade">Maquiagem e penteado · 1,2 km</p>
              <div className="avaliacao">⭐ <strong>4,9</strong> <span className="texto-verificada">(verificada)</span></div>
              <p className="preco">a partir de <strong>R$ 45</strong></p>
            </article>

            <article className="card-profissional">
              <div className="imagem-box">
                <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500" alt="Ana Cláudia" />
                <span className="selo-verificado">🛡️</span>
              </div>
              <h3>Ana Cláudia</h3>
              <p className="especialidade">Confeitaria afetiva · 1,2 km</p>
              <div className="avaliacao">⭐ <strong>4,9</strong> <span className="texto-verificada">(verificada)</span></div>
              <p className="preco">a partir de <strong>R$ 45</strong></p>
            </article>

            <article className="card-profissional">
              <div className="imagem-box">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500" alt="Jéssica Moura" />
                <span className="selo-verificado">🛡️</span>
              </div>
              <h3>Jéssica Moura</h3>
              <p className="especialidade">Fotografia de família · 1,2 km</p>
              <div className="avaliacao">⭐ <strong>4,9</strong> <span className="texto-verificada">(verificada)</span></div>
              <p className="preco">a partir de <strong>R$ 45</strong></p>
            </article>

            <article className="card-profissional">
              <div className="imagem-box">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500" alt="Rita Gomes" />
                <span className="selo-verificado">🛡️</span>
              </div>
              <h3>Rita Gomes</h3>
              <p className="especialidade">Costura sob medida · 1,2 km</p>
              <div className="avaliacao">⭐ <strong>4,9</strong> <span className="texto-verificada">(verificada)</span></div>
              <p className="preco">a partir de <strong>R$ 45</strong></p>
            </article>
          </div>
        </section>

      </main>
    </div>
  );
}

export default Inicio;