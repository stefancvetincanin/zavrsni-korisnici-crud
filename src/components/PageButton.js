import React from 'react'

export default function PageButton(props) {
  return (
    <div 
      style={{backgroundColor: (props.currentPage === props.pageNumber) ? "rgb(80, 209, 209)" : null}}
      className="page-button page-number"
      id={props.pageNumber}
      onClick={e => { props.handlePageChange(e) }}
    >
      {props.pageNumber}
    </div>
  )
}