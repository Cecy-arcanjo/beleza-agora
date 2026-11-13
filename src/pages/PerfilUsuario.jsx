import React, { useState } from 'react';
import { 
  Heart, 
  MessageSquare, 
  Search, 
  MapPin, 
  User, 
  Calendar, 
  Star, 
  CreditCard, 
  Settings, 
  HelpCircle, 
  Edit3, 
  ChevronRight, 
  CheckCircle 
} from 'lucide-react';

export function PerfilUsuario() {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState('Visão geral');

  // Dados dos Agendamentos
  const agendamentos = [
    {
      id: 1,
      dia: '14',
      mes: 'OUT',
      servico: 'Maquilhagem social completa',
      profissional: 'Marina Lima',
      hora: '14:00',
      estado: 'Confirmado',
      corEstado: 'bg-[#EAF7EE] text-[#28A745]',
      corData: 'bg-[#8A1538]'
    },
    {
      id: 2,
      dia: '22',
      mes: 'OUT',
      servico: 'Ajuste de vestido',
      profissional: 'Rita Gomes',
      hora: '09:30',
      estado: 'Aguardando confirmação',
      corEstado: 'bg-[#FFF3CD] text-[#856404]',
      corData: 'bg-[#E29578]'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#2D2D2D] font-sans">
      {/* 1. Barra de Navegação Superior */}
      <header className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between">
        {/* Logótipo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#8A1538] text-white flex items-center justify-center font-bold text-lg">
            B
          </div>
          <div>
            <h1 className="font-bold text-[#8A1538] leading-tight text-lg">Beleza agora</h1>
            <p className="text-[10px] text-gray-500 tracking-wider">AGENDE A SUA BELEZA, DO SEU JEITO</p>
          </div>
        </div>

        {/* Menu Principal */}
        <nav className="flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#" className="text-[#8A1538] font-semibold border-b-2 border-[#8A1538] pb-1">Início</a>
          <a href="#" className="hover:text-[#8A1538] transition-colors">Explorar</a>
          <a href="#" className="hover:text-[#8A1538] transition-colors">Favoritos</a>
          <a href="#" className="hover:text-[#8A1538] transition-colors">Mensagens</a>
        </nav>

        {/* Localização e Foto de Perfil */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full text-xs text-gray-600">
            <MapPin size={14} className="text-[#8A1538]" />
            <span>Massapê, CE</span>
          </div>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#8A1538]/20">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150" 
              alt="Carolina Sousa" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="max-w-6xl mx-auto p-6 md:p-8">
        {/* Cabeçalho das Boas-Vindas */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Olá, Carolina!</h2>
            <p className="text-xs text-gray-500 mt-0.5">Acompanhe os seus agendamentos e a sua participação na comunidade.</p>
          </div>
          <button className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
            <Edit3 size={13} />
            Editar perfil
          </button>
        </div>

        {/* Cartões de Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <CartaoEstatistica icone={<Calendar size={18} className="text-[#8A1538]" />} valor="3" titulo="Agendamentos" />
          <CartaoEstatistica icone={<Star size={18} className="text-[#8A1538]" />} valor="8" titulo="Avaliações feitas" />
          <CartaoEstatistica icone={<Heart size={18} className="text-[#8A1538]" />} valor="4" titulo="Favoritos" />
          <CartaoEstatistica icone={<CheckCircle size={18} className="text-[#8A1538]" />} valor="100%" titulo="Perfil completo" />
        </div>

        {/* Grelha de Conteúdo (Coluna Esquerda e Direita) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Coluna Esquerda: Informações do Perfil e Menu */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm">
              <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-2 border-pink-100">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" 
                  alt="Carolina Sousa" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-gray-900 text-base">Carolina Sousa</h3>
              <p className="text-xs text-gray-400 mb-3">carolina.sousa@gmail.com</p>
              <span className="inline-block bg-[#EAF7EE] text-[#28A745] font-semibold text-[11px] px-3 py-1 rounded-full">
                Cliente verificada
              </span>

              {/* Menu Lateral de Opções */}
              <div className="mt-6 space-y-1 text-left text-xs font-medium text-gray-600">
                <ItemMenuLateral 
                  icone={<User size={15} />} 
                  rotulo="Visão geral" 
                  ativo={opcaoSelecionada === 'Visão geral'}
                  onClick={() => setOpcaoSelecionada('Visão geral')}
                />
                <ItemMenuLateral 
                  icone={<Calendar size={15} />} 
                  rotulo="Meus agendamentos" 
                  ativo={opcaoSelecionada === 'Meus agendamentos'}
                  onClick={() => setOpcaoSelecionada('Meus agendamentos')}
                />
                <ItemMenuLateral 
                  icone={<Star size={15} />} 
                  rotulo="Minhas avaliações" 
                  ativo={opcaoSelecionada === 'Minhas avaliações'}
                  onClick={() => setOpcaoSelecionada('Minhas avaliações')}
                />
                <ItemMenuLateral 
                  icone={<Heart size={15} />} 
                  rotulo="Favoritos" 
                  ativo={opcaoSelecionada === 'Favoritos'}
                  onClick={() => setOpcaoSelecionada('Favoritos')}
                />
                <ItemMenuLateral 
                  icone={<CreditCard size={15} />} 
                  rotulo="Pagamentos" 
                  ativo={opcaoSelecionada === 'Pagamentos'}
                  onClick={() => setOpcaoSelecionada('Pagamentos')}
                />
                <ItemMenuLateral 
                  icone={<Settings size={15} />} 
                  rotulo="Configurações" 
                  ativo={opcaoSelecionada === 'Configurações'}
                  onClick={() => setOpcaoSelecionada('Configurações')}
                />
              </div>
            </div>

            {/* Caixa de Apoio ao Cliente */}
            <div className="bg-[#FFF8EE] rounded-2xl p-4 border border-[#FFE8C2]">
              <h4 className="font-bold text-xs text-gray-800 mb-1">Precisa de ajuda?</h4>
              <p className="text-[11px] text-gray-600 mb-3 leading-relaxed">
                Fale com a equipa <span className="font-medium">Elas de Massapê</span>.
              </p>
              <button className="text-[11px] font-semibold text-[#8A1538] hover:underline flex items-center gap-1">
                Abrir atendimento <ChevronRight size={12} />
              </button>
            </div>
          </div>

          {/* Coluna Direita: Agendamentos e Avaliações */}
          <div className="lg:col-span-8 space-y-6">
            {/* Secção de Próximos Agendamentos */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-900 text-sm">Próximos agendamentos</h3>
                <a href="#" className="text-xs font-semibold text-[#8A1538] hover:underline">Ver todos →</a>
              </div>

              <div className="space-y-3">
                {agendamentos.map((agendamento) => (
                  <div key={agendamento.id} className="bg-gray-50 rounded-xl p-4 flex items-center justify-between border border-gray-100 hover:border-pink-200 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={`${agendamento.corData} text-white rounded-xl p-2.5 text-center min-w-[50px]`}>
                        <span className="block font-bold text-base leading-none">{agendamento.dia}</span>
                        <span className="text-[10px] uppercase font-medium">{agendamento.mes}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-xs">{agendamento.servico}</h4>
                        <p className="text-[11px] text-gray-500 mt-0.5">{agendamento.profissional} • {agendamento.hora}</p>
                        <span className={`inline-block mt-1.5 ${agendamento.corEstado} font-semibold text-[10px] px-2 py-0.5 rounded`}>
                          {agendamento.estado}
                        </span>
                      </div>
                    </div>
                    <ChevronRight size={16} className="text-gray-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* Secção de Avaliação Rápida */}
            <div className="bg-[#FFF8EE] rounded-2xl p-6 border border-[#FFE8C2] shadow-sm">
              <h3 className="font-bold text-gray-900 text-sm mb-1">Conte como foi</h3>
              <p className="text-xs text-gray-600 mb-4">
                A sua avaliação ajuda outras pessoas e fortalece o trabalho local.
              </p>

              <div className="bg-white/80 rounded-xl p-3 flex items-center gap-3 mb-4 border border-orange-100">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100" 
                  alt="Ana Cláudia" 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-xs">Ana Cláudia</h4>
                  <p className="text-[10px] text-gray-500">⭐ <strong>5,0</strong> (o seu atendimento)</p>
                </div>
              </div>

              <button className="w-full bg-white border border-gray-300 rounded-xl py-2.5 text-xs font-bold text-gray-800 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <Star size={14} className="text-[#8A1538]" />
                Avaliar agora
              </button>
            </div>

            {/* Secção de Configurações Rápidas */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <h4 className="font-bold text-gray-900 text-xs mb-3">Configurações rápidas</h4>
              <div className="space-y-2 text-xs">
                <LinhaConfiguracaoRapida rotulo="Notificações" valor="Ativadas" />
                <LinhaConfiguracaoRapida rotulo="Localização" valor="Massapê, CE" />
                <LinhaConfiguracaoRapida rotulo="Privacidade" valor="Protegida" />
              </div>
            </div>

            {/* Banner do Impacto Local */}
            <div className="bg-[#8A1538] text-white rounded-2xl p-5 flex items-center justify-between shadow-md">
              <div>
                <h4 className="font-bold text-sm mb-0.5">O seu impacto em Massapê</h4>
                <p className="text-[11px] text-pink-100">Já apoiou 6 profissionais locais. Obrigado por fazer parte!</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-3 py-2 rounded-xl text-right border border-white/20">
                <span className="block font-bold text-xs">R$ 760 movimentados localmente</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Subcomponente: Cartão de Estatística
function CartaoEstatistica({ icone, valor, titulo }) {
  return (
    <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex items-center gap-3">
      <div className="p-2.5 bg-pink-50 rounded-xl">{icone}</div>
      <div>
        <span className="block font-bold text-base text-gray-900">{valor}</span>
        <span className="text-[11px] text-gray-500">{titulo}</span>
      </div>
    </div>
  );
}

// Subcomponente: Item do Menu Lateral
function ItemMenuLateral({ icone, rotulo, ativo = false, onClick }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl font-medium transition-colors ${
        ativo 
          ? 'bg-pink-50 text-[#8A1538] font-semibold' 
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
      }`}
    >
      {icone}
      <span>{rotulo}</span>
    </button>
  );
}

// Subcomponente: Linha de Configuração Rápida
function LinhaConfiguracaoRapida({ rotulo, valor }) {
  return (
    <div className="flex justify-between items-center py-1.5 border-b border-gray-50 last:border-0">
      <span className="text-gray-600">{rotulo}</span>
      <span className="text-gray-400 text-[11px] flex items-center gap-1">
        {valor} <ChevronRight size={12} />
      </span>
    </div>
  );
}