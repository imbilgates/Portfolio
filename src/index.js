import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './contexts/theme';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
