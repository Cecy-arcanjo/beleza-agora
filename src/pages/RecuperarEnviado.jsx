import React from 'react';
import './RecuperarEnviado.css';

export  function RecuperarEnviado({ irParaTela }) {
  return (
    <div className="recuperar-enviado-container">
      
      {/* CABEÇALHO SUPERIOR */}
      <header className="recuperar-enviado-header">
        <div className="logo-bloco" onClick={() => irParaTela && irParaTela('inicio')}>
          <div className="logo-badge">B</div>
          <div className="logo-texto">
            <h1>Beleza agora</h1>
            <span>AGENDE SUA BELEZA, DO SEU JEITO</span>
          </div>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL (2 COLUNAS) */}
      <main className="recuperar-enviado-main">
        
        {/* LADO ESQUERDO: BANNER EM VINHO */}
        <div className="recuperar-enviado-banner">
          <h2>Sua cidade tem talentos extraordinários.</h2>
          <p>
            Entre para contratar serviços locais ou apresentar seu trabalho à comunidade.
          </p>
        </div>

        {/* LADO DIREITO: CARTÃO DE CONFIRMAÇÃO */}
        <div className="recuperar-enviado-card-wrapper">
          <div className="recuperar-enviado-card">
            
            {/* BOTÃO VOLTAR */}
            <button 
              type="button" 
              className="btn-voltar"
              onClick={() => irParaTela && irParaTela('login')}
            >
              ← Voltar
            </button>

            {/* ÍCONE DE EMAIL ENVIADO */}
            <div className="icone-envelope-box">
              ✉️
            </div>

            {/* TÍTULOS E AVISOS */}
            <span className="subtitulo-secao">SOLICITAÇÃO RECEBIDA</span>
            <h3 className="titulo-form">Confira seu e-mail.</h3>
            <p className="descricao-form">
              Se houver uma conta com este e-mail, você receberá um link para redefinir sua senha.
            </p>

            {/* CAIXA COM O E-MAIL ENVIADO */}
            <div className="email-enviado-box">
              <span className="icone-email-pequeno">✉</span>
              <span className="email-texto">voce@exemplo.com</span>
            </div>

            {/* INSTRUÇÕES EXTRAS */}
            <div className="instrucoes-container">
              <div className="instrucao-item">
                <strong>Confira sua caixa de entrada</strong>
                <p>Procure a mensagem de recuperação do Beleza agora.</p>
              </div>
              <div className="instrucao-item">
                <strong>Não encontrou?</strong>
                <p>Veja também as pastas de spam e lixo eletrônico.</p>
              </div>
            </div>

            {/* BOTÃO REENVIAR */}
            <button 
              type="button" 
              className="btn-reenviar"
              onClick={() => alert('Link reenviado com sucesso!')}
            >
              Reenviar link de recuperação
            </button>

            {/* LINK PARA CORRIGIR E-MAIL */}
            <div className="link-corrigir-container">
              <button 
                type="button" 
                className="btn-corrigir"
                onClick={() => irParaTela && irParaTela('recuperarSolicitar')}
              >
                Corrigir e-mail
              </button>
            </div>

            {/* NOTA DE RODAPÉ DO CARD */}
            <p className="nota-rodape-enviado">
              O e-mail pode levar alguns minutos para chegar.
            </p>

          </div>
        </div>

      </main>
    </div>
  );
}