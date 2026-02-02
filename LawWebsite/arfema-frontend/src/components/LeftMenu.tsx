import SearchForm from "./searchForm/SearchForm";

export default LeftMenu;

interface Props {
  visibility:boolean;
}

function LeftMenu({visibility}:Props) {
  return (
    <>
    <div className={visibility?"left-menu visible":"left-menu"}>
      <nav>
        <ul>
          <li className="left-menu-item-li">
            <a className="left-menu-item" href="/pomoshch-prizyvnikam">
              <span>Помощь призывникам&nbsp;&nbsp;</span>
            </a>
          </li>

          <li className="left-menu-item-li">
            <a  className="left-menu-item" href="/yuridicheskaya-konsultaciya-voronezh">
              <span>Юридическая консультация&nbsp;</span>
            </a>
          </li>

          <li className="left-menu-item-li">
            <a className="left-menu-item" href="/sostavlenie-dokumentov">
              <span>Составление документов&nbsp;</span>
            </a>
          </li>

          <li className="left-menu-item-li">
            <a className="left-menu-item" href="/oformlenie-dorovora-dareniya">
              <span>Договор дарения&nbsp;&nbsp;</span>
            </a>
          </li>

          <li className="left-menu-item-li">
            <a className="left-menu-item" href="/oformlenie-dogovora-kupli-prodazhi">
              <span>Договор купли-продажи&nbsp;</span>
            </a>
          </li>

          <li className="left-menu-item-li">
            <a className="left-menu-item" href="/iskovoye-zayavlenie">
              <span>Исковое заявление</span>
            </a>
          </li>

          <li className="left-menu-item-li">
            <a className="left-menu-item" href="/predstavlenie-interesov-v-sude">
              <span>Представление интересов в суде</span>
            </a>
          </li>

          <li className="left-menu-item-li">
            <a className="left-menu-item" href="/rastorzhenie-braka-i-razdel-imushchestva-suprugov">
              <span>Расторжение брака</span>
            </a>
          </li>

          <li className="left-menu-item-li">
            <a className="left-menu-item" href="/trudovye-spory">
              <span>Трудовые споры</span>
            </a>
          </li>

          <li className="left-menu-item-li">
            <a className="left-menu-item" href="/zhilishchny-yurist">
              <span>Жилищные споры</span>
            </a>
          </li>

          <li className="left-menu-item-li">
            <a className="left-menu-item" href="/oformlenie-nedvizhimosti">
              <span>Оформление недвижимости&nbsp;</span>
            </a>
          </li>

          <li className="left-menu-item-li">
            <a className="left-menu-item" href="/oformlenie-zemelnogo-uchastka">
              <span>Оформление земельного участка</span>
            </a>
          </li>

          <li className="left-menu-item-li">
            <a className="left-menu-item" href="/registratsiya-yuridicheskih-lits">
              <span>Регистрация ООО</span>
            </a>
          </li>

          <li className="left-menu-item-li">
            <a className="left-menu-item" href="/registratsiya-individualnogo-predprinimatelya">
              <span>Регистрация ИП&nbsp;</span>
            </a>
          </li>

          <li className="left-menu-item-li">
            <a className="left-menu-item" href="/soprovozhdenie-organizatsii">
              <span>Сопровождение организации</span>
            </a>
          </li>
        </ul>
      </nav>
      <SearchForm/>
      </div>
    </>
  );
}
