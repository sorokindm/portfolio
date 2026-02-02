import CategoryDto from "./CategoryDto";
import TableEntryDto from "./TableEntryDto";

export default PriceSearchResultDto;

interface PriceSearchResultDto {
    categories:CategoryDto[];
    entries:TableEntryDto[];
}