import { useNavigate } from "react-router-dom";
import { Content } from "./ListContentPageble";

export default SingleContentComponent;

interface Props {
  content: Content;
}

function SingleContentComponent({content:{id, htmlContent, title, created, tags, crop}}:Props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="news-wrapper">
        <h3>
          <a href={"/content/"+id} className="contentpagetitle">
            {title}
          </a>
        </h3>

        <h2></h2>
        <div>{created}</div>
        <div
          dangerouslySetInnerHTML={{
            __html: crop === 0 ? htmlContent : htmlContent.substring(0, crop),
          }}
        ></div>

        {crop === 0 ? null : (
          <a href={"/content/"+id} className="view-full">
            Подробнее...
          </a>
        )}

        <div className="tag">
          {tags.map((tag) => (
            <a href="#" onClick={(e)=>{
              e.preventDefault();
              navigate("/tags/"+tag,)}}>{tag}</a>
          ))}
        </div>
      </div>
    </>
  );
}
