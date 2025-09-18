'use client';

import React from 'react';
import Link from 'next/link'; //Es para nevegar sin recargar la pagina
import { FaBell } from 'react-icons/fa'; //Icono de campana


//Recibo una prop/notificacion
const Notifications = ({ notificationIndicator }) => {
  return (
    <Link href="/notifications" className="notificationContainer">
      {/* Icono de campana */}
      <FaBell className="notificationIcon" />
      {notificationIndicator && (
        <span className="notificationIndicator"></span>
      )}
    </Link>
  );
};

export default Notifications;
        {/*Si notification es true, se dibuja un punto rojo y sino nada*/}