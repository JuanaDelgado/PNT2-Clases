//Tomo el id
'use client';
import {useState, useEffect} from 'react';
import UserDetails from "../components/UserDetails";
import {useParams} from "next/navigation";

export default function UserDetailPage() {
    const [user, setUser] = useState(null);
    const params = useParams();
    const userId = params.id;
    
        useEffect(() => {
        
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/ORT-PabloFernandez/PNTP2-REACT-EJEMPLO/main/src/data/usersv2.json');
                const data = await response.json();
                
                const foundUser = data.find((user) => user.id === userId);

                if(foundUser){
                    setUser(foundUser);
                }else{
                    console.log('Usuario no encontrado');
                }

            } catch (error) {
                console.log('Error al cargar usuarios', error);
                setLoading(false);
            }
        };
            fetchUsers();
    }, []);

    return (
        <div>
            <UserDetails user={user}/>
        </div>
    );
}