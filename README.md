---

## Flujo de Tweets

### Creación de un Tweet

```mermaid
flowchart TD
    A[Usuario escribe tweet] --> B[CrearTweet.submit()]
    B --> C[LogicTweets.addTweet(content) → actualiza tweets (estado)]
    C --> D[TweetList recibe tweets]
    D --> E[Tweet renderizado para cada tweet]
    E --> F[Botón Like → toggleLike(id) → actualiza tweets]
    E --> G[Botón Delete → deleteTweet(id) → actualiza tweets]
    D --> H[useEffect guarda tweets en localStorage]
```

---

### Likes y Deletes

```mermaid
flowchart TD
    A[Usuario pulsa "Like" en un Tweet] --> B[Tweet.jsx ejecuta onLike()]
    B --> C[TweetList.jsx pasa onLike(tweet.id) al App.jsx]
    C --> D[App.jsx actualiza el estado global (tweets)]
    D --> E[React vuelve a renderizar TweetList.jsx]
```

---

