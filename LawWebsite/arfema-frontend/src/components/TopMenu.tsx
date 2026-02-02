export default TopMenu;

interface Props {
  visibility:boolean;
}

function TopMenu({visibility}:Props) {
 
  return (
    <>
      <nav className={visibility?"top-menu visible":"top-menu"}>
        <ul>
          <li className="top-menu-item-li">
            <a className="top-menu-item" href="http://arfema.ru/">
              <span>Главная</span>
            </a>
          </li>
          <li className="top-menu-item-li">
            <a href="/novosti" className="top-menu-item">
              <span>Новости</span>
            </a>
          </li>

          <li className="top-menu-item-li">
            <a className="top-menu-item" href="/praktika">
              <span>Практика</span>
            </a>
          </li>
          <li className="top-menu-item-li">
            <a
              className="top-menu-item"
              href="/okazanie-uslug-fizicheskim-litsam"
            >
              <span>Услуги для физических лиц</span>
            </a>
          </li>
          <li className="top-menu-item-li">
            <a
              className="top-menu-item"
              href="/okazanie-uslug-yuridicheskim-litsam"
            >
              <span>Услуги для юридических лиц</span>
            </a>
          </li>
          <li className="top-menu-item-li">
            <a className="top-menu-item" href="/price-list">
              <span>Цены</span>
            </a>
          </li>
          <li className="top-menu-item-li">
            <a className="top-menu-item" href="/zaday-vopros-yuristu-online">
              <span>Задать вопрос юристу</span>
            </a>
          </li>
          <li className="top-menu-item-li">
            <a className="top-menu-item" href="/kontakty">
              <span>Контакты</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
