import { Helmet } from "react-helmet";

export default Contacts;

function Contacts() {
  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content="контакты, юридическое агентство арфема, юридический адрес воронеж, юридическая консультация воронеж адрес, адреса юристов, юридическая улица, юридические консультации воронеж левый берег, юрист воронеж левый берег"
        />
        <meta name="title" content="Адрес юридической консультации в Воронеже" />
        <title>Адрес юридической консультации в Воронеже</title>
        <meta
          name="description"
          content="Контакты ООО «Арфема» - адрес юридических услуг в Воронеже (телефон, факс, e-mail, адрес, как проехать, маршруты транспорта)"
        />
      </Helmet>
      <div className="content-wrapper">
        <h2>Контактная информация</h2>
        <p>
          Получить правовую консультацию или другие виды юридических услуг в
          Воронеже Вы можете, обратившись за помощью в наше Юридическое
          Агентство.
        </p>
        <dl itemScope itemType="http://schema.org/LocalBusiness">
          <dt>Наименование организации:</dt>
          <dd itemProp="name">Юридическое агентство «Арфема»</dd>
          <br />
          <br />
          <dt>Телефон:</dt>
          <dd>
            ☎{" "}
            <a href="tel:+74732629462" rel="noindex, nofollow">
              <strong itemProp="telephone">+7 (473) 262-94-62</strong>
            </a>{" "}
            ☎{" "}
            <a href="tel:+74732629463" rel="noindex, nofollow">
              <strong itemProp="telephone">+7 (473) 262-94-63</strong>
            </a>
          </dd>
          <br />
          <br />
          <dt>Факс:</dt>
          <dd itemProp="faxNumber">+7 (473) 262-94-63</dd>
          <br />
          <br />
          <dt>e-mail:</dt>
          <dd>
            <a
              href="mailto:arfema@mail.ru"
              title="Задать вопрос юристу в юридическое агентство Арфема"
            >
              <strong itemProp="email">arfema@mail.ru</strong>
            </a>
          </dd>
          <br />
          <br />
          <dt>Адрес:</dt>
          <dd
            itemScope
            itemType="http://schema.org/PostalAddress"
            itemProp="address"
          >
            <strong>
              {" "}
              <span itemProp="postalCode">394029</span>,{" "}
              <span itemProp="addressLocality">г. Воронеж</span>,{" "}
              <span itemProp="streetAddress">Ленинский проспект, д. 25/1</span>{" "}
              <span className="invisible" itemProp="addressRegion">
                Воронежская область
              </span>{" "}
              <span className="invisible" itemProp="addressCountry">
                RU
              </span>{" "}
            </strong>{" "}
            <br /> (Левый берег, остановка «Полины Осипенко», рядом с отделением
            «Сбербанка»)
          </dd>
          <br />
          <br />
          <dt>Режим работы:</dt>
          <dd>
            <span itemProp="openingHours">
              понедельник-четверг - с 10:00 до 18:00 (без перерыва)
            </span>{" "}
            <br />
            <span itemProp="openingHours">
              пятница - с 10:00 до 16:45 (без перерыва)
            </span>{" "}
            <br />
            суббота, воскресенье - выходные дни
          </dd>
          <br />
          <br />
          <dt>До нашего офиса можно добраться следующим транспортом:</dt>
          <dd className="transport">
            автобусы № 1НВ, 1НС <br />
            троллейбусы № 1, 4, 11 <br /> ПАЗы № 11, 14в, 16в, 34, 65,120в, 121,
            122, 136в <br /> маршрутные такси № 20, 77, 77в, 100, 104, 1кс, 1кв
          </dd>
        </dl>
        <p>
          <a
            href="http://2gis.ru/voronezh/firm/4363390420218379/center/39.237499237060554,51.644182225867056/zoom/17?utm_medium=widget-source&amp;utm_campaign=firmsonmap&amp;utm_source=bigMap"
            className="dg-widget-link"
          >
            Посмотреть на карте Воронежа
          </a>
        </p>

        <iframe
          frameBorder="no"
          className="map"
          src="http://widgets.2gis.com/widget?type=firmsonmap&amp;options=%7B%22pos%22%3A%7B%22lat%22%3A51.644182225867056%2C%22lon%22%3A39.237499237060554%2C%22zoom%22%3A17%7D%2C%22opt%22%3A%7B%22city%22%3A%22voronezh%22%7D%2C%22org%22%3A%224363390420218379%22%7D"
        ></iframe>

        <dl>
          <dt>Юридические реквизиты организации:</dt>
          <dd>
            <strong>ООО «Арфема»</strong> <br /> ОГРН 1113668015130 <br /> ИНН
            3663086061 <br /> КПП 366301001
          </dd>
        </dl>
      </div>
    </>
  );
}
