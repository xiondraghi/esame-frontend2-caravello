import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import Shell from './components/Shell.tsx';
import MovieListPage from './pages/MovieListPage.tsx';
import MovieDetailPage from './pages/MovieDetailPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shell />}>
          <Route index element={<MovieListPage />} />
          <Route path="movies/:id" element={<MovieDetailPage />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
