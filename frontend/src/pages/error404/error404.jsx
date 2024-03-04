import { Link } from "react-router-dom";
import React from 'react';
import logo from "../../../public/logo.png"
import IconBack from "../../icons/IconBack";
import './error404.css';
import error404 from '../../../public/error404.png';

const Error404 = () => {
  return (
    <>
      <div className="bg-main-dark p-5 flex justify-between items-center">
        <Link to="/">
          <span>
            <IconBack />
          </span>
        </Link>
        <img src={logo} alt="logo de NEXOSPORT" />
      </div>
      <div className="error-container flex flex-col items-center justify-center">
        <h1 className="titulo">404</h1>
        <p className="texto">Lo siento, la página que estás buscando no se pudo encontrar.</p>
        <img className="imagen" src={error404} alt="Error 404" />
      </div>
    </>
  );
};

export default Error404