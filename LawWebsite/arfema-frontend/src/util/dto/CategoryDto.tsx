import CategoryLinkDto from "./CategoryLinkDto";
import TableEntryDto from "./TableEntryDto";

export default CategoryDto;

interface CategoryDto {
    id:number;
    title:string[];
    enumTableType:string;
    ranking:number;
    entries:TableEntryDto[];
    links:CategoryLinkDto[];
}