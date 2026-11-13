import React, { useState } from 'react';
import './Mensagem.css';

const ASSETS_MENSAGENS = {
  usuarioLogado: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100',
  marina: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=200',
  ana: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=200',
  rita: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=200',
  jessica: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
  fotoEnviadaChat: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
};

export function Mensagem({ irParaTela }) {
  const [filtroConversas, setFiltroConversas] = useState('Todas');
  const [mensagemInput, setMensagemInput] = useState('');

  const conversas = [
    { id: 'marina', nome: 'Marina Lima', ultimaMsg: 'Perfeito, te espero às 14h!', tempo: '2 min', naoLida: true, foto: ASSETS_MENSAGENS.marina },
    { id: 'ana', nome: 'Ana Cláudia', ultimaMsg: 'Posso fazer nessa paleta de cores...', tempo: '1h', naoLida: false, foto: ASSETS_MENSAGENS.ana },
    { id: 'rita', nome: 'Rita Gomes', ultimaMsg: 'Seu vestido fica pronto na sexta...', tempo: 'Ontem', naoLida: false, foto: ASSETS_MENSAGENS.rita },
    { id: 'jessica', nome: 'Jéssica Moura', ultimaMsg: 'Enviei a prévia das fotos 📷', tempo: '1d', naoLida: false, foto: ASSETS_MENSAGENS.jessica },
  ];

  return (
    <div className="msg-container">
      
      {/* NAVBAR SUPERIOR */}
      <header className="msg-navbar">
        <div className="msg-logo-box" onClick={() => irParaTela && irParaTela('inicio')}>
          <div className="msg-logo-badge">B</div>
          <div className="msg-logo-texto">
            <h1>Beleza agora</h1>
            <span className="msg-logo-sub">AGENDE SUA BELEZA, DO SEU JEITO</span>
          </div>
        </div>

        <nav className="msg-nav-links">
          <button onClick={() => irParaTela && irParaTela('inicio')} className="msg-nav-item">Início</button>
          <button onClick={() => irParaTela && irParaTela('explorar')} className="msg-nav-item">Explorar</button>
          <button onClick={() => irParaTela && irParaTela('favoritos')} className="msg-nav-item">Favoritos</button>
          <button className="msg-nav-item ativo">Mensagens</button>
        </nav>

        <div className="msg-user-badge">
          <span>📍 Massapê, CE</span>
          <img src={ASSETS_MENSAGENS.usuarioLogado} alt="Usuário" />
        </div>
      </header>

      {/* ÁREA PRINCIPAL DA MENSAGEM */}
      <main className="msg-main-content">
        
        {/* COLUNA ESQUERDA: LISTA DE CONVERSAS */}
        <aside className="msg-sidebar-conversas">
          <div className="msg-sidebar-topo">
            <h2>Mensagens</h2>
            <button className="msg-btn-nova-msg" title="Nova mensagem">✏️</button>
          </div>

          <div className="msg-busca-box">
            <span className="msg-icone-busca">🔍</span>
            <input type="text" placeholder="Buscar conversa" />
          </div>

          <div className="msg-filtros-abas">
            {['Todas', 'Não lidas', 'Arquivadas'].map((aba) => (
              <button
                key={aba}
                className={`msg-aba-btn ${filtroConversas === aba ? 'ativo' : ''}`}
                onClick={() => setFiltroConversas(aba)}
              >
                {aba}
              </button>
            ))}
          </div>

          <div className="msg-lista">
            {conversas.map((chat) => (
              <div key={chat.id} className={`msg-item-conversa ${chat.id === 'marina' ? 'selecionada' : ''}`}>
                <div className="msg-avatar-container">
                  <img src={chat.foto} alt={chat.nome} />
                  <span className="msg-status-online"></span>
                </div>
                <div className="msg-info-conversa">
                  <div className="msg-info-topo">
                    <h4>{chat.nome}</h4>
                    <span className="msg-tempo">{chat.tempo}</span>
                  </div>
                  <p className={chat.naoLida ? 'nao-lida-texto' : ''}>{chat.ultimaMsg}</p>
                </div>
                {chat.naoLida && <span className="msg-bola-notificacao">2 min</span>}
              </div>
            ))}
          </div>
        </aside>

        {/* COLUNA CENTRAL: CHAT ATIVO */}
        <section className="msg-chat-area">
          {/* Topo do Chat */}
          <div className="msg-chat-header">
            <div className="msg-chat-usuario-info">
              <img src={ASSETS_MENSAGENS.marina} alt="Marina Lima" />
              <div>
                <h3>Marina Lima <span className="msg-verificado">✓</span></h3>
                <span className="msg-sub-online"><span className="ponto-verde">●</span> Online agora</span>
              </div>
            </div>
            <div className="msg-chat-acoes-topo">
              <button title="Ligar">📞</button>
              <button title="Agendar">📅</button>
              <button title="Opções">⋮</button>
            </div>
          </div>

          {/* Histórico de Mensagens */}
          <div className="msg-historico">
            <div className="msg-data-divisor">
              <span>HOJE, 13 DE OUTUBRO</span>
            </div>

            {/* Mensagem recebida */}
            <div className="msg-balao recebida">
              <p>Oi, Carolina! Vi seu agendamento para amanhã. Você tem alguma referência de maquiagem que gostaria de seguir?</p>
              <span className="msg-hora">14:12</span>
            </div>

            {/* Mensagem enviada */}
            <div className="msg-balao enviada">
              <p>Oi, Marina! Quero algo leve, com tons rosados. Separei esta referência 😍</p>
              <span className="msg-hora">14:14 ✓✓</span>
            </div>

            {/* Imagem enviada no chat */}
            <div className="msg-balao enviada imagem-balao">
              <img src={ASSETS_MENSAGENS.fotoEnviadaChat} alt="Referência" />
              <span className="msg-hora">14:15 ✓✓</span>
            </div>

            {/* Mensagem recebida */}
            <div className="msg-balao recebida">
              <p>Amei! Consigo fazer bem nessa proposta. Vou levar opções que combinam com seu tom de pele.</p>
              <span className="msg-hora">14:19</span>
            </div>

            {/* Mensagem enviada */}
            <div className="msg-balao enviada">
              <p>Perfeito, obrigada! Te espero amanhã às 14h.</p>
              <span className="msg-hora">14:20 ✓✓</span>
            </div>

            {/* Mensagem recebida */}
            <div className="msg-balao recebida">
              <p>Perfeito, te espero às 14h! 💕</p>
              <span className="msg-hora">14:21</span>
            </div>
          </div>

          {/* Caixa de Input de Envio */}
          <div className="msg-input-container">
            <button className="msg-btn-anexo" title="Anexar arquivo">📎</button>
            <input
              type="text"
              placeholder="Escreva uma mensagem..."
              value={mensagemInput}
              onChange={(e) => setMensagemInput(e.target.value)}
            />
            <button className="msg-btn-emoji" title="Emojis">😊</button>
            <button className="msg-btn-enviar" title="Enviar">➤</button>
          </div>
        </section>

        {/* COLUNA DIREITA: PRÓXIMO AGENDAMENTO */}
        <aside className="msg-sidebar-detalhes">
          <span className="msg-titulo-painel">Próximo agendamento</span>

          <div className="msg-card-agendamento-lateral">
            <span className="msg-badge-amanha">Amanhã</span>
            <h3>Maquiagem social completa</h3>
            
            <div className="msg-detalhe-linha">
              <strong>14 out · 14:00</strong>
              <p>Estúdio Marina Lima · Centro</p>
            </div>

            <div className="msg-preco-bloco">
              <span className="msg-preco">R$ 90,00</span>
            </div>

            <button className="msg-btn-ver-agendamento" onClick={() => irParaTela && irParaTela('agendamento')}>
              Ver agendamento
            </button>
          </div>

          <div className="msg-card-seguranca">
            <span className="msg-icone-escudo">🛡️</span>
            <p>Mantenha a conversa por aqui para sua segurança.</p>
          </div>
        </aside>

      </main>
    </div>
  );
}