import React, { Component } from "react";
import Pagination from "react-js-pagination";
import { connect } from "react-redux";
import {handlePageChange} from "./Assets/Actions/Actions"
import { bindActionCreators } from "redux";

const PageOrder = props => {
  return(
    <div className="pagebox">
        <Pagination
          activePage={props.activePage}
          itemsCountPerPage={20}
          totalItemsCount={400}
          pageRangeDisplayed={5}
          onChange={props.handlePageChange.bind(this)}
        />
      </div>
  )
}

const mapStateToProps = store => {
  return{
    activePage: store.page
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {handlePageChange}, dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PageOrder)