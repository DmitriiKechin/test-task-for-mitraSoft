import { Routes, Route } from 'react-router-dom';
import { AboutMePage } from '../Pages/AboutMePage';
import { GalleryPage } from '../Pages/GalleryPage';
import { NotFoundPage } from '../Pages/NotFoundPage';
import { PhotoPage } from '../Pages/PhotoPage';
import { Layout } from './Layout';

export function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<GalleryPage />} />
        <Route path="about" element={<AboutMePage />} />
      </Route>
      <Route path="/photos/:id" element={<PhotoPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
