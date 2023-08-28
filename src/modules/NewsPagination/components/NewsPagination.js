import ReactPaginate from "react-paginate";
import { news } from "../../../store/news";
import NewsCard from "./NewsCard";
import { useState } from "react";

export const NewsPagination = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  const itemsPerPage = 4; // Set the number of items to show per page

  const offset = currentPage * itemsPerPage;
  const paginatedData = news.slice(offset, offset + itemsPerPage);

  return (
    <div>
      <>{paginatedData.map((item) => {
        return <NewsCard data={item} />;
      })}
      </>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={Math.ceil(news.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};
