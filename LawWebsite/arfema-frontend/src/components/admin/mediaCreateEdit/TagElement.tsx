import { useState } from "react";
import TagCheckinput from "./TagCheckinput";

export default TagElement;

interface Props {
  tags:string[],
  handleChangeTags:(tags:string[])=>void,
}

function TagElement({tags,handleChangeTags}:Props) {
  const [isTagInput, setTagInput] = useState<boolean>(false);

  function handleAddTag(event: React.MouseEvent) {
    event.preventDefault();
    setTagInput(!isTagInput);
  }

  function handleRemovetag(event: React.MouseEvent) {
    event.preventDefault();
    handleChangeTags(tags.slice(0, tags.length - 1));
  }

  function handleConfirmAddTag(event: React.MouseEvent, tag:string) {
    event.preventDefault();
    if (tag) {
      handleChangeTags([...tags, tag]);
    }
    setTagInput(!isTagInput);
  }

  return (
    <>
      <fieldset>
        <legend>Теги:</legend>
        <div className="tagadmin">
          {tags.map((tag, key) => (
            <a key={key}>{tag}</a>
          ))}
        </div>

        <TagCheckinput isTagInput={isTagInput} handleConfirmAddTag={handleConfirmAddTag}/>

        {isTagInput ? null : (
          <button className="addtag" onClick={handleAddTag}>
            +
          </button>
        )}

        {tags.length > 0 ? (
          <button className="addtag" onClick={handleRemovetag}>
            –
          </button>
        ) : null}
      </fieldset>
    </>
  );
}
