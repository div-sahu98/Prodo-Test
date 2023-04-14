import React, { useState, useEffect } from "react";

// define Pagination component
function Pagination({ totalItems, defaultLimit, setParam, param }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(defaultLimit);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setTotalPages(Math.ceil(totalItems / limit));
  }, [totalItems, limit]);

  // define event handler for limit change
  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value));
    setParam({ ...param, limit: event.target.value });

    setCurrentPage(1);
  };

  // define event handler for page clicks
  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    setParam({ ...param, page: pageNumber });
  };

  // define function to render page numbers
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <div key={i} className={"active"}>
          <a onClick={() => handleClick(i)}>{i}</a>
        </div>
      );
    }
    return pageNumbers;
  };

  // define function to render limit options
  const renderLimitOptions = () => {
    const options = [5, 10, 20, 50];
    return options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ));
  };

  // render Pagination component
  return (
    <div className="alingpag">
      <div className="pagination">{renderPageNumbers()}</div>
      <div>
        <span>Items per page:</span>
        <select value={limit} onChange={handleLimitChange}>
          {renderLimitOptions()}
        </select>
      </div>
    </div>
  );
}

export default Pagination;
