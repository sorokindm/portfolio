import { useEffect, useState } from "react";
import ListContentPageble, { PageContent } from "../ListContentPageble";
import PageComponent from "../PageComponent";
import {useParams} from "react-router-dom";
import getNumPageParam from "../../../util/getNumPageParam";

export default Search;

interface Request {
    searchString: string;
    page: number;
}

function Search() {
    const [content, setContent] = useState<PageContent>();
    const {pageParam, searchString} = useParams(); 
    
  
    useEffect(() => {
      const numPageParam =getNumPageParam(Number(pageParam));

        const data : Request = {
          searchString: String(searchString),
            page: numPageParam,
        }
      fetch(import.meta.env.VITE_SEARCH,
        {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((x) =>
        x.json().then(setContent)
      );
    }, [pageParam, searchString]);

  return (
    <>
      <div className="content-wrapper">
        <h2>Поиск по:{searchString}</h2>
        <ListContentPageble pageContent={content}/>
        <PageComponent page={getNumPageParam(Number(pageParam))} maxPages={content?.maxPages ?? 0} route={"/search/"+searchString}/>
      </div>
    </>
  );
}
