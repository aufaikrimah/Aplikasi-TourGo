import * as React from "react";
import { Link } from 'react-router-dom';

function Header() {

  return (
    <div class="wrapper">
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <Link class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></Link>
                </li>
            </ul>

        </nav>

        </div>

     );
 }


export default Header;


