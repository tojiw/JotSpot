import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright Waqas Faraz ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
