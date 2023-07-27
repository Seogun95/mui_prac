import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyles />
    <CssBaseline />
    <App />
  </>,
);
