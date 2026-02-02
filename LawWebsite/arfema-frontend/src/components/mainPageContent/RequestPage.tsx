import { Helmet } from "react-helmet";
import CustomerRequestForm from "../customerRequest/CustomerRequestForm";

export default RequestPage;

function RequestPage() {
  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content="задать вопрос юристу, задать вопрос юристу онлайн, задать вопрос юристу бесплатно, задать вопрос юристу онлайн бесплатно"
        />
        <meta name="title" content="Задать вопрос юристу" />
        <title>Задать вопрос юристу</title>
        <meta
          name="description"
          content="Задай вопрос юристу онлайн бесплатно на сайте юридического агентства Арфема"
        />
      </Helmet>
      <div className="content-wrapper">
        <h2>Задать вопрос юристу онлайн</h2>
        <p>
          На сайте Юридического Агентства «Арфема» Вам предоставлена возможность
          получить такую услугу, как{" "}
          <strong>юридическая консультация онлайн</strong>.
        </p>
        <p className="text-block">
          Если Вам срочно нужна помощь юриста в Воронеже – на этой странице Вы
          можете&nbsp;задать вопрос юристу онлайн. Наши юристы оперативно
          рассмотрят Ваш вопрос и предоставят{" "}
          <strong>краткую бесплатную юридическую консультацию</strong>.
        </p>
        <p>
          Вы сможете задать&nbsp;
          <strong>бесплатный вопрос юристу без регистрации</strong>&nbsp;об
          интересующих Вас вопросах в области права, заполнив форму и указав Ваш
          контактный e-mail для обратной связи.
        </p>

        <CustomerRequestForm />

        <p className="red">
          <b>* поля обязательны для заполнения</b>
        </p>
        <p>
          Мы внимательно изучим Вашу проблему и постараемся оказать Вам
          квалифицированную юридическую помощь.
        </p>
        <p>
          Если Вам будет недостаточно предоставленного на Ваш вопрос ответа и
          потребуется более подробная консультация, Вы всегда сможете записаться
          к нашим юристам на{" "}
          <a
            href="/yuridicheskaya-konsultaciya-voronezh"
            title="Юридическая консультация онлайн Воронеж"
          >
            <strong>юридическую консультацию</strong>
          </a>{" "}
          по телефонам:
        </p>
        <p className="center">
          <span className="tel-icon-1">☎</span>{" "}
          <strong>
            <a href="tel:+74732629462" rel="noindex, nofollow">
              (473) 262-94-62
            </a>
          </strong>{" "}
          <span className="tel-icon-2">☎</span>{" "}
          <strong>
            <a href="tel:+74732629463" rel="noindex, nofollow">
              (473) 262-94-63
            </a>
          </strong>
        </p>
      </div>
    </>
  );
}
