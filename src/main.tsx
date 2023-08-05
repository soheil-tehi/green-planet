import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.scss';


const qruryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <QueryClientProvider client={qruryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>,
)
