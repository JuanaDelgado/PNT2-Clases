'use client';

import { useState } from 'react';
//import { useAuth } from '../../../auth/AuthProvider';
import styles from './navbar.css';

// Importar los componentes modulares
import Logo from './Logo';
import Menu from './Menu';
import Notifications from './Notifications';
import CurrentUser from './CurrentUser';

export default function Navbar() {
  //Es un usuario que uso como avatar, para que alguien vea como se ve la app si ya hubiera iniciado sesion
    const { currentUser, logout } = {currentUser: {
    id: '15',
    name: 'Grady Archie',
    avatar: 'https://raw.githubusercontent.com/ORT-PabloFernandez/PNTP2-REACT-EJEMPLO/main/public/img/Grady%20Archie.jpg',
    email: 'Grady.Archie@ejemplo.com',
    status: 'completed'
  }, logout: () => {}};

  //Estados locales del NavBar
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationIndicator, setNotificationIndicator] = useState(true);

  //Si no hay usuarios logueados, no muestra nada
  if (!currentUser) return null;

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Logo and Menu */}
        <div className="navbar-left">
          <Logo />
          <Menu />
        </div>

        {/* User Menu */}
        <div className="navbar-right">
          <Notifications notificationIndicator={notificationIndicator} />
          <CurrentUser currentUser={currentUser} logout={logout} />
        </div>
      </div>
    </nav>
  );
}