import React from 'react'
import { useAuth } from '../../constants/authContext'
import { useNavigate } from 'react-router-dom';

export default function HomeScreen() {
  const navigate = useNavigate();
  
  const {logout, user} = useAuth();

  function Logout() {
  logout();
  navigate("/");
  }

    return (
    <div className='container align-items-center'>
      Home Screen bem vindo: {user.name}
      <br/>Seu celular é:
      {user.phone_number}
      <button type='submit' onClick={Logout}>Sair</button>
    </div>
  )
}
