import React, { useState } from 'react';
import './Explorar.css';

export function Explorar({ irParaTela }) {
  const [busca, setBusca] = useState('');

  return (
    <div className="container-explorar">
    
      <header className="cabecalho-topo">
        <div className="logotipo-marca">
          <div className="icone-logo">B</div>
          <div className="texto-logo">
            <span className="titulo-marca">Beleza agora</span>
            <span className="slogan-marca">AGENDE SUA BELEZA, DO SEU JEITO</span>
          </div>
        </div>

        <nav className="menu-navegacao">
          <a
            href="#inicio"
            className="item-nav"
            onClick={(e) => { e.preventDefault(); irParaTela && irParaTela('inicio'); }}
          >
            Início
          </a>
          <a href="#explorar" className="item-nav ativo">
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
            <span className="icone">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon-svg"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            Massapê, CE
          </span>
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
            alt="Usuário"
            className="foto-perfil"
          />
        </div>
      </header>

    
      <main className="pagina-principal">
        <section className="cabecalho-explorar">
          <div className="textos-intro">
            <span className="subtitulo-secao">TUDO QUE MASSAPÊ SABE FAZER</span>
            <h1>Explore por categoria</h1>
            <p>Encontre serviços feitos com cuidado, perto de você.</p>
          </div>

          <div className="caixa-busca">
            <span className="icone-busca"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B83B67" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search preview-icon"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg></span>
            <input
              type="text"
              placeholder="Buscar uma categoria ou serviço"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
            <span className="atalho-teclado">⌘ K</span>
          </div>
        </section>

       
        <section
          className="banner-destaque"
          onClick={() => irParaTela && irParaTela('beleza')}
          style={{ cursor: 'pointer' }}
        >
          <div className="conteudo-destaque">
            <span className="badge-semana">Mais procurada nesta semana</span>
            <h2>Beleza para celebrar você</h2>
            <p>Maquiagem, cabelos, unhas e cuidados por profissionais queridas da cidade.</p>
          </div>
          <div className="imagem-destaque-container">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800"
              alt="Profissionais de beleza"
            />
          </div>
        </section>

        <section className="secao-grid-categorias">
          <div className="cabecalho-grid">
            <span className="subtitulo-secao">8 CAMINHOS PARA DESCOBRIR</span>
            <h2>Escolha o que você precisa</h2>
          </div>

          <div className="grid-categorias-explorar">
            <article
              className="card-categoria-exp ativa"
              onClick={() => irParaTela && irParaTela('beleza')}
              style={{ cursor: 'pointer' }}
            >
              <div className="icone-box"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B83B67" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkle preview-icon"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/></svg></div>
              <div className="info-cat">
                <h3>Beleza</h3>
                <p>42 profissionais</p>
              </div>
              <span className="seta">›</span>
            </article>

            <article className="card-categoria-exp">
              <div className="icone-box"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B83B67" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scissors preview-icon"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/></svg></div>
              <div className="info-cat">
                <h3>Costura</h3>
                <p>31 profissionais</p>
              </div>
              <span className="seta">›</span>
            </article>

            <article className="card-categoria-exp">
              <div className="icone-box"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B83B67" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cake-slice preview-icon"><path d="M16 13H3"/><path d="M16 17H3"/><path d="m7.2 7.9-3.388 2.5A2 2 0 0 0 3 12.01V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8.654c0-2-2.44-6.026-6.44-8.026a1 1 0 0 0-1.082.057L10.4 5.6"/><circle cx="9" cy="7" r="2"/></svg></div>
              <div className="info-cat">
                <h3>Confeitaria</h3>
                <p>28 profissionais</p>
              </div>
              <span className="seta">›</span>
            </article>

            <article className="card-categoria-exp">
              <div className="icone-box"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B83B67" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-camera preview-icon"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/><circle cx="12" cy="13" r="3"/></svg></div>
              <div className="info-cat">
                <h3>Fotografia</h3>
                <p>19 profissionais</p>
              </div>
              <span className="seta">›</span>
            </article>

            <article className="card-categoria-exp">
              <div className="icone-box"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B83B67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-palette preview-icon"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/></svg></div>
              <div className="info-cat">
                <h3>Artesanato</h3>
                <p>36 profissionais</p>
              </div>
              <span className="seta">›</span>
            </article>

            <article className="card-categoria-exp">
              <div className="icone-box"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B83B67" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-pulse preview-icon"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg></div>
              <div className="info-cat">
                <h3>Bem-estar</h3>
                <p>24 profissionais</p>
              </div>
              <span className="seta">›</span>
            </article>

            <article className="card-categoria-exp">
              <div className="icone-box"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B83B67" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open preview-icon"><path d="M12 5v16"/><path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"/></svg></div>
              <div className="info-cat">
                <h3>Aulas</h3>
                <p>17 profissionais</p>
              </div>
              <span className="seta">›</span>
            </article>

            <article className="card-categoria-exp">
              <div className="icone-box"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B83B67" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house preview-icon"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></div>
              <div className="info-cat">
                <h3>Serviços para casa</h3>
                <p>23 profissionais</p>
              </div>
              <span className="seta">›</span>
            </article>
          </div>
        </section>

        <footer className="banner-rodape-depoimento">
          <p className="frase-aspas">“Organizado, confiável e feito para nossa cidade”</p>
          <span className="nota-rodape">4,9 de média · mais de 860 contratações locais</span>
        </footer>
      </main>
    </div>
  );
}

export default Explorar;