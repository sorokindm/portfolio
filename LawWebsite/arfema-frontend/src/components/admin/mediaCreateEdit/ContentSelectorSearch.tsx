export default ContentSelectorSearch;

interface Props {
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void,
    searchTerm:string,
}

function ContentSelectorSearch({handleChange, searchTerm}:Props) {
  return (
    <>
      <div className="content-selector-search-wrapper">
        <input id="content-selector-search" placeholder="Поиск по заголовку..." autoComplete="off" value={searchTerm} onChange={handleChange}></input>
      </div>
    </>
  );
}
