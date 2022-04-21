import React from 'react';
import { RoutesList } from './componets/RoutesList';

import { useAppSelector } from './hooks/redux.hooks';
import { usePhotosFetch } from './hooks/usePhotosFetch';

function App() {
  // const setPhotos = usePhotosFetch();
  // const { photos } = useAppSelector((state) => state.photosSlice);

  return (
    <RoutesList />
    // <>
    //   <div>Hello World</div>
    //   <button onClick={setPhotos}>click</button>
    //   <div>{JSON.stringify(photos)}</div>;
    // </>
  );
}

export default App;
