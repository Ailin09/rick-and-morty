import React from "react";

const Pagination = ({ pageNumber, setPageNumber, totalPage }) => {
  const handlePrev = () => {
    if (pageNumber === 1) return;
    setPageNumber((page) => page - 1);
  };
  const handleNext = () => {
    setPageNumber((page) => page + 1);
    if (pageNumber >= totalPage) return;
  };

  return (
    <div className="container d-flex justify-content-center gap-5  my-5">
      <button onClick={handlePrev} className="btn btn-dark mt-5">
        Prev
      </button>
      <span className="mt-5">
        {pageNumber} of {totalPage}
      </span>
      <button onClick={handleNext} className="btn btn-dark mt-5">
        Next
      </button>
    </div>
  );
};

export default Pagination;
