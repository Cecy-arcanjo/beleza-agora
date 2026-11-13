import React, { useState } from 'react';
import './Beleza.css'; // <-- Importa o CSS tradicional aqui!

export function Beleza({ irParaTela }) {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Maquiagem');

  const categorias = [
    { id: 'Maquiagem', nome: 'Maquiagem', qtd: '18 profissionais'
      , icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B83B67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brush preview-icon"><path d="m11 10 3 3"/><path d="M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z"/><path d="M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031"/></svg> },
   
    { id: 'Cabelos', nome: 'Cabelos', qtd: '16 profissionais',
       icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B83B67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scissors preview-icon"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/></svg> },
    
       { id: 'Unhas', nome: 'Unhas', qtd: '14 profissionais', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke=" #B83B67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand preview-icon"><path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"/><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg> },
    
    { id: 'Sobrancelhas', nome: 'Sobrancelhas', qtd: '11 profissionais', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke=" #B83B67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye preview-icon"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg> },
   
    { id: 'Estetica', nome: 'Estética', qtd: '9 profissionais', icon:<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke=" #B83B67" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flower-2 preview-icon"><path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"/><circle cx="12" cy="8" r="2"/><path d="M12 10v12"/><path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"/><path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"/></svg>  },
  ];

  const destaques = [
    {
      id: 'marina',
      nome: 'Marina Lima',
      categoria: 'Maquiagem social',
      distancia: '1,2 km',
      nota: '4,9',
      status: 'verificada',
      preco: 'a partir de R$ 70', 
      imagem: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 'luana',
      nome: 'Luana Melo',
      categoria: 'Cabelos e hidratação',
      distancia: '1,2 km',
      nota: '4,9',
      status: 'verificada',
      preco: 'a partir de R$ 45',
      imagem: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 'dani',
      nome: 'Dani Araújo',
      categoria: 'Unhas e nail art',
      distancia: '1,2 km',
      nota: '4,9',
      status: 'verificada',
      preco: 'a partir de R$ 35',
      imagem: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=600',
    },
  ];

  return (
    <div className="beleza-container">
      
      <header className="navbar">
        <div className="logo-container" onClick={() => irParaTela && irParaTela('inicio')}>
          <div className="logo-badge">B</div>
          <div className="logo-text">
            <h1>Beleza agora</h1>
            <span className="logo-subtext">AGENDE SUA BELEZA, DO SEU JEITO</span>
          </div>
        </div>

        <nav className="nav-links">
          <button onClick={() => irParaTela && irParaTela('inicio')} className="nav-link">
            Início
          </button>
          <button onClick={() => irParaTela && irParaTela('explorar')} className="nav-link active">
            Explorar
          </button>
          <button className="nav-link">Favoritos</button>
          <button className="nav-link">Mensagens</button>
        </nav>

        <div className="user-location-badge">
          📍 Massapê, CE
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
            alt="Usuário"
            className="user-avatar"
          />
        </div>
      </header>

  
      <main className="main-content">
      
        <div className="breadcrumb">
          <span className="breadcrumb-link" onClick={() => irParaTela && irParaTela('explorar')}>
            Explorar
          </span>
          <span>/</span>
          <span className="breadcrumb-active">Beleza</span>
        </div>

        
        <div className="banner-container">
          <div className="banner-text-content">
            <span className="banner-tag"><a className='icon-banner'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkle preview-icon"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/></svg></a> BELEZA E AUTOCUIDADO</span>
            <h2 className="banner-title">Seu momento, do seu jeito.</h2>
            <p className="banner-description">
              Conheça profissionais que unem técnica, escuta e carinho para realçar o que você tem de melhor.
            </p>

            <div className="banner-buttons">
              <button className="btn-banner">Ver todas as profissionais</button>
              <span className="badge-verificados">42 perfis verificados</span>
            </div>
          </div>

     
          <div className="banner-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800"
              alt="Profissional"
            />
          </div>
        </div>

        <section>
          <span className="section-title-tag">ENCONTRE SEU CUIDADO</span>
          <h3 className="section-heading">O que você procura?</h3>

          <div className="categories-grid">
            {categorias.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoriaAtiva(cat.id)}
                className={`category-card ${categoriaAtiva === cat.id ? 'active' : ''}`}
              >
                <div className="category-icon">{cat.icon}</div>
                <strong className="category-name">{cat.nome}</strong>
                <small className="category-count">{cat.qtd}</small>
              </button>
            ))}
          </div>
        </section>

       
        <section>
          <span className="section-title-tag">ESCOLHAS DA COMUNIDADE</span>
          <h3 className="section-heading">Destaques em beleza</h3>

          <div className="cards-grid">
            {destaques.map((item) => (
              <div
                key={item.id}
                onClick={() => item.id === 'marina' && irParaTela && irParaTela('perfil')}
                className="card-item"
              >
                <div className="card-img-container">
                  <img src={item.imagem} alt={item.nome} />
                  <div className="verified-badge">✓</div>
                </div>

                <div className="card-info">
                  <h4 className="card-name">{item.nome}</h4>
                  <p className="card-category">
                    {item.categoria} · {item.distancia}
                  </p>

                  <div className="card-rating">
                    <span className="star-icon">★</span>
                    <strong>{item.nota}</strong>
                    <span>({item.status})</span>
                  </div>

                  <p className="card-price">{item.preco}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Beleza;