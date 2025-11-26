import './App'
import {useState} from "react";


export default function Tweet ({onAddTweet}) {
    const [content, setContent] = useState("");

    const handleTweet = (e) => { 
        //e es simplemente el nombre estandar que le damos al eventp que ocurre cuando se ejecuta la funcion
        // es el objeto de evento que React te pasa automaticamente cuando el usuario hace algo! :
        // En este caso clic boton despues de escribir un tweet. 
        e.preventDefault();

        if (content.trim() ==="" ) return; //trim() elimina espacios al principio y al final.
        if(content.length > 280) return; 
        // Eso basicamente si el contenido esta vacio pues return que es salir de la funcion
        onAddTweet(content); // Esto es despues se va a recibir por otro fichero, el componenente padre
        //Entonces cuando se da al boton tweet lo que hacemos es enviarle a App.jsx el; contenido del input. Es un PROP
        setContent("");//Despues de todo se vuelve a vaciar el input

        };

        
        
    return (
        <>
            <form onSubmit = {handleTweet}>
                <label htmlFor="tweet">Write your tweet (max 280 characters)</label>
                <textarea 
                value={content} //El contenido del textarea siempre será igual a la variable texto que tiene React
                onChange={(e) => setContent(e.target.value)} //e..currentTarget.value coge el valor donde esta el hanfler osea
                //por ejemplo un onClick... e.target.value seria el elemento exacto donde ocurre el evento, en formulario puede
                //ser un button tipo submit
                placeholder="Share your thoughts" 
                id="tweet" 
                name="tweet" 
                rows="8" 
                maxlength="280"/> 
                <button type="submit" class="post"> Tweet </button>

            </form>
        </>
)
}


