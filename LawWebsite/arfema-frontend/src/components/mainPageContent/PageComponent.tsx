import {useNavigate} from "react-router-dom";
import PageSelector from "./PageSelector";

export default PageComponent;

interface Props {
  page: number;
  maxPages: number;
  route: string;
}

function PageComponent({ page, maxPages, route}: Props) {

  const navigate = useNavigate();
  return (
    <>
      <PageSelector
        currentPage={page}
        maxPage={maxPages ?? 0}
        onClick={(key, e) => {
          e.preventDefault();
          switch (key) {
            //Next
            case -2:
              page < (maxPages ?? 0) ? navigate(route+"/"+(page+1)):navigate(route+"/"+page);
              break;
            //Prev
            case -1:
              page > 1 ? navigate(route+"/"+(page-1)):navigate(route+"/"+page);
              break;
            default:
              navigate(route+"/"+key);
              break;
          }
          // window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
      <div className="center">
        <span>
          Страница {page} из {maxPages}
        </span>
      </div>
    </>
  );
}
