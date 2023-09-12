import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import Homews from "./wisatawan/Homews";


import "./css/main.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import 'bootstrap/dist/css/bootstrap.min.css';

import '@mui/material';
import '@mui/styled-engine';
import '@mui/styled-engine-sc';
import '@mui/icons-material';

import '@fortawesome/fontawesome-free/css/all.css';
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-regular-svg-icons";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFileCircleCheck, faIdCard, faMoneyCheckDollar, faFileSignature, faThumbsUp, faRoute, faListCheck, faCircleCheck, faListOl, faStar, faHeadset, faCircleDollarToSlot, faBackward} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTiktok, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';

library.add(faFileCircleCheck, faIdCard, faMoneyCheckDollar, faFileSignature, faFacebookF, faBackward, faInstagram, faTiktok, faTwitter, faYoutube, faThumbsUp, faRoute, faListCheck, faCircleCheck, faListOl, faStar, faHeadset, faCircleDollarToSlot)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);


