export default PageSelector;

interface Props {
  currentPage: number;
  maxPage: number;
  onClick: (key: number, e: React.MouseEvent) => void;
}

function PageSelector({ currentPage, maxPage, onClick }: Props) {

  const maxPagesVisible = 5;
  const selectedOffset = 4;
  const startOffsetIndex = currentPage - selectedOffset>0?(currentPage+selectedOffset>=maxPage?maxPage-maxPagesVisible+1:currentPage-selectedOffset):1;
  return (
    <>
      <div className="page-selector">
        <a
          href="#"
          title="Первая"
          className={currentPage === 1 ? "page-disabled" : "page-enabled"}
          onClick={(e) => onClick(1, e)}
        >
          &lt;&lt; Первая
        </a>
        <a
          href="#"
          title="Предыдущая"
          className={currentPage === 1 ? "page-disabled" : "page-enabled"}
          onClick={(e) => onClick(-1, e)}
        >
          &lt; Предыдущая
        </a>

        {currentPage>selectedOffset+1?<a href="#" className="page-disabled">...</a>:null}

        {Array.from(Array(maxPage>maxPagesVisible?maxPagesVisible:maxPage), (_e, i) => {
          const index = startOffsetIndex+i;
          return (
            <a
              href="#"
              title={index.toString()}
              className={
                currentPage === index ? "page-disabled" : "page-enabled"
              }
              onClick={(e) => onClick(index, e)}
            >
              {index}
            </a>
          );
        })}

        {startOffsetIndex+maxPagesVisible-1<maxPage?<a href="#" className="page-disabled">...</a>:null}
        <a
          href="#"
          title="Следующая"
          className={currentPage === maxPage ? "page-disabled" : "page-enabled"}
          onClick={(e) => onClick(-2, e)}
        >
          Следующая &gt;
        </a>

        <a
          href="#"
          title="Последняя"
          className={currentPage === maxPage ? "page-disabled" : "page-enabled"}
          onClick={(e) => onClick(maxPage, e)}
        >
          Последняя &gt;&gt;
        </a>
      </div>
    </>
  );
}
