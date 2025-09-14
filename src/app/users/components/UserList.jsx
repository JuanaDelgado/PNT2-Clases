import User from "./User";
import "./user.css";

//Recibo un array de usuarios xq quiero mostrar varios usuarios
export default function UserList ({users}) {
    return(
        <div className="user-list-container">
            <ul className="user-list">
                {
                    users.map((user) => (
                    <User key={user.id} user={user} />
                )) 
                }
            </ul>
        </div>
    );
}