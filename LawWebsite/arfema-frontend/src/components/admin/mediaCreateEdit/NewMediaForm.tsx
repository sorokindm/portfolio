import PreviewElement from "./PreviewElement";
import TagElement from "./TagElement";
import { MediaForm } from "../adminPage/New";

export default NewMediaForm;

interface Props {
  mediaForm: MediaForm;
  setMediaForm: React.Dispatch<React.SetStateAction<MediaForm>>;
  handleSubmit: (event:React.FormEvent)=>void;
  edit: boolean;
  handleDelete:()=>void;
}

function NewMediaForm({mediaForm, setMediaForm, handleSubmit, edit, handleDelete}:Props) {


  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    setMediaForm((prevFormData) => {
      if (name === "crop") return { ...prevFormData, [name]: parseInt(value) };
      return { ...prevFormData, [name]: value };
    });
  }
  return (
    <>
      <div className="main-view-admin">
        {edit?null:<h2>Добавление нового медиа</h2>}
        <form id="add-media-form" onSubmit={handleSubmit} autoComplete="off">
          <label htmlFor="media-title">Заголовок:</label>
          <input
            type="text"
            id="media-title"
            name="title"
            value={mediaForm.title}
            onChange={handleInputChange}
            required
          />

          <fieldset>
            <legend>Тип медиа:</legend>
            <div>
              <input
                type="radio"
                id="news-choice"
                name="contentType"
                value="NEWS"
                onChange={handleInputChange}
                checked={mediaForm.contentType === "NEWS"}
              />
              <label htmlFor="news-choice">Новости</label>

              <input
                type="radio"
                id="practice-choice"
                name="contentType"
                value="PRACTICE"
                onChange={handleInputChange}
                checked={mediaForm.contentType === "PRACTICE"}
              />
              <label htmlFor="practice-choice">Практика</label>
            </div>
          </fieldset>

          <TagElement
            tags={mediaForm.tags}
            handleChangeTags={(tags) =>
              setMediaForm({ ...mediaForm, tags: tags })
            }
          />

          <textarea
            form="add-media-form"
            name="htmlContent"
            cols={164}
            rows={30}
            onChange={handleInputChange}
            value={mediaForm.htmlContent}
            required
          />

          <label htmlFor="crop">Сокращённое количество символов:</label>
          <input
            id="crop"
            type="number"
            name="crop"
            value={mediaForm.crop}
            onChange={handleInputChange}
          />

          <div className="confirm-reject-button-container">
            <input className="request-button" id="submit" type="submit" />
            <input className="delete-button" id="delete" type="button" value="Удалить" onClick={handleDelete}/>
          </div>
        </form>
      </div>

      <div className="main-view-admin">
        <PreviewElement mediaForm={mediaForm} />
      </div>
    </>
  );
}
