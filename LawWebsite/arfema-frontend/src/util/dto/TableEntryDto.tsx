import TableEntryLinkDto from "./TableEntryLinkDto";

export default TableEntryDto;

interface TableEntryDto {
    id:number;
    rank:number;
    title:string[];
    price:string;
    links:TableEntryLinkDto[];
}