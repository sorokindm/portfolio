import { useState } from "react";
import getCookie from "../../../util/getCookie";

export default TagCheckinput;

interface Props {
  isTagInput: boolean;
  handleConfirmAddTag: (event: React.MouseEvent, tag: string) => void;
}

function TagCheckinput({ isTagInput, handleConfirmAddTag }: Props) {
  const [isDropdown, setDropdown] = useState<boolean>(true);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [tag, setTag] = useState<string>("");
  const [suggestTags, setSuggestTags] = useState<string[]>([]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    if (value.length > 0) {
      setLoading(true);
      fetch(import.meta.env.VITE_SUGGEST_TAG, getRequestOptions(value)).then(
        (x) => {
          x.json().then((json) => {
            setSuggestTags(json ?? []);
            setLoading(false);
          });
        }
      );
    }
    setTag(value);
  }

  function getRequestOptions(value: string) {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-XSRF-TOKEN": getCookie("XSRF-TOKEN") ?? "",
      },
      body: JSON.stringify({ input: value }),
    };
    return requestOptions;
  }

  return (
    <>
      {isTagInput ? (
        <div className="input-tag-form">
          <div className="single-checkinput">
            {" "}
            <input
              name="tagName"
              type="text"
              value={tag.toString()}
              onChange={handleChange}
              onFocus={() => setDropdown(true)}
              onBlur={() => setDropdown(false)}
            />
            <button
              type="submit"
              onClick={(event) => {
                handleConfirmAddTag(event, tag);
                setTag("");
              }}
            >
              ✔
            </button>
          </div>

          {isDropdown ? (
            <div className="suggest-dropdown">
              {isLoading ? (
                <div className="suggest-el">
                  <div className="loader" />
                </div>
              ) : null}
              {suggestTags.map((tag, key) => (
                <div
                  className="suggest-el"
                  key={key}
                  onMouseDown={(event:React.MouseEvent)=>event.preventDefault()}
                  onClick={() => {
                    setTag(suggestTags[key]);
                    setDropdown(false);
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
