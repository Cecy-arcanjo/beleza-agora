import React, { useState } from 'react';
import './RecuperarNovaSenha.css';

export function RecuperarNovaSenha({ irParaTela }) {
  const [senha, setSenha] = useState('');
  const [repetirSenha, setRepetirSenha] = useState('');

  // Validação simples e amigável
  const temOitoCaracteres = senha.length >= 8;
  const temMaiusculaMinuscula = /[A-Z]/.test(senha) && /[a-z]/.test(senha);
  const temNumero = /\d/.test(senha);

  const salvarNovaSenha = (e) => {
    e.preventDefault();
    if (senha !== repetirSenha) {
      alert('Ops! As senhas não coincidem. Vamos conferir?');
      return;
    }
    alert('Prontinho! Senha alterada com sucesso.');
    if (irParaTela) irParaTela('login');
  };

  return (
    <div className="pagina-fundo">
      
      {/* CABEÇALHO */}
      <header className="cabecalho">
        <div className="bloco-logo" onClick={() => irParaTela && irParaTela('inicio')}>
          <div className="icone-b">B</div>
          <div>
            <h1>Beleza agora</h1>
            <span>AGENDE SUA BELEZA, DO SEU JEITO</span>
          </div>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="principal-grid">
        
        {/* LADO ESQUERDO: BANNER */}
        <div className="banner-esquerdo">
          <h2>Sua cidade tem talentos extraordinários.</h2>
          <p>Entre para contratar serviços locais ou apresentar seu trabalho à comunidade.</p>
        </div>

        {/* LADO DIREITO: CARTÃO */}
        <div className="cartao-central">
          <div className="cartao-conteudo">
            
            <button 
              type="button" 
              className="link-voltar"
              onClick={() => irParaTela && irParaTela('login')}
            >
              ← Voltar para entrar
            </button>

            <span className="etiqueta">NOVA SENHA • BELEZA AGORA</span>
            <h2>Um novo começo por aqui.</h2>
            <p className="descricao">Crie uma nova senha para sua conta. Escolha uma que você ainda não usou.</p>

            {/* FORMULÁRIO */}
            <form onSubmit={salvarNovaSenha} className="formulario">
              
              <div className="grupo-input">
                <label>Nova senha</label>
                <div className="caixa-com-icone">
                  <span>🔒</span>
                  <input
                    type="password"
                    placeholder="Digite sua nova senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                  />
                  <span className="olhinho">👁️</span>
                </div>
              </div>

              <div className="grupo-input">
                <label>Confirmar nova senha</label>
                <div className="caixa-com-icone">
                  <span>🔒</span>
                  <input
                    type="password"
                    placeholder="Digite a nova senha novamente"
                    value={repetirSenha}
                    onChange={(e) => setRepetirSenha(e.target.value)}
                    required
                  />
                  <span className="olhinho">👁️</span>
                </div>
              </div>

              {/* REQUISITOS DA SENHA */}
              <div className="caixa-requisitos">
                <span className="requisitos-titulo">Sua nova senha deve ter:</span>
                <ul>
                  <li className={temOitoCaracteres ? 'cor-certa' : ''}>Pelo menos 8 caracteres</li>
                  <li className={temMaiusculaMinuscula ? 'cor-certa' : ''}>Uma letra maiúscula e uma minúscula</li>
                  <li className={temNumero ? 'cor-certa' : ''}>Pelo menos um número</li>
                </ul>
              </div>

              <button type="submit" className="botao-principal">
                Salvar senha e voltar para entrar
              </button>
            </form>

            <p className="rodape-texto">Depois de salvar, entre com sua nova senha.</p>

          </div>
        </div>

      </main>
    </div>
  );
}