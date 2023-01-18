import { useEffect, useState } from "react";
import classes from './App.module.css'


function App() {
  const [photos, setPhotos] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
    .then(response => response.json())
    .then(json => setPhotos(json))
  }, [])
  console.log(photos);
  return (
    <div className="App">
      <ul className={classes.list_wrapper}>
        {photos.map(photo => {
          return <li key={photo.id}>
            <div className={classes.content_block}>
              <h2>{photo.title}</h2>
              <span>{photo.id}</span>
            </div>

            <img src={photo.thumbnailUrl} alt={photo.title} />
          </li>
        })}
      </ul>
    </div>
  );
}

export default App;
