import { useState } from "react";
import NewMediaForm from "../mediaCreateEdit/NewMediaForm";
import getCookie from "../../../util/getCookie";
import GenericInfoWindow from "../../generic/GenericInfoWindow";

export default New;

export interface MediaForm {
  id:number;
  htmlContent: string;
  title: string;
  contentType: string;
  crop: number;
  tags: string[];
}

function New() {
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    fetch(import.meta.env.VITE_ADD_NEW_MEDIA, getRequestOptions()).then(
      (response) => response.status).then(status=>status===200?setInfoMessage("Успешно добавлено!"):setInfoMessage("Произошла ошибка, код ошибки:"+status.toString())).then(()=>setInfoDialog(true));
  }

  function getRequestOptions() {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-XSRF-TOKEN": getCookie("XSRF-TOKEN") ?? "",
      },
      body: JSON.stringify(mediaForm),
    };
    return requestOptions;
  }

  const [mediaForm, setMediaForm] = useState<MediaForm>({
    id:0,
    htmlContent: "",
    title: "",
    contentType: "NEWS",
    crop: 0,
    tags: [],
  });
  const [isInfoDialog, setInfoDialog] = useState<boolean>(false);
  const [infoMessage, setInfoMessage] = useState<string>("Успешно добавлено!");

  function handleOk() {
    setInfoDialog(false);
  }

  return (
    <>
      {isInfoDialog?<GenericInfoWindow message={infoMessage} handleConfirm={handleOk} handleExit={handleOk}/>:null}
      <NewMediaForm mediaForm={mediaForm} setMediaForm={setMediaForm} handleSubmit={handleSubmit} edit={false} handleDelete={()=>null}/>
    </>
  );
}
