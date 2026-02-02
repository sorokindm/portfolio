import { useCallback, useEffect, useState } from "react";
import PageSelector from "../../../mainPageContent/PageSelector";
import ContentSelectorSearch from "../../mediaCreateEdit/ContentSelectorSearch";
import getCookie from "../../../../util/getCookie";

export default QuestionsSelector;

interface CustomerRequestDto {
  id: number;
  created: string;
  name: string;
  phone: string;
  email: string;
  request: string;
  read: boolean;
}

interface PageCustomerRequestDto {
  maxPages: number;
  customerRequestDtoList: CustomerRequestDto[];
}

function QuestionsSelector() {
  const [page, setPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [pageCustomerRequestDto, setPageCustomerRequestDto] =
    useState<PageCustomerRequestDto>();
  const [isOnlyUnread, setOnlyUnread] = useState<boolean>(false);

  const updatePage = useCallback(function() {
    fetch(
      import.meta.env.VITE_GET_REQUESTS +
        "?page=" +
        page +
        "&searchTerm=" +
        searchTerm +
        "&isOnlyUnread=" +
        isOnlyUnread,
      getRequestOptions()
    ).then((x) => x.json().then((json) => setPageCustomerRequestDto(json)));
  },[page,searchTerm,isOnlyUnread]);

  useEffect(() => {
    updatePage();
  }, [page, searchTerm, isOnlyUnread, updatePage]);

  function getRequestOptions() {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-XSRF-TOKEN": getCookie("XSRF-TOKEN") ?? "",
      },
    };
    return requestOptions;
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setSearchTerm(value);
  }

  function handleMarkRead(id: number) {
    fetch(
      import.meta.env.VITE_MARK_READ + "?id=" + id,
      getRequestOptions()
    ).then(() => updatePage());
  }

  function handleDeleteRequest(id: number) {
    fetch(
      import.meta.env.VITE_DELETE_REQUEST + "?id=" + id,
      getRequestOptions()
    ).then(() => updatePage());
  }

  return (
    <>
      <div className="requests-search">
        <ContentSelectorSearch
          handleChange={handleChange}
          searchTerm={searchTerm}
        />
        <label htmlFor="is-only-unread">Только непрочитанные:</label>
        <input
          id="is-only-unread"
          type="checkbox"
          checked={isOnlyUnread}
          onChange={() => setOnlyUnread(!isOnlyUnread)}
        />
      </div>

      {pageCustomerRequestDto ? (
        <>
          <table className="requests-selector">
            <thead>
              <th scope="col">Дата</th>
              <th scope="col">Содержание</th>
              <th scope="col">Почта</th>
              <th scope="col">Телефон</th>
            </thead>
            <tbody>
              {pageCustomerRequestDto
                ? pageCustomerRequestDto.customerRequestDtoList.map(
                    (request) => (
                      <>
                        <tr
                          className={
                            request.read ? "request-row" : "request-row unread"
                          }
                        >
                          <td className="date">{request.created}</td>
                          <td className="request">{request.request}</td>
                          <td className="mail">{request.email}</td>
                          <td className="phone">
                            {request.phone ? request.phone : "–"}
                          </td>
                          <td className="mark-read">
                            <button
                              type="button"
                              onClick={() => handleMarkRead(request.id)}
                            >
                              Пометить прочитанным
                            </button>
                          </td>
                          <td className="delete">
                            <button
                              type="button"
                              onClick={() => handleDeleteRequest(request.id)}
                            >
                              Удалить
                            </button>
                          </td>
                        </tr>
                      </>
                    )
                  )
                : null}
            </tbody>
          </table>{" "}
          <PageSelector
            currentPage={page}
            maxPage={pageCustomerRequestDto?.maxPages ?? 0}
            onClick={(key, e) => {
              e.preventDefault();
              const maxPages = pageCustomerRequestDto?.maxPages ?? 0;
              switch (key) {
                //Next
                case -2:
                  page < (maxPages ?? 0) ? setPage(page + 1) : null;
                  break;
                //Prev
                case -1:
                  page > 1 ? setPage(page - 1) : null;
                  break;
                default:
                  setPage(key);
                  break;
              }
              // window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        </>
      ) : (
        <h3>Ничего не найдено</h3>
      )}
    </>
  );
}
