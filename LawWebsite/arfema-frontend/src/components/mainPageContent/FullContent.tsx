import { useParams } from "react-router-dom";
import SingleContentComponent from "./SingleContentComponent";
import { Content } from "./ListContentPageble";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

export default FullContent;

function FullContent() {

    const {id} = useParams();

    const [content, setContent] = useState<Content>();

    useEffect(() => {
        fetch(import.meta.env.VITE_GET_CONTENT + "?id=" + id).then((x) =>
          x.json().then(json => {
            setContent({...json,"crop":0})
          })
        );
      }, [id]);

    return (
        <>
            <Helmet>
              <title>{content?.title}</title>
              <meta name="title" content={content?.title}/>
            </Helmet>
            <div className="content-wrapper">
            {content? <SingleContentComponent content={content}/>: null}
            </div>
        </>
    );
}