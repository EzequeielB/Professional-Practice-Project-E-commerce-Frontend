import React from "react";
import styles from "./Footer.module.css";
import Column from "./Column";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  const sectionShop = [
    {
      title: "Compras",
      links: [
        { name: "Remeras", url: "#" },
        { name: "Pantalones", url: "#" },
        { name: "Acesorios", url: "#" },
        { name: "Marcas", url: "#" },
      ],
    },
  ];
  const sectionAbout = [
    {
      title: "About",
      links: [
        { name: "Quienes Somos", url: "#" },
        { name: "Compras", url: "#" },
        { name: "Envios", url: "#" },
        { name: "Cambios", url: "#" },
        { name: "Marcas", url: "#" },
      ],
    },
  ];
  const sectionInformation = [
    {
      title: "Información",
      links: [
        { name: "Contacto", url: "#" },
        { name: "Términos de servicio", url: "#" },
        { name: "Política de privacidad", url: "#" },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.columnsContainer}>
        <Column section={sectionShop} />
        <Column section={sectionAbout} />
        <Column section={sectionInformation} />
      </div>
      <div className={styles.socialMediaContainer}>
        <h1>Seguinos</h1>
        <div className={styles.socialIcons}>
          <a href="https://facebook.com">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com">
            <FaInstagram />
          </a>
          <a href="https://twitter.com">
            <FaTwitter />
          </a>
          <a href="https://youtube.com">
            <FaYoutube />
          </a>
          <a href="https://tiktok.com">
            <FaTiktok />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
