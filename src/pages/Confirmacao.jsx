import React from 'react';
import { 
  MapPin, 
  Check, 
  MessageSquare, 
  Calendar, 
  Clock, 
  CreditCard, 
  CalendarPlus 
} from 'lucide-react';
import './Confirmacao.css';

export function Confirmacao() {
  return (
    <div className="beauty-page">
      
      {/* CABEÇALHO / NAVBAR */}
      <header className="beauty-header">
        <div className="beauty-container header-content">
          {/* Logo */}
          <div className="beauty-logo-wrapper">
            <div className="beauty-logo-icon">B</div>
            <div>
              <h1 className="beauty-title">Beleza agora</h1>
              <p className="beauty-subtitle">Sua beleza em primeiro lugar</p>
            </div>
          </div>

          {/* Links de Navegação */}
          <nav className="beauty-nav">
            <a href="#inicio">Início</a>
            <a href="#explorar">Explorar</a>
            <a href="#favoritos">Favoritos</a>
            <a href="#mensagens">Mensagens</a>
          </nav>

          {/* Perfil e Localização */}
          <div className="beauty-user-section">
            <div className="beauty-location-badge">
              <MapPin size={14} />
              <span>Massapê, CE</span>
            </div>
            <div className="beauty-avatar">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150" 
                alt="Foto de perfil" 
              />
            </div>
          </div>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="beauty-container main-content">
        
        {/* PASSO A PASSO (STEPPER) */}
        <div className="beauty-stepper">
          <div className="step-item">
            <span className="step-number">1</span>
            <span>Serviço</span>
          </div>
          <div className="step-line"></div>
          <div className="step-item">
            <span className="step-number">2</span>
            <span>Data e horário</span>
          </div>
          <div className="step-line"></div>
          <div className="step-item active">
            <span className="step-number">3</span>
            <span className="step-text-active">Confirmado</span>
          </div>
        </div>

        {/* GRID DOS PAINÉIS DA TELA */}
        <div className="beauty-grid">
          
          {/* PAINEL ESQUERDO (CARD ROXO COM STATUS) */}
          <div className="left-panel">
            <div className="decorative-circle"></div>

            <div>
              <div className="check-icon-wrapper">
                <Check size={32} strokeWidth={3} />
              </div>

              <span className="panel-tag">Agendamento Confirmado</span>
              
              <h2 className="panel-title">
                Tudo certo,<br />Carolina!
              </h2>

              <p className="panel-desc">
                Marina já recebeu seu pedido. Enviamos os detalhes para o seu WhatsApp e e-mail.
              </p>
            </div>

            <div className="panel-footer">
              <div className="panel-footer-info">
                <div>
                  <span className="code-label">Código do agendamento</span>
                  <span className="code-value">EDM-1426</span>
                </div>
                <span className="status-badge">Confirmado</span>
              </div>
              <p className="cancel-note">
                Você pode cancelar gratuitamente até 24 horas antes.
              </p>
            </div>
          </div>

          {/* PAINEL DIREITO (DETALHES DO AGENDAMENTO) */}
          <div className="right-panel">
            
            <div>
              {/* Profissional / Serviço */}
              <div className="service-header">
                <div className="service-info-group">
                  <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150" 
                    alt="Marina Lima" 
                    className="professional-avatar"
                  />
                  <div>
                    <h3 className="service-name">Maquiagem social completa</h3>
                    <p className="service-meta">com Marina Lima • Há 2 min atrás</p>
                  </div>
                </div>
                <button className="msg-btn">
                  <MessageSquare size={14} />
                  <span>Enviar mensagem</span>
                </button>
              </div>

              {/* Informações de Data, Hora, Local e Pagamento */}
              <div className="details-grid">
                <div className="details-column">
                  <div className="detail-item">
                    <div className="detail-icon"><Calendar size={16} /></div>
                    <div>
                      <span className="detail-label">Data</span>
                      <p className="detail-value">Quarta-feira, 14 de outubro</p>
                    </div>
                  </div>

                  <div className="detail-item">
                    <div className="detail-icon"><Clock size={16} /></div>
                    <div>
                      <span className="detail-label">Horário</span>
                      <p className="detail-value">14:00 - 15:30</p>
                    </div>
                  </div>
                </div>

                <div className="details-column">
                  <div className="detail-item">
                    <div className="detail-icon"><MapPin size={16} /></div>
                    <div>
                      <span className="detail-label">Local</span>
                      <p className="detail-value">Estúdio Marina Lima - Centro</p>
                    </div>
                  </div>

                  <div className="detail-item">
                    <div className="detail-icon"><CreditCard size={16} /></div>
                    <div>
                      <span className="detail-label">Forma de pagamento</span>
                      <p className="detail-value">Na hora · PIX ou cartão</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Total */}
              <div className="price-section">
                <div>
                  <span className="price-label">Total</span>
                  <p className="price-sub">R$ 90,00/hr</p>
                </div>
                <div className="price-total-wrapper">
                  <span className="price-total">RS 90,00</span>
                </div>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="actions-section">
              <div className="actions-row">
                <button className="btn-primary">
                  <CalendarPlus size={16} />
                  <span>Adicionar ao calendário</span>
                </button>
                <button className="btn-secondary">
                  Ver meus agendamentos
                </button>
              </div>
              <div className="back-link-wrapper">
                <a href="#inicio" className="back-link">
                  Voltar ao início
                </a>
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}