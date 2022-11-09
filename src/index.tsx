import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import App from '@/App';
import { theme } from '@/theme';
import { store } from '@/store';
import ErrorBoundary from '@/components/ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </ErrorBoundary>
);
