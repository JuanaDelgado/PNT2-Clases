'use client';

import React from 'react';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className="logoContainer">
      {/*Pongo el titulo de la app, que esta envuelto en Link,
      si hago click me lleva a la pag desahboard*/}
      <Link href="/dashboard">
        <span className="logo">Gestión de Usuarios</span>
      </Link>
    </div>
  );
};

export default Logo;