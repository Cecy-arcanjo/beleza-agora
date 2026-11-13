import React, { useState } from 'react';
import './Login.css';

// 1. Adicionada a prop irParaRecSenha
export function Login({ irParaCadastro, irParaRecSenha }) {
    
    const [mostrarSenha, setMostrarSenha] = useState(false);

    return (
        <div className="container-tela">
            <header className="cabecalho-topo">
                <div className="logotipo-marca">
                    <div className="icone-logo">B</div>
                    <div className="texto-logo">
                        <span className="titulo-marca">BELEZA AGORA</span>
                        <span className="slogan-marca">AGENDE SUA BELEZA, DO SEU JEITO</span>
                    </div>
                </div>
            </header>

            <main className="pagina-principal">
                <aside className="bloco-banner">
                    <div className="conteudo-banner">
                        <header>
                            <h1>Sua cidade tem talentos extraordinários.</h1>
                        </header>

                        <section>
                            <p>Entre para contratar serviços locais ou apresentar seu trabalho à comunidade.</p>
                        </section>
                    </div>
                </aside>

                <section className="bloco-formulario">
                    <article className="cartao-caixa">
                        <nav className="menu-abas">
                            <button className="botao-aba" type="button" onClick={irParaCadastro}>Criar conta</button>
                            <button className="botao-aba ativo" type="button">Entrar</button>
                        </nav>

                        <header>
                            <h2>Que bom ter você aqui.</h2>
                            <p className="subtitulo">Acesse sua conta para continuar.</p>
                        </header>

                        <form onSubmit={(e) => e.preventDefault()}>
                            <article className="campo-texto">
                                <label htmlFor="email">E-mail ou celular</label>
                                <section className="caixa-input">
                                    <span className="icone">✉</span>
                                    <input 
                                        id="email" 
                                        type="text" 
                                        placeholder="voce@exemplo.com" 
                                    />
                                </section>
                            </article>

                            <article className="campo-texto">
                                <label htmlFor="senha">Senha</label>
                                <section className="caixa-input">
                                    <span className="icone">
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            viewBox="0 0 24 24" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            strokeWidth="2" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            className="icone-svg"
                                        >
                                            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                        </svg>
                                    </span>
                                    <input 
                                        id="senha"
                                        type={mostrarSenha ? "text" : "password"} 
                                        placeholder="••••••••" 
                                    />
                                </section>
                            </article>

                            <section className="opcoes-extras">
                                <label className="texto-checkbox">
                                    <input 
                                        type="checkbox" 
                                        checked={mostrarSenha}
                                        onChange={(e) => setMostrarSenha(e.target.checked)} 
                                    /> Visualizar senha.
                                </label>
                                {/* 2. Link configurado para redirecionar */}
                                <button 
                                  type="button" 
                                  className="link-esqueci" 
                                  onClick={irParaRecSenha}
                                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                                >
                                  Esqueci minha senha
                                </button>
                            </section>

                            <button type="submit" className="botao-enviar">Entrar</button>

                            <aside className="divisor">
                                <span>ou continue com</span>
                            </aside>

                            <button type="button" className="botao-google">
                                <span className="google-icone">G</span> Google
                            </button>

                        </form>
                    </article>
                </section>
            </main>
        </div>
    );
}

export default Login;