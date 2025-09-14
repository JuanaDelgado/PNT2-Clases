//Porque uso los estilos en className
import "./user.css";
import Link from "next/link";

//Como necesito un conjunto de propiedades, recibo un objeto Usuario
export default function User({user}) {

    return(
    <li key={user.id} className="user-item">
    <div className="user-content">
        <div className="user-info">
            {/*Coloco el Link*/}
            <Link href={`/users/${user.id}`}>
            <div className="user-avatar">
                <img 
                src={user.avatar}
                alt={`Foto de ${user.name}`} 
                className="user-image"
                />
            </div>
            </Link>
            <div className="user-details">
                <div className="user-name">{user.name}</div>
                <div className="user-email">{user.email}</div>
            </div>
        </div>
        {/*TO DO: Agregar estado de users
        TO DO: Hay estilos con diferentes colores para cada uno de los estados
        Dependiendo del color tienen que usar el className que corresponde*/}
        <div className="user-status-container">
            <span className={`user-status
                ${user.status === 'registered' && 'status-registered'}
                ${user.status === 'in_progress' && 'status-in-progress' } 
                ${user.status === 'completed' && 'status-completed' }
                ${user.status === 'failed' && 'status-failed'}
                `}>
                {user.status === 'registered' && 'Registrado'}
                {user.status === 'in_progress' && 'En Progreso' }
                {user.status === 'completed' && 'Completado' }
                {user.status === 'failed' && 'No aprobado' }
            </span>
        </div>
    </div>  
    </li>
    )
}