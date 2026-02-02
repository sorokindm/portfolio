export default Footer;

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <div className="footer-line">
          <strong>Юридическое агентство «Арфема»</strong>
        </div>
        <div className="footer-line">
          <span className="tel-icon-1">☎</span>{" "}
          <strong>
            <a href="tel:+74732629462" rel="noindex, nofollow">
              262-94-62
            </a>
          </strong>{" "}
          <span className="tel-icon-2">☎</span>{" "}
          <strong>
            <a href="tel:+74732629463" rel="noindex, nofollow">
              262-94-63
            </a>
          </strong>
        </div>
        <div className="footer-line">
          <strong>
            <a href="/kontakty">г. Воронеж, Ленинский пр-т, 25/1</a>
          </strong>
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-line">
          © <strong>Юридическое агентство «Арфема»</strong>. Все права защищены.
        </div>
      </div>
    </div>
  );
}
