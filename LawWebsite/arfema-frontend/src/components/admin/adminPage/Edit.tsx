import {useEffect, useState } from "react";
import { Content, PageContent } from "../../mainPageContent/ListContentPageble";
import EditMediaForm from "../mediaCreateEdit/EditMediaForm";
import ContentSelector from "../mediaCreateEdit/ContentSelector";

export default Edit;

function Edit() {
  const [content, setContent] = useState<PageContent>();
  const [pageParam, setPageParam] = useState(1);
  const [selected, setSelected] = useState<Content>();
  const [searchTerm, setSearchTerm] = useState<string>("");

  function handleSelect(event:React.MouseEvent<HTMLTableRowElement, MouseEvent>, content:Content) {
    console.log(event);
    console.log(content);
    setSelected(content);
  }

  function handleChange(event:React.ChangeEvent<HTMLInputElement>) {
    const {value} = event.target;
    setSearchTerm(value);
  }

  function handleBack () {
    setSelected(undefined);
  }

  useEffect(() => {
    fetch(import.meta.env.VITE_GET_ALL_CONTENT + "?page=" + pageParam+"&searchTerm="+searchTerm).then((x) =>
      x.json().then(setContent)
    );
  }, [pageParam, searchTerm]);

  return (
    <>
    {selected?null:<ContentSelector pageContent={content} pageParam={pageParam} setPageParam={setPageParam} handleSelect={handleSelect} handleChange={handleChange} searchTerm={searchTerm}/>}
      {selected?<EditMediaForm content={selected} handleBack={handleBack}/>:null}
    </>
  );
}
