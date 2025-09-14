'use client';

import "./user.css";
import Link from "next/link";

export default function UserDetails({user}) {
   //TO DO: Mostrar el avatar del usuario (foto)
   //TO DO: Mostrar todos los demas datos del usuario

   //TO DO: Mostrar un boton de Volver a la lista
    if(!user){
        return <div>Cargando...</div>
    }
    return (
        <div>
        <div>Nombre: {user.name}</div>
        <div>Email: {user.email}</div>
        </div>
    );
}