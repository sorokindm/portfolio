
import { useState } from "react";
import SearchField from "./SearchField";
import SearchButton from "./SearchButton";
import { useNavigate } from "react-router-dom";

export default SearchForm;

export interface Properties
{
  handleChange: (event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => void;
}

function SearchForm() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    search:''
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)
  {
    const {name, value} = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    navigate("/search/"+formData.search,)
  }

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit} method="GET">
        <SearchField handleChange={handleInputChange}/>
        <SearchButton/>
      </form>
    </>
  );
}
