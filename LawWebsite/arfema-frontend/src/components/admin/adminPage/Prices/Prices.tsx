import {useState } from "react";
import SearchFieldWithButton from "./SearchFieldWithButton";
import PriceSearchResultDto from "../../../../util/dto/PriceSearchResultDto";
import getCookie from "../../../../util/getCookie";
import CategoryLinkDto from "../../../../util/dto/CategoryLinkDto";
import TableEntryLinkDto from "../../../../util/dto/TableEntryLinkDto";
import CategoryDto from "../../../../util/dto/CategoryDto";
import TableEntryDto from "../../../../util/dto/TableEntryDto";
import GenericSingleTextInputDialog from "../../../generic/GenericSingleTextInputDialog";

export default Prices;

function Prices () {
    const [priceSearch, setPriceSearch] = useState<PriceSearchResultDto>();
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [dialogValue, setDialogValue] = useState<string>("");
    const [selected, setSelected] = useState<TableEntryDto>();
    const [dialogVisible, setDialogVisible] = useState<boolean>(false);

    const regex: RegExp = /\?\d/;

      function search() {
        fetch(import.meta.env.VITE_SEARCH_PRICE_DATA + "?searchTerm="+searchTerm, getRequestOptions()).then((x) =>
            x.json().then(setPriceSearch));
      }

      function getRequestOptions() {
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-XSRF-TOKEN": getCookie("XSRF-TOKEN") ?? "",
          },
        };
        return requestOptions;
      }

    function handleChange(event:React.ChangeEvent<HTMLInputElement>) {
        const {value} = event.target;
        setSearchTerm(value);
    }

    function handleSubmit(event:React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        search();
    }

    function resolveTitle(source: CategoryDto | TableEntryDto) {
        return (
          <>
            {source.title.map((substring) =>
              regex.test(substring)
                ? resolvePlaceholder(
                    Number.parseInt(substring.slice(1, substring.length)),
                    source.links
                  )
                : substring
            )}
          </>
        );
      }
    
      function resolvePlaceholder(
        index: number,
        links: CategoryLinkDto[] | TableEntryLinkDto[]
      ) {
        const link: CategoryLinkDto = links[index - 1];
    
        return (<span>{link.text}</span>);
      }

      function handleDialogChange(event:React.ChangeEvent<HTMLInputElement>) {
        const {value} = event.target;
        setDialogValue(value);
      }

      function handleDecline() {
        setDialogValue("");
        setDialogVisible(false);
      }

      function handleChangePrice () {
        fetch(import.meta.env.VITE_CHANGE_PRICE + "?id="+selected?.id+"&price="+dialogValue, getRequestOptions()).then(() =>{
            setDialogVisible(false);
            setDialogValue("");
            setSelected(undefined);
            search();
        });
      }

      function handleSelectRow(entry:TableEntryDto) {
        setSelected(entry);
        setDialogValue(entry.price);
        setDialogVisible(true);
      }


    return (<>
        <div className="main-view-admin">
            <SearchFieldWithButton handleChange={handleChange} handleSubmit={handleSubmit} placeholder="Поиск по названию..." searchTerm={searchTerm}/>
            {dialogVisible?<GenericSingleTextInputDialog handleChange={handleDialogChange} handleDecline={handleDecline} handleExit={handleDecline} inputValue={dialogValue} message="Введите новое значение цены" handleConfirm={handleChangePrice}/>:null}
            {priceSearch?<table className="content-selector">
              <thead>
                <th scope="col">Название</th>
                <th scope="col">Цена</th>
              </thead>
              <tbody>
                {priceSearch.entries.map(entry=><tr onClick={()=>handleSelectRow(entry)}><td>{resolveTitle(entry)}</td><td>{entry.price}</td></tr>)}
              </tbody>
              <tbody>

              </tbody>
            </table>:null}
        </div>
        

    </>);
}