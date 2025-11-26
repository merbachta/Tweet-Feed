//Usuario pulsa "Like" en un Tweet
//      ↓
//Tweet.jsx ejecuta onLike()
//      ↓
//TweetList.jsx pasa onLike(tweet.id) al App.jsx
//      ↓
//App.jsx actualiza el estado global (tweets)
//      ↓
//React vuelve a renderizar TweetList.jsx

import "./App"
import '../styles/Tweet.css'


export default function Tweet ({tweet, onDelete, onLike}){
    return (
        <div>
            <p>{tweet.content}</p>
            <p>{tweet.likes}</p>
            <div class="buttons">
                <button onClick={onLike}>❤️</button>
                <button onClick={onDelete}><b>Borrar</b></button>
            </div>
        </div>
    )
}

