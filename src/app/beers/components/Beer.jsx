'use client'
import {useState} from "react";
import "./beer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'

export default function Beer({beer}) {
    //ESTADOS
    //Devuelvo una constante (quantity) y un puntero de la funcion (setQuantity)
    //Una es para almacenar el estado
    //La otra es para actualizar
    //0 es el valor inicial
    const [quantity, setQuantity] = useState(0);
    const[message, setMessage] = useState("");
    //Almaceno mi like
    const[liked, setLiked] = useState(false);
    //Cant likes
    const [likes, setLikes] = useState(0);

    //Cambio el valor
    //const handlePlus = () => {
        //setQuantity(quantity + 1);
    //}

    //TO DO: Implementar handlerMinus
    //const handleMinus = () => {
        //setQuantity(quantity - 1);
    //}

    const handleBuy = () => {
        //TO DO: Cuando la cantidad es 1 que diga unidad
        if(quantity === 1){
            setMessage(`Has comprado ${quantity} unidad de ${beer.name}`);
            setTimeout(() => setMessage(''), 3000);
        //TO DO: Validar que no pueda comprar 0 unidades.
        }else if(quantity <= 0){
            setMessage(`No se puede comprar ${quantity} unidades de ${beer.name}`);
            setTimeout(() => setMessage(''), 3000);
        }else{
        setMessage(`Has comprado ${quantity} unidades de ${beer.name}`);
        setTimeout(() => setMessage(''), 3000);
        }
    }

    //Muestro cant de likes
    const handleLike = () => {
        if(liked){
            setLikes(likes -1);
        }else{
            setLikes(likes + 1);
        }
        setLiked(!liked);
    }

    return (
        <div className="beer-card">
            <div className="beer-image-container">
                <img 
                src={beer.label} 
                alt={`Foto de ${beer.name}`} 
                className="beer-image"
                />
            </div>
            <div className="beer-info">
                <h3 className="beer-name">{beer.name}</h3>
                <div>
                    <p className="beer-details"><span>Tipo:</span>{beer.type}</p>
                    <p className="beer-details"><span>ABV:</span>{beer.abv}%</p>
                </div>
                {/*Control de cantidad*/}
                <div className="quantity-control">
                    <span className="quantity-label">Cantidad:</span>
                    {/*TO DO: Implementarlo con un solo handle*/}
                    <button onClick={() => setQuantity(quantity -1)} className="quantity-button quantity-button-left">-</button>
                    {/*Contador*/}
                    <span className="quantity-display">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="quantity-button quantity-button-right">+</button>
                </div>

                {/* Me gusta */}
                {/* TO DO: Implementar el me gusta (heart)
                Cambiar el color del heart si esta likeado
                Mostrar la cantidad de likes */}
                <div className="heart-button">
                {/*Le digo si esta el like le pongo el estilo y sino vacio (no estilo) */}
                <button onClick={handleLike} className={`heart-button ${liked ? 'liked' : ''}`}>
                    {/* Aca le digo que si tiene el like va pintado el corazon y sino no va ointado el corazon */}
                    <FontAwesomeIcon icon={liked ? solidHeart : regularHeart} />
                </button> 
                <span>{likes}</span>
                </div>

                {/*Boton de compra */}
                <button onClick={handleBuy} className="buy-button">Comprar</button>

                {/*VER*/}
                {/*Mensaje de confirmación*/}
                {/*Si esto es falso lo del div no se ejecuta ni se muestra
                y si es verdadero se ejcuta y se muestra*/}
                {
                    message && 
                    (<div className="success-message">
                        {message}
                    </div>) 
                }
            </div>
        </div>
    );
}