import { Content, PageContent } from "../../mainPageContent/ListContentPageble";
import PageSelector from "../../mainPageContent/PageSelector";
import ContentSelectorSearch from "./ContentSelectorSearch";

export default ContentSelector;

interface Props {
  pageContent: PageContent | undefined;
  pageParam: number;
  setPageParam: React.Dispatch<React.SetStateAction<number>>;
  handleSelect: (
    event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    content: Content
  ) => void;
  handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void,
  searchTerm:string
}

function ContentSelector({
  pageContent,
  pageParam,
  setPageParam,
  handleSelect,
  handleChange,
  searchTerm
}: Props) {
  return (
    <>
      <div className="main-view-admin">
      <ContentSelectorSearch handleChange={handleChange} searchTerm={searchTerm}/>
        {pageContent?.contentDtoList?.length &&
        pageContent?.contentDtoList?.length != 0 ? (
          <>
            <table className="content-selector">
              <thead>
                <th scope="col">Дата</th>
                <th scope="col">Заголовок</th>
                <th scope="col">Тип</th>
              </thead>
              <tbody>
                {pageContent
                  ? pageContent.contentDtoList.map((content) => (
                      <tr onClick={(event) => handleSelect(event, content)}>
                        <td className="admin-date">{content.created}</td>
                        <td className="admin-title">{content.title}</td>
                        <td className="admin-type">
                          {content.contentType === "NEWS"?"Новости":null}
                          {content.contentType === "PRACTICE"?"Практика":null}
                          </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>

            <PageSelector
              currentPage={pageParam}
              maxPage={pageContent?.maxPages ?? 0}
              onClick={(key, e) => {
                e.preventDefault();
                const maxPages = pageContent?.maxPages ?? 0;
                switch (key) {
                  //Next
                  case -2:
                    pageParam < (maxPages ?? 0)
                      ? setPageParam(pageParam + 1)
                      : null;
                    break;
                  //Prev
                  case -1:
                    pageParam > 1 ? setPageParam(pageParam - 1) : null;
                    break;
                  default:
                    setPageParam(key);
                    break;
                }
                // window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          </>
        ) : (
          <h2>Ничего не найдено {pageContent?.contentDtoList.length}</h2>
        )}
      </div>
    </>
  );
}
