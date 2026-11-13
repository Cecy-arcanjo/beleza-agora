import React, { useState } from 'react';
import { Cadastro } from './pages/Cadastro';
import { Login } from './pages/Login';
import { Inicio } from './pages/Inicio';
import { Explorar } from './pages/Explorar';
import { Beleza } from './pages/Beleza';
import { PerfilMarina } from './pages/PerfilMarina';
import { Agendamento } from './pages/agendamento'; 
import { Opcoes } from './pages/Opcoes';
import { Confirmacao }  from './pages/Confirmacao';
import { Favoritos } from './pages/Favoritos';
import { Mensagem } from './pages/Mensagem';
import { PerfilUsuario} from './pages/PerfilUsuario';
import {Descobrir} from './pages/Descobrir';
import {RecuperarSolicitar} from './pages/RecuperarSolicitar';
import {RecuperarEnviado} from './pages/RecuperarEnviado';
import {RecuperarNovaSenha} from './pages/RecuperarNovaSenha';


function App() {
  // Define a tela inicial (pode mudar para 'inicio' quando finalizar os testes)
  const [telaAtiva, setTelaAtiva] = useState('inicio');

  return (
    <div>
      {telaAtiva === 'cadastro' && (
        <Cadastro irParaLogin={() => setTelaAtiva('login')} />
      )}

      {telaAtiva === 'login' && (
        <Login irParaCadastro={() => setTelaAtiva('cadastro')} />
      )}

      {telaAtiva === 'inicio' && (
        <Inicio irParaTela={setTelaAtiva} />
      )}

      {telaAtiva === 'explorar' && (
        <Explorar irParaTela={setTelaAtiva} />
      )}

      {telaAtiva === 'beleza' && (
        <Beleza irParaTela={setTelaAtiva} />
      )}

      {telaAtiva === 'perfil' && (
        <PerfilMarina irParaTela={setTelaAtiva} />
      )}

      {telaAtiva === 'opcoes' && (
        <Opcoes irParaTela={setTelaAtiva} />
      )}

      {telaAtiva === 'agendamento' && (
        <Agendamento irParaTela={setTelaAtiva} />
      )}

      {telaAtiva === 'confirmaçao' && (
        <Confirmacao irParaTela={setTelaAtiva} />
      )}

      {telaAtiva === 'favoritos' && (
        <Favoritos irParaTela={setTelaAtiva} />
      )}

      {telaAtiva === 'mensagem' && (
        <Mensagem irParaTela={setTelaAtiva} />
      )} 

      {telaAtiva === 'perfil usuario' && (
        <PerfilUsuario irParaTela={setTelaAtiva} />
      )} 

      {telaAtiva === 'descobrir' && (
        <Descobrir irParaTela={setTelaAtiva} />
      )}

      {telaAtiva === 'recuperar' && (
        <RecuperarSolicitar irParaLogin={ setTelaAtiva} />
      )}

      {telaAtiva === 'recuperarEnviado' && (
        <RecuperarEnviado irParaTela={setTelaAtiva} />
      )}
      
      {telaAtiva === 'recuperarNovaSenha' && (
        <RecuperarNovaSenha irParaTela={setTelaAtiva} />
      )}

    </div>
  );
}

export default App;