import React from 'react'
import PageButton from './PageButton'

export default class Pagination extends React.Component {
  state = {
    currentPage: 1
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentPage !== prevProps.currentPage) {
      this.setState({
        currentPage: this.props.currentPage
      })
    }
  }

  handlePageChange = e => {
    this.setState({
      currentPage: Number(e.target.id)
    })
    this.props.handlePageChange(e.target.id)
  }

  handlePageBack = () => {
    let temp = ((this.state.currentPage - 1) > 0) ?
    this.state.currentPage - 1 :
    1
    this.setState({
      currentPage: temp
    })
    this.props.handlePageChange(temp)
  }

  handlePageForward = () => {
    let temp = ((this.state.currentPage + 1) <= Math.ceil(this.props.totalUsers / this.props.usersPerPage)) ?
    this.state.currentPage + 1 :
    Math.ceil(this.props.totalUsers / this.props.usersPerPage)
    this.setState({
      currentPage: temp
    })
    this.props.handlePageChange(temp)
  }

  render() {
    const totalPages = Math.ceil(this.props.totalUsers / this.props.usersPerPage)
    let pageButtons = []
    for(let i = 0; i < totalPages; i++) {
      pageButtons.push(
        <PageButton key={i}
          pageNumber={i + 1} 
          handlePageChange={this.handlePageChange} 
          currentPage={this.state.currentPage}/>
      )
    }

    const stylePrevButton = 
      (this.state.currentPage === 1) ? {
        backgroundColor: "rgb(158, 148, 148)",
        color: "lightgrey",
        cursor: "default"
      } : null

    const styleNextButton = 
      (this.state.currentPage === totalPages) ? {
        backgroundColor: "rgb(158, 148, 148)",
        color: "lightgrey",
        cursor: "default"
      } : null

    return (
      <div>
        <div className="page-buttons-container">
          <div 
            style={stylePrevButton}
            className="page-button" 
            onClick={this.handlePageBack}>
              &lt;
          </div>
          {pageButtons}
          <div 
            style={styleNextButton}
            className="page-button"
            onClick={this.handlePageForward}>
            &gt;
          </div>
        </div>
      </div>
    )
  }
}