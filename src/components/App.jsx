//Eso es el Feed
//En el vamos a agregar primero el formulario que acabamos de hacer osea CrearTweet.jsx
//La lista de todos los tweets que definimos en TweetList.jsx
//Y el Tweet.jsx individual donde tenemos opcion de like y borrar!

import CrearTweet from "./CrearTweet";
import TweetList from './TweetList'
import {useState, useEffect} from "react";

//PARA RECUPERAR LOS TWEETS DE CREARTWEET EN UN ARRAY
export default function LogicTweets() {
    const [tweets, setTweets] = useState([]); //Es que empezamos con un array vacio
    //Ahora creamos fucnion para ir agregando tweets al array
    const addTweet = (content) => { //En JavaScript, las funciones normales se escriben en camelCase, es decir, minuscula inicial
        const newTweet = {
            id: crypto.randomUUID(),
            content,
            likes: 0,
            fecha: new Date()
        }; //Aqui defino un objeto/diccionario donde voy agregar la info que extrego de CrearTweet. 
        setTweets([newTweet,...tweets]); //... es el spread operatorm su funcion es expandir el array. Para no crear
        //un nuevo array dentro del array!!! MUY IMPORTANTE 
        //Después de esta línea, el estado tweets tiene el nuevo tweet al principio, seguido de todos los anteriores.
    };

    //FUNCION PARA BORRAR TWEETS
    const deleteTweet= (id) => {
        setTweets (prev => prev.filter (t => t.id !==id)) 
        //prev presenta el estado anterior
        //filter(...) → devuelve un nuevo array con solo los elementos que cumplen la condición.
        //t.id !== id → significa: "mantener todos los tweets cuyo id no sea el que quiero borrar".
        // t no se define explicitamente!!! se usa FUNCION FLECHA que asigna t a cada elemento del array con .map()
        //recibe id del tweet que se quiere borrar y actualiza el estado de tweet
    };

    //FUNCION PARA DAR LIKE
    const toggleLike = (id) => {
        setTweets(prev =>
            prev.map(t => 
        t.id === id ? {...t, likes: t.likes +1}:t )
        //t después de los dos puntos (:) → valor si es falso osea t.id === id es LA CONDICION
        // ? es el verdadero y el : es el falso. ? es como el if y : es el else
        //en el objeto habiamos definido like:0, ahora le agregamos mas uno
        // lo que hace es que las caracteristicas previas a like se mantienen luego cambiamos el likes luego lo que viene
        //despues pues se mantiene igual
        );
    };


    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("tweets")); // lee los tweets del navegador
        if (saved) setTweets(saved); // si había tweets guardados, los ponemos en el estado
        }, []);
        //Esto solo se ejecuta una vez al cargar la página.
        //Recupera los tweets que el usuario había guardado antes.
        //JSON.parse convierte el string guardado en un array de objetos.


    useEffect(() => {
        localStorage.setItem("tweets", JSON.stringify(tweets)); // guarda los tweets actuales
        }, [tweets]);
        //Esto se ejecuta cada vez que cambia tweets.
        //JSON.stringify convierte el array de tweets en un string para guardarlo.
        //Así, aunque cierres o recargues la página, los tweets siguen ahí.
    
    return (
        <div>
            <CrearTweet onAddTweet={addTweet} />
            <TweetList tweets={tweets} onDelete={deleteTweet} onLike={toggleLike} />
        </div>
    )
    //AddTweet es una prop (propiedad) que pasas al componente <CrearTweet>.
    //Esto permite que el componente hijo llame a la función AddTweet del padre cuando quieras agregar un tweet.

}



