import { useEffect, useState } from "react";
import CategoryDto from "../../util/dto/CategoryDto";
import CategoryLinkDto from "../../util/dto/CategoryLinkDto";
import PriceTableDto from "../../util/dto/PriceTableDto";
import TableEntryDto from "../../util/dto/TableEntryDto";
import TableEntryLinkDto from "../../util/dto/TableEntryLinkDto";
import { Helmet } from "react-helmet";

export default UslugiUr;

function UslugiUr() {
  const [urTable, setTableData] = useState<PriceTableDto>();

  const regex: RegExp = /\?\d/;

  useEffect(() => {
    fetch(
      import.meta.env.VITE_GET_PRICE_TABLE + "?enumTableType=" + "UR_PRICE",
      getRequestOptions()
    ).then((x) => x.json().then((json) => setTableData(json)));
  }, []);

  function getRequestOptions() {
    const requestOptions = {
      method: "POST",
    };
    return requestOptions;
  }

  function resolveTitle(source: CategoryDto | TableEntryDto) {
    return (
      <>
        {source.title.map((substring) =>
          regex.test(substring)
            ? resolvePlaceholder(
                Number.parseInt(substring.slice(1, substring.length)),
                source.links
              )
            : substring
        )}
      </>
    );
  }

  function resolvePlaceholder(
    index: number,
    links: CategoryLinkDto[] | TableEntryLinkDto[]
  ) {
    const link: CategoryLinkDto = links[index - 1];

    return (
      <a href={link.link} title={link.title}>
        {link.text}
      </a>
    );
  }

  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content="оказание услуг юридическим лицам, юридическое обслуживание юридических лиц воронеж, представление интересов юридических лиц"
        />
        <meta name="title" content="Оказание услуг юридическим лицам" />
        <title>Оказание услуг юридическим лицам</title>
        <meta
          name="description"
          content="Оказание услуг юридическим лицам, заключение договора на юридическое обслуживание юридических лиц в Воронеже, представление интересов юридических лиц в суде"
        />
      </Helmet>
      <div className="content-wrapper">
        <h2>Оказание услуг юридическим лицам</h2>
        <p>
          Юридическое Агентство «Арфема» предлагает организациям юридические
          услуги по{" "}
          <strong>
            <a
              href="/soprovozhdenie-organizatsii"
              title="Юридическое сопровождение сделок в Воронеже"
            >
              юридическому сопровождению бизнеса
            </a>
          </strong>
          , в частности:
        </p>
        <ul className="text-block">
          <li>
            <strong>
              <a
                href="/yuridicheskaya-konsultaciya-voronezh"
                title="Юридические услуги юридическим лицам"
              >
                правовые консультации
              </a>
            </strong>{" "}
            по вопросам, связанным с деятельностью Вашей организации, в том
            числе по вопросам налогообложения;
          </li>
          <li>
            <strong>анализ</strong> учредительных и внутренних{" "}
            <strong>документов</strong> организации и содействие в подготовке и
            правильном оформлении указанных документов, а также{" "}
            <strong>кадровый аудит;</strong>
          </li>
          <li>
            внесение изменений в учредительные документы и помощь в их
            государственной регистрации;
          </li>
          <li>
            <strong>исследование</strong> заключенных организацией{" "}
            <strong>договоров</strong> на предмет их соответствия требованиям
            действующего законодательства;
          </li>
          <li>
            участие в подготовке и заключении договоров с целью обеспечения
            соответствия заключаемых договоров требованиям действующего
            законодательства, соблюдения всех существенных интересов клиента и
            минимизации рисков правового и имущественного характера, вызываемых
            заключением таких договоров;
          </li>
          <li>
            <strong>претензионная работа</strong>, связанная с заключением,
            исполнением и расторжением договоров;
          </li>
          <li>
            <strong>
              <a
                href="/predstavlenie-interesov-v-sude"
                title="Представление интересов юридических лиц"
              >
                представление интересов юридического лица в суде
              </a>
            </strong>
            , арбитражных судах и государственных органах.
          </li>
        </ul>
        <p>
          Наиболее подробно с видами услуг, оказываемых юридическим лицам, и
          расценками на них Вы можете ознакомиться ниже.
        </p>
        <p>
          Вы можете обратиться к нам за юридической помощью разово или заключить
          с нами{" "}
          <strong>
            <a
              href="/soprovozhdenie-organizatsii"
              title="Договор на оказание услуг юрлицу"
            >
              договор оказания услуг юридическим лицам
            </a>
          </strong>{" "}
          (договор комплексного абонентского юридического обслуживания юрлица),
          в рамках которого Вы будете постоянно обеспечены квалифицированной
          поддержкой наших специалистов.
        </p>
        <p className="text-block">
          Сотрудничая с нами, Вы всегда будете в курсе официальных изменений в
          действующем законодательстве, сможете уберечь свой бизнес от
          нежелательных рисков и уверенно и законопослушно добиться успеха!
        </p>
        <h2>Услуги для юридических лиц</h2>

        {urTable ? (
          <>
            <h2 className="center">Услуги для юридических лиц</h2>
            <table>
              <tbody>
                <tr>
                  <th> № </th>
                  <th> Наименование услуги </th>
                  <th> Стоимость, руб. </th>
                </tr>
                {urTable
                  ? urTable.categoryDtoList.map((category) => (
                      <>
                        <tr>
                          <th>&nbsp;</th>
                          <th>
                            <p className="center">{resolveTitle(category)}</p>
                          </th>
                          <th>&nbsp;</th>
                        </tr>
                        {category.entries.map((entry) => (
                          <tr>
                            <td>{entry.rank}</td>
                            <td>{resolveTitle(entry)}</td>
                            <td>
                              <p>{entry.price}</p>
                            </td>
                          </tr>
                        ))}
                      </>
                    ))
                  : null}
              </tbody>
            </table>
          </>
        ) : (
          <div className="loader" />
        )}
      </div>
    </>
  );
}
