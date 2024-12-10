import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Add theme detection
const root = document.documentElement;
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
const updateTheme = (e: MediaQueryListEvent | MediaQueryList) => {
  root.classList.remove('light', 'dark');
  root.classList.add(e.matches ? 'dark' : 'light');
};

darkModeMediaQuery.addEventListener('change', updateTheme);
updateTheme(darkModeMediaQuery);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);