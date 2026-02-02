import { Properties } from "./SearchForm";

export default SearchField;

function SearchField({handleChange}:Properties) {
  return (
        <input className="search-field" type="text" name="search" id="search" alt="найти" placeholder="поиск..." maxLength={20} required onChange={handleChange}></input>
  );
}