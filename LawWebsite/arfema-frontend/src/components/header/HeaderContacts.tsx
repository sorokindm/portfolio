export default HeaderContacts;

function HeaderContacts() {
  return (
    <div className="header-contacts">
      <div className="phone-row">
        <span className="tel-icon tel-icon-1">☎</span>
        <a href="tel:+74732629462" rel="noindex, nofollow">
          <strong>(473) 262-94-62</strong>
        </a>
      </div>
      <div className="phone-row">
        <span className="tel-icon tel-icon-2">☎</span>
        <a href="tel:+74732629463" rel="noindex, nofollow">
          <strong>(473) 262-94-63</strong>
        </a>
      </div>
      <span>г. Воронеж, Ленинский пр-т, 25/1</span>
    </div>
  );
}
