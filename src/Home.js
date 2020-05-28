import React, { Component } from "react"
import Header from "./Header"
import axios from "axios"
import News from "./News"
import Footer from "./Footer"
import "./Assets/Styles/home.css"
import PageOrder from "./PageOrder"
import {connect} from "react-redux"

let url = "https://hn.algolia.com/api/v1/search_by_date?page="

class Home extends Component {

    state = {
        news: []        
    }

    getUserData = () => {
        axios.get(`${url}${this.props.activePage}`)
            .then((response) => {
                // handle success
                console.log(response);
                this.setState({ news: response.data.hits })
                console.log("news", this.state.news)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    componentDidMount() {
        this.getUserData();
    }

    componentDidUpdate(prevprops){
        if(prevprops.activePage!==this.props.activePage)
        this.getUserData()
    }

    render() {
        const { news } = this.state
        return (
            <div>
                <center>
                    <table id="hnmain" border="0" cellpadding="0" cellspacing="0" width="85%" bgcolor="#f6f6ef">
                        <tbody>
                            <tr><td bgcolor="#ff6600"><Header /></td></tr>
                            <tr id="pagespace" style={{ height: "10px" }}></tr>
                            <News news={news} />
                            <PageOrder />
                            <hr/>
                            <Footer />
                        </tbody>
                    </table>
                </center>
            </div>
        )
    }
}

const mapStateToProps = store => {
    console.log("store",store)
    return{        
        activePage: store.page
    }
}

export default connect(mapStateToProps, null)(Home)