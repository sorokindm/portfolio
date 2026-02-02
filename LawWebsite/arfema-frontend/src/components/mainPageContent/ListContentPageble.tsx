import SingleContentComponent from "./SingleContentComponent";

export default ListContentPageble; 

export interface PageContent {
  contentDtoList: Content[];
  maxPages: number;
}

export interface Content {
  id: number;
  htmlContent: string;
  title: string;
  created: string;
  tags: string[];
  contentType: string;
  crop: number;
}

interface Props {
  pageContent: PageContent | undefined;
}

function ListContentPageble({pageContent}:Props) {

  return (
    <>
        {pageContent?.contentDtoList?.length &&
        pageContent?.contentDtoList?.length != 0 ? (
          pageContent?.contentDtoList.map((item) => (
            <>
            <SingleContentComponent content={item}/>
            </>
          ))
        ) : (
          <h2>Ничего не найдено {pageContent?.contentDtoList.length}</h2>
        )}
    </>
  );
}
