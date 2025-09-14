'use client'
import UserList from "./components/UserList";
import {useState, useEffect} from 'react';

//Aca uso el componente UserList
export default function UsersPage() {

    //Hago une estado xq es un lugar donde tengo que almacenar a los usuarios traidos de la API
    const[users, setUsers] = useState([]);
    const[loading, setLoading] = useState(true);

    //TO DO: Obtener los usuarios desde una API
    useEffect(() => {
        //Funcion para obtener los usuarios de la API
        //Tiene 2 parametros, tiene la funcion que se llama despues de montar el componente
        //y una lista de dependencias. 
        const fetchUsers = async () => {
            try {
                //Guardo los datos de la API en response
                const response = await fetch('https://raw.githubusercontent.com/ORT-PabloFernandez/PNTP2-REACT-EJEMPLO/main/src/data/usersv2.json');
                //Response.json me devuelve los datos limpios/usable y me los guardo en data
                const data = await response.json();
                //Cargo los usuarios y los pongo en el estado data
                setUsers(data);
                setLoading(false);
            } catch (error) {
                console.log('Error al cargar usuarios', error);
                setLoading(false);
            }
        };
        //Llamo a la funcion fetch
        setTimeout(() => {
            fetchUsers();
        });
        //Lista de dependencias [] xq quiero que se ejecute 1 vez
    }, []);
    return(
        <div className="container">
            {/*Si esto es verdadero devuelvo el p y sino devuelvo lo otro*/}
            {loading ? (
                <p>Cargando usuarios...</p>
            ) : (
                <UserList users={users} /> )
            }
        </div>
    );
}