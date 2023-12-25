import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageCount, onPageChange }) => {
  return (
    <ReactPaginate
      previousLabel={'Anterior'}
      nextLabel={'Siguiente'}
      pageCount={pageCount}
      onPageChange={onPageChange}
      containerClassName={'pagination justify-content-center'} 
      pageClassName={'page-item'} 
      pageLinkClassName={'page-link'} 
      previousClassName={'page-item'} 
      previousLinkClassName={'page-link'} 
      nextClassName={'page-item'} 
      nextLinkClassName={'page-link'} 
      disabledClassName={'disabled'} 
      activeClassName={'active'} 
    />
  );
};

export default Pagination;
