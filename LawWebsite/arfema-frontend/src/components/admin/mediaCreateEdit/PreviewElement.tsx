import { useState } from "react";
import SingleContentComponent from "../../mainPageContent/SingleContentComponent";
import { MediaForm } from "../adminPage/New";

export default PreviewElement;

interface Props {
  mediaForm: MediaForm;
}

function PreviewElement({ mediaForm }: Props) {
  const [isShort, setShort] = useState<boolean>(false);

  return (
    <>
      <h2>Предпросмотр</h2>

      <h2></h2>
      <div className="content-wrapper">
        <SingleContentComponent
          content={{
            id: 1,
            contentType: mediaForm.contentType,
            crop: isShort?mediaForm.crop:0,
            created: "[Дата]",
            tags: mediaForm.tags,
            title: mediaForm.title,
            htmlContent: mediaForm.htmlContent,
          }}
        />
        <div className="crop-arrow">
          <a onClick={() => setShort(!isShort)}>{isShort ? "⬇" : "⬆"}</a>
        </div>
      </div>
    </>
  );
}
