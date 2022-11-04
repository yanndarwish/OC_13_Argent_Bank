import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';

import './App.css'
import './components/Header/Header.css'
import './components/Hero/Hero.css'
import './components/Feature-Item/Feature-Item.css'
import './components/Sign-In-Form/SignInForm.css'
import './components/Footer/Footer.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

