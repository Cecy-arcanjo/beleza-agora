import React, { useState } from 'react';
import './RecuperarSolicitar.css';

export function RecuperarSolicitar({ irParaLogin }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Link de recuperação enviado para: ${email}`);
  };

  return (
    <div className="recuperar-container">
      {/* CABEÇALHO COM A LOGO */}
      <header className="recuperar-header">
        <div className="logo-bloco">
          <div className="logo-badge">B</div>
          <div className="logo-texto">
            <h1>Beleza agora</h1>
            <span>AGENDE SUA BELEZA, DO SEU JEITO</span>
          </div>
        </div>
      </header>

      {/* ÁREA PRINCIPAL */}
      <main className="recuperar-main">
        {/* LADO ESQUERDO: BANNER ROSA */}
        <div className="recuperar-banner">
          <h2>Sua cidade tem talentos extraordinários.</h2>
          <p>
            Entre para contratar serviços locais ou apresentar seu trabalho à comunidade.
          </p>
        </div>

        {/* LADO DIREITO: CARD DE FORMULÁRIO */}
        <div className="recuperar-card-wrapper">
          <div className="recuperar-card">
            {/* BOTÃO VOLTAR */}
            <button 
              type="button" 
              className="btn-voltar"
              onClick={() => irParaLogin && irParaLogin()}
            >
              ← Voltar para entrar
            </button>

            {/* TÍTULO DA SEÇÃO */}
            <span className="subtitulo-secao">RECUPERAÇÃO DE SENHA</span>
            <h3 className="titulo-form">Vamos recuperar seu acesso.</h3>
            <p className="descricao-form">
              Informe o e-mail da sua conta Beleza agora para receber um link de redefinição de senha.
            </p>

            {/* FORMULÁRIO DE RECUPERAÇÃO */}
            <form onSubmit={handleSubmit} className="form-recuperar">
              <div className="campo-input-grupo">
                <label htmlFor="email">E-mail</label>
                <div className="input-com-icone">
                  <span className="icone-email">✉</span>
                  <input
                    id="email"
                    type="email"
                    placeholder="voce@exemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn-enviar-link">
                Enviar link de recuperação
              </button>
            </form>

            {/* DIVISOR */}
            <div className="divisor-texto">
              <span>ou continue com</span>
            </div>

            {/* BOTÃO GOOGLE */}
            <button type="button" className="btn-google">
              <span className="icone-google">G</span>
              Continuar com Google
            </button>

            {/* NOTA DE RODAPÉ */}
            <p className="nota-rodape">
              Criou sua conta com Google? Continue com Google para entrar. Se esqueceu a senha do Google, recupere-a diretamente na sua conta Google.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}