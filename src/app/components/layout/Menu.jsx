'use client';

import React from 'react';
import Link from 'next/link'; 
import { FaTasks, FaUserPlus, FaClipboardList, FaBeer } from 'react-icons/fa'; 
import { usePathname } from 'next/navigation'; //Hook para saber la ruta actual

//Arrays para los links de navegacion
const Menu = () => {
  const navLinks = [
    { name: 'Dashboard', path: '/dashboard', icon: <FaTasks className="navIcon" /> },
    { name: 'Usuarios', path: '/users', icon: <FaUserPlus className="navIcon" /> },
    { name: 'Beers', path: '/beers', icon: <FaBeer className="navIcon" /> },
    { name: 'Administración', path: '/admin', icon: <FaClipboardList className="navIcon" /> },
  ];

  //Hook de Next.js, devuelve la ruta en la que estoy
  const pathname = usePathname();

  //Recorro el array y por cada elemento que el usuairo elgija se lo dirigue a esa pagina
  //gracias a el Link. 
  //Eje: Apreto Beers y me dirigue a la pag Beers
  return (
    <div className="desktopNavLinks">
      {navLinks.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={`navLink ${pathname === link.path ? 'activeLink' : 'inactiveLink'}`}
        >
          {/* Muestra el icono
          Eje; Icono de la beer */}
          {link.icon}  
          {/*Muestra el texto
          Eje: Texto "Beers" */} 
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Menu;