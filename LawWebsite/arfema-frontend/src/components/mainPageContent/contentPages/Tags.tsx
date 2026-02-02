import { useEffect, useState } from "react";
import ListContentPageble, { PageContent } from "../ListContentPageble";
import PageComponent from "../PageComponent";
import {useParams} from "react-router-dom";
import getNumPageParam from "../../../util/getNumPageParam";

export default Tags;

interface Request {
    tag: string;
    page: number;
}

function Tags() {
    const [content, setContent] = useState<PageContent>();
    const {pageParam, tagName} = useParams(); 
    
  
    useEffect(() => {
      const numPageParam = getNumPageParam(Number(pageParam));
        const data : Request = {
            tag: String(tagName),
            page: numPageParam,
        }
      fetch(import.meta.env.VITE_GET_ALL_TAGGED,
        {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((x) =>
        x.json().then(setContent)
      );
    }, [pageParam, tagName]);

  return (
    <>
      <div className="content-wrapper">
        <h2>{tagName}</h2>
        <ListContentPageble pageContent={content}/>
        <PageComponent page={getNumPageParam(Number(pageParam))} maxPages={content?.maxPages ?? 0} route={"/tags/"+tagName}/>
      </div>
    </>
  );
}
