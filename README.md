# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

[Usuario] escribe tweet → CrearTweet.submit()
           │
           ▼
LogicTweets.addTweet(content) → actualiza tweets (estado)
           │
           ▼
TweetList recibe tweets
           │
           ▼
Tweet renderizado para cada tweet
           │
           ├─ Botón Like → toggleLike(id) → actualiza tweets
           └─ Botón Delete → deleteTweet(id) → actualiza tweets
           │
           ▼
useEffect guarda tweets en localStorage

--------------------------------------------------------------------------------------------------------------------------------

LIKES AND DELETES :

Usuario pulsa "Like" en un Tweet
      ↓
Tweet.jsx ejecuta onLike()
      ↓
TweetList.jsx pasa onLike(tweet.id) al App.jsx
      ↓
App.jsx actualiza el estado global (tweets)
      ↓
React vuelve a renderizar TweetList.jsx
