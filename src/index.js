import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
//import reducers

import userReducer from './features/user.js';

//redux imports
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
