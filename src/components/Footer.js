function Footer() {
  return (
    <footer className="footer">
      <a href="#home" className="brand">
        PK<span>.</span>
      </a>

      <p>
        Designed & developed by Pranav Kamble.
      </p>

      <a href="#home" className="back-to-top">
        Back to top ↑
      </a>

      <p className="copyright">
        © {new Date().getFullYear()} Pranav Kamble. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;