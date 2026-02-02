import { useEffect, useState } from "react";
import PriceTableDto from "../../util/dto/PriceTableDto";
import CategoryDto from "../../util/dto/CategoryDto";
import CategoryLinkDto from "../../util/dto/CategoryLinkDto";
import TableEntryLinkDto from "../../util/dto/TableEntryLinkDto";
import TableEntryDto from "../../util/dto/TableEntryDto";
import { Helmet } from "react-helmet";

export default Prices;

function Prices() {
  const [fizTable, setFizTable] = useState<PriceTableDto>();
  const [urTable, setUrTable] = useState<PriceTableDto>();
  const [regTable, setRegTable] = useState<PriceTableDto>();

  const regex: RegExp = /\?\d/;

  useEffect(() => {
    function getTable(type: string) {
      fetch(
        import.meta.env.VITE_GET_PRICE_TABLE + "?enumTableType=" + type,
        getRequestOptions()
      ).then((x) => x.json().then((json) => setTableData(json, type)));
    }

    getTable("FIZ_PRICE");
    getTable("UR_PRICE");
    getTable("UR_IP_PRICE");
  }, []);

  function setTableData(data: PriceTableDto, type: string) {
    switch (type) {
      case "FIZ_PRICE":
        setFizTable(data);
        break;
      case "UR_PRICE":
        setUrTable(data);
        break;
      case "UR_IP_PRICE":
        setRegTable(data);
        break;
    }
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

  function getRequestOptions() {
    const requestOptions = {
      method: "POST",
    };
    return requestOptions;
  }

  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content="юридические услуги цены, юридические услуги цены воронеж, стоимость юридических услуг, стоимость юридических услуг воронеж"
        />
        <meta name="title" content="Цены на юридические услуги в Воронеже" />
        <title>Цены на юридические услуги в Воронеже</title>
        <meta
          name="description"
          content="Прайс-лист на юридические услуги ООО Арфема, цены на юридические услуги"
        />
      </Helmet>
      <div className="content-wrapper">
        <h2>Цены на юридические услуги в Воронеже</h2>
        <p>
          С примерными ценами на юридические услуги в городе Воронеже,
          оказываемые специалистами Юридического Агентства «Арфема», Вы можете
          ознакомиться ниже.
        </p>
        <p>
          Приведенный <strong>прайс-лист юридических услуг</strong> позволит Вам
          сориентироваться в многообразии видов предоставляемых юридических
          услуг и определить, какую именно услугу и по какой цене Вы можете
          получить в нашем Юридическом Агентстве.
        </p>
        <p>
          Более подробно о видах оказываемых услуг и о ценах на них Вас
          проконсультируют сотрудники Юридического Агентства «Арфема» по
          указанным в разделе «Контакты» телефонам или при личном приеме.
        </p>
        <p className="center">Будем рады Вам помочь!</p>

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
        ) : null}

        {regTable ? (
          <>
            <h2 className="center">
              Услуги по регистрации юридических лиц и ИП
            </h2>
            <table>
              <tbody>
                <tr>
                  <th> № </th>
                  <th> Наименование услуги </th>
                  <th> Стоимость, руб. </th>
                </tr>
                {regTable
                  ? regTable.categoryDtoList.map((category) => (
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
        ) : null}
      </div>
    </>
  );
}
