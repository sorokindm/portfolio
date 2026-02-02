import { useEffect, useState } from "react";
import ListContentPageble, { PageContent } from "../ListContentPageble";
import PageComponent from "../PageComponent";
import { useParams } from "react-router-dom";
import getNumPageParam from "../../../util/getNumPageParam";

export default Practice;

function Practice() {

    const [content, setContent] = useState<PageContent>();
    const {pageParam} = useParams();

    useEffect(() => {
      const numPageParam = getNumPageParam(Number(pageParam));
      fetch(import.meta.env.VITE_GET_ALL_PRACTICE + "?page=" + numPageParam).then((x) =>
        x.json().then(setContent)
      );
    }, [pageParam]);

  return (
    <>
      <div className="content-wrapper">
        <h2>Практика</h2>
        <ListContentPageble pageContent={content}/>
        <PageComponent page={getNumPageParam(Number(pageParam))} maxPages={content?.maxPages ?? 0} route={"/praktika"}/>
      </div>
    </>
  );
}
