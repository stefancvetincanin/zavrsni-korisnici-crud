import React from 'react'

export default function PageButton(props) {
  return (
    <div
      className={`page-button page-number ${(props.currentPage === props.pageNumber) ? 'page-button-active' : null}`}
      id={props.pageNumber}
      onClick={e => { props.handlePageChange(e)}}
    >
      {props.pageNumber}
    </div>
  )
}