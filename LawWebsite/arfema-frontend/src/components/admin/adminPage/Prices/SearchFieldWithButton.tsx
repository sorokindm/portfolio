export default SearchFieldWithButton;

interface Props {
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void,
    handleSubmit:(event:React.FormEvent<HTMLFormElement>)=>void,
    searchTerm:string,
    placeholder:string,
}

function SearchFieldWithButton({handleChange, handleSubmit, searchTerm, placeholder}:Props) {
    
    return (<>
        <form className="search-field-form" onSubmit={handleSubmit}>
            <input type="text" autoComplete="off" value={searchTerm} onChange={handleChange} placeholder={placeholder}/>
            <button className="request-button">Найти</button>
        </form>
    </>);
}