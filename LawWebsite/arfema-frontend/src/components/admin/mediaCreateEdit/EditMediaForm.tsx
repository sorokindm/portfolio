import { useState } from "react";
import { Content } from "../../mainPageContent/ListContentPageble";
import { MediaForm } from "../adminPage/New";
import NewMediaForm from "./NewMediaForm";
import getCookie from "../../../util/getCookie";
import GenericConfirmDeclineWindow from "../../generic/GenericConfirmDeclineWindow";
import GenericInfoWindow from "../../generic/GenericInfoWindow";

export default EditMediaForm;

interface Props {
  content: Content,
  handleBack:()=>void,
}

function EditMediaForm({content, handleBack}:Props) {

  const [mediaForm, setMediaForm] = useState<MediaForm>({
    "id":content.id,
    "htmlContent":content.htmlContent,
    "title":content.title,
    "contentType":content.contentType,
    "crop":content.crop,
    "tags":content.tags,
  });
  const [isDeleteDialog, setDeleteDialog] = useState<boolean>(false);
  const [isInfoDialog, setInfoDialog] = useState<boolean>(false);
  const [infoMessage, setInfoMessage] = useState<string>("Успешно выполнено!")

  function handleSubmitSend(event: React.FormEvent) {
    event.preventDefault();
    fetch(import.meta.env.VITE_EDIT_MEDIA, getRequestOptionsSend()).then(
      (response) => response.status).then(status=>status===200?setInfoMessage("Успешно выполнено!"):setInfoMessage("Произошла ошибка, код ошибки:"+status.toString())).then(()=>setInfoDialog(true))
  }

  async function handleSubmitDelete() {
    fetch(import.meta.env.VITE_REMOVE_MEDIA, getRequestOptionsDelete()).then(
      (response) => response.status).then(status=>status===200?setInfoMessage("Успешно выполнено!"):setInfoMessage("Произошла ошибка, код ошибки:"+status.toString()))
  }


  function getRequestOptionsSend() {
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

  function getRequestOptionsDelete () {
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

  function handleConfirmDialog() {
    setDeleteDialog(false);
  }

  function handleDeclineDialog() {
    setDeleteDialog(false);
  }

  function handleDelete() {
    handleSubmitDelete().then(()=>setDeleteDialog(false));
  }

  function handleOk() {
    setInfoDialog(false);
    handleBack();
  }

  return (
    <>
      <div className="main-view-admin">
      {isDeleteDialog?<GenericConfirmDeclineWindow message ={infoMessage} handleConfirm={handleConfirmDialog} handleDecline={handleDeclineDialog} handleExit={handleDeclineDialog}/>:null}
      {isInfoDialog?<GenericInfoWindow message="Успешно выполнено" handleConfirm={handleOk} handleExit={handleOk}/>:null}
        <h2><div className="back-arrow" onClick={handleBack}/>Редактировать медиа</h2>
        <NewMediaForm mediaForm={mediaForm} setMediaForm={setMediaForm} handleSubmit={handleSubmitSend} edit={true} handleDelete={handleDelete}/>
      </div>
    </>
  );
}
