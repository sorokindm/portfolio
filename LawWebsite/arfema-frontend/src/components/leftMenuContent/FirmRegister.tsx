import { useEffect, useState } from "react";
import PriceTableDto from "../../util/dto/PriceTableDto";
import CategoryDto from "../../util/dto/CategoryDto";
import TableEntryDto from "../../util/dto/TableEntryDto";
import CategoryLinkDto from "../../util/dto/CategoryLinkDto";
import TableEntryLinkDto from "../../util/dto/TableEntryLinkDto";
import { Helmet } from "react-helmet";

export default FirmRegister;

function FirmRegister() {
  const [tableData, setTableData] = useState<PriceTableDto>();

  const regex: RegExp = /\?\d/;

  useEffect(() => {
    fetch(
      import.meta.env.VITE_GET_PRICE_TABLE + "?enumTableType=" + "REG_OOO",
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
          content="регистрация юридических лиц, государственная регистрация юридических лиц, регистрация ооо, регистрация оао, регистрация зао, регистрация ао"
        />
        <meta name="title" content="Регистрация ООО" />
        <title>Регистрация ООО</title>
        <meta
          name="description"
          content="Регистрация юридических лиц (ООО, ОАО, ЗАО) от 7000 рублей и долгожданное открытие вашего бизнеса без проволочек и нервотрепки!"
        />
      </Helmet>
      <div className="content-wrapper min-indent">
        <td valign="top">
          <h2>Регистрация ООО</h2>
          <p className="text-block">
            Зарегистрировать свой бизнес Вам помогут специалисты нашего
            Юридического Агентства.
          </p>
          <p>
            Мы предлагаем услуги по{" "}
            <strong>
              регистрации&nbsp;обществ с ограниченной ответственностью (ООО).
            </strong>
          </p>
          <p>Наши специалисты:</p>
          <ul>
            <li>
              дадут
              <strong>
                {" "}
                <a
                  href="/yuridicheskaya-konsultaciya-voronezh"
                  title="Юридическая консультация регистрация юрлиц регистрация ооо регистрация оао регистрация зао"
                >
                  юридическую консультацию
                </a>{" "}
              </strong>
              по вопросам определения наиболее подходящей
              организационно-правовой формы, оптимальной системы налогообложения
              и по всем другим вопросам, связанным с регистрацией и постановкой
              на налоговый учет как юридическое лицо;
            </li>
            <li>
              помогут Вам в выборе наименования для вашего юридического лица;
            </li>
            <li>
              подготовят все необходимые документы, например,{" "}
              <strong>документы для регистрации ООО</strong>;
            </li>
            <li>
              представят документы для регистрации юридического лица в
              Межрайонную ИФНС;
            </li>
            <li>
              получат документы о{" "}
              <strong>государственной регистрации юридических лиц</strong>,
              копии учредительных документов, а также информационное письмо
              Госкомстата о присвоении специальных кодов статистики;
            </li>
            <li>
              изготовят<strong> печать</strong>;
            </li>
            <li>
              откроют <strong>расчетный счет</strong> в банке и уведомят
              районную ИФНС, Пенсионый Фонд и Фонд социального страхования об
              открытии собственного расчетного счета новой организации.
            </li>
          </ul>
          <p>
            От Вас потребуется лишь обратиться к нотариусу за предоставлением
            нашему специалисту полномочий на подачу{" "}
            <strong>документов для регистрации юридического лица</strong> и за
            заверением подписи на заявлении о государственной регистрации,
            определить сумму Уставного капитала и порядок его оплаты, виды
            экономической деятельности и выбрать банк для открытия счета.
          </p>
          <p>Всё остальное сделаем МЫ!</p>

          <h2>Стоимость услуг</h2>

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
              Накладные расходы, связанные с{" "}
              <strong>регистрацией юридических лиц</strong> и открытием
              расчетного счета (госпошлина, оплата услуг нотариуса по оформлению
              доверенностей, заверению подписей, комиссия банка по открытию
              расчетного счета и т.п.) не входят в стоимость услуг и
              оплачиваются Клиентом отдельно в полном объеме или компенсируются
              Клиентом Исполнителю на основании первичных документов,
              подтверждающих эти расходы.
            </span>
          </p>
        </td>
      </div>
    </>
  );
}
