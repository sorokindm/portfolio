import { useEffect, useState } from "react";
import PriceTableDto from "../../util/dto/PriceTableDto";
import CategoryDto from "../../util/dto/CategoryDto";
import TableEntryDto from "../../util/dto/TableEntryDto";
import CategoryLinkDto from "../../util/dto/CategoryLinkDto";
import TableEntryLinkDto from "../../util/dto/TableEntryLinkDto";
import { Helmet } from "react-helmet";

export default IpRegister;

function IpRegister() {
  const [tableData, setTableData] = useState<PriceTableDto>();

  const regex: RegExp = /\?\d/;

  useEffect(() => {
    fetch(
      import.meta.env.VITE_GET_PRICE_TABLE + "?enumTableType=" + "REG_IP",
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

    return <strong>{link.text}</strong>;
  }

  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content="регистрация ип, регистрация ип воронеж, государственная регистрация ип, регистрация индивидуального предпринимателя, государственная регистрация индивидуальных предпринимателей"
        />
        <meta name="title" content="Регистрация в качестве индивидуального предпринимателя" />
        <title>Регистрация в качестве индивидуального предпринимателя</title>
        <meta
          name="description"
          content="Регистрация индивидуального предпринимателя (регистрация ИП) от 2500 рублей и долгожданное открытие Вашего бизнеса (или прекращение деятельности ИП)"
        />
      </Helmet>
      <div className="content-wrapper min-indent">
        <h2>Регистрация в качестве индивидуального предпринимателя</h2>
        <p>
          Одной из наиболее популярных форм организации малого и среднего
          бизнеса в России является предпринимательская деятельность в качестве{" "}
          <strong>и</strong>
          <strong>ндивидуального предпринимателя</strong>.<br />
          Задумывая свой бизнес, граждане зачастую останавливают свой выбор на
          деятельности в качестве ИП по следующим причинам:
        </p>
        <ol>
          <li>
            Простая процедура создания и{" "}
            <strong>
              государственная регистрация индивидуальных предпринимателей
            </strong>
            ;
          </li>
          <li>
            Затраты на ведение деятельности в качестве ИП гораздо ниже, чем для
            юридических лиц;
          </li>
          <li>Упрощенный порядок ведения учета и отчетности;</li>
          <li>
            Упрощенное <strong>прекращение деятельности ИП</strong>.
          </li>
        </ol>
        <p>
          Но и при всей своей простоте{" "}
          <strong>регистрация индивидуального предпринимателя</strong> требует
          участия профессионалов.
        </p>
        <p>
          Часто ли Вы, думая о создании собственного бизнеса, задумывались о
          том, какие <strong>документы для регистрации ИП</strong> нужно будет
          оформить, где и как это лучше и выгоднее для себя сделать? Специалисты
          нашего Юридического Агентства быстро и качественно подготовят
          документы для <strong>государственной регистрации ИП</strong> или для
          того, чтобы оформить <strong>прекращение деятельности ИП</strong>.
        </p>
        <p>
          Обратитесь к нам, и Вы без лишних временных и материальных затрат
          станете полноправным участником экономических отношений и обладателем
          собственного бизнеса!
        </p>
        <h3>Стоимость услуг</h3>

        {tableData ? (
          <table>
            <tbody>
              <tr>
                <th>Услуга</th>
                <th>Содержание услуги</th>
                <th>Стоимость, руб.</th>
              </tr>
              {tableData.categoryDtoList.map((category) => (
                <tr>
                  <td>{resolveTitle(category)}</td>
                  <td>
                    <ul>
                      {category.entries.map((entry) => (
                        <li>{resolveTitle(entry)}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="center">
                    <strong>{category.entries[0].price}</strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="loader" />
        )}

        <p>
          <span className="small-font">
            Накладные расходы, связанные с регистрацией физического лица в
            качестве индивидуального предпринимателя и открытием расчетного
            счета (госпошлина, оплата услуг нотариуса по оформлению
            доверенностей, заверению подписей, комиссия банка по открытию
            расчетного счета и т.п.) не входят в стоимость услуг и оплачиваются
            Клиентом отдельно в полном объеме или компенсируются Клиентом
            Исполнителю на основании первичных документов, подтверждающих
            произведенные затраты.
          </span>
        </p>
      </div>
    </>
  );
}
