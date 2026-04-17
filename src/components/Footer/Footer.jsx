import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; {new Date().getFullYear()} Gamesub Dex | Site design by Jacob
        Osborn | Data sourced from PSPrices.com
      </p>
    </footer>
  );
}

export default Footer;
