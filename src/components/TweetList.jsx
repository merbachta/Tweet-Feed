//Recibe array de los tweets creados desde App.jsx y los presenta

import App from "./App.jsx";
import Tweet from './Tweet.jsx'

export default function TweetList({tweets, onDelete, onLike}){
    if (tweets.length === 0) {
        return <p>No hay tweets aun. Se el primero!</p>
    }
    
    return(
        <ul>
            {tweets.map((tweet) =>(
            <li>
                <Tweet
                tweet = {tweet} 
                onDelete={()=> onDelete(tweet.id)}
                onLike={()=> onLike(tweet.id)}/>
            </li>
            ))}
        </ul>
    );
};