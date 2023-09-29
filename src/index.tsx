// This must be the first line in src/index.js
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import React, {Suspense} from 'react';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import router from './routes';
import store from './store';
import '@/less/global.less';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    </Suspense>
  </React.StrictMode>
);
