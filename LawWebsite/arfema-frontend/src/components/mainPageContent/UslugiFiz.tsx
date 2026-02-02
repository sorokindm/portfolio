import { useEffect, useState } from "react";
import PriceTableDto from "../../util/dto/PriceTableDto";
import CategoryDto from "../../util/dto/CategoryDto";
import TableEntryDto from "../../util/dto/TableEntryDto";
import CategoryLinkDto from "../../util/dto/CategoryLinkDto";
import TableEntryLinkDto from "../../util/dto/TableEntryLinkDto";
import { Helmet } from "react-helmet";

export default UslugiFiz;

function UslugiFiz() {
  const [fizTable, setTableData] = useState<PriceTableDto>();

  const regex: RegExp = /\?\d/;

  useEffect(() => {
    fetch(
      import.meta.env.VITE_GET_PRICE_TABLE + "?enumTableType=" + "FIZ_PRICE",
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
          content="оказание услуг физическим лицам, юридические услуги физическим лицам, представление интересов физического лица в суде"
        />
        <meta name="title" content="Оказание услуг физическим лицам" />
        <title>Оказание услуг физическим лицам</title>
        <meta
          name="description"
          content="Оказание услуг физическим лицам, юридические консультации физических лиц, представление интересов физического лица в суде"
        />
      </Helmet>
      <div className="content-wrapper">
        <h2>Оказание услуг физическим лицам</h2>
        <p>
          В Юридическом Агентстве «Арфема» Вы можете получить следующие{" "}
          <strong>услуги для физических лиц</strong>:
        </p>
        <ul className="text-block">
          <li>
            <strong>
              <a
                href="/yuridicheskaya-konsultaciya-voronezh"
                title="Юридические услуги физическим лицам"
              >
                юридические консультации
              </a>
            </strong>{" "}
            по вопросам применения гражданского, трудового, земельного,
            семейного, жилищного, административного законодательства, а также по
            вопросам банкротства физических лиц;
          </li>
          <li>
            составление договоров (например,{" "}
            <strong>
              <a
                href="/oformlenie-dorovora-dareniya"
                title="Составить договор дарения"
              >
                договор дарения
              </a>
            </strong>{" "}
            или{" "}
            <strong>
              <a
                href="/oformlenie-dogovora-kupli-prodazhi"
                title="Оформить договор купли-продажи"
              >
                договор купли-продажи
              </a>
            </strong>
            ), правовая экспертиза документов на предмет их соответствия
            действующему законодательству;
          </li>
          <li>
            <strong>
              <a
                href="/iskovoye-zayavlenie"
                title="Составить исковое заявление в суд"
              >
                составление исковых заявлений
              </a>
              ,
            </strong>{" "}
            жалоб, претензий;
          </li>
          <li>
            <strong>
              <a
                href="/predstavlenie-interesov-v-sude"
                title="Представление интересов физических лиц в суде"
              >
                представление интересов физического лица в суде
              </a>
            </strong>{" "}
            и органах государственной власти;
          </li>
          <li>
            <strong>
              <a
                href="/oformlenie-nedvizhimosti"
                title="Оформление недвижимости физических лиц"
              >
                оформление недвижимости
              </a>
            </strong>
            .
          </li>
        </ul>
        <p>
          Наиболее подробно с видами оказываемых{" "}
          <strong>юридических услуг физическим лицам</strong> и расценками на
          них Вы можете ознакомиться ниже.
        </p>
        <p className="text-block">
          Мы расскажем Вам как быть, если Вас незаконно уволили или Вы купили
          некачественный товар.
        </p>
        <p className="text-block">
          Мы поможем взыскать алименты на содержание детей или урегулировать
          конфликт с соседями.
        </p>
        <p className="text-block">
          Мы составим договор любой сложности, чтобы Вы были уверены в
          предпринимаемых шагах.
        </p>
        <p className="text-block">
          Мы защитим в суде Ваши права и законные интересы.
        </p>
        <p className="text-block">
          Мы не останемся в стороне от Ваших трудностей и сделаем всё возможное,
          чтобы Вам помочь!
        </p>
        <h3 className="center">Услуги физическим лицам</h3>

        {fizTable ? (
          <>
            <h2 className="center">Услуги для физических лиц</h2>
            <table>
              <tbody>
                <tr>
                  <th> № </th>
                  <th> Наименование услуги </th>
                  <th> Стоимость, руб. </th>
                </tr>
                {fizTable
                  ? fizTable.categoryDtoList.map((category) => (
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
