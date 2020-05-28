import React from "react"
import {connect} from "react-redux"

const News = props => {
    return (
        <tr>
            <td>
                <table border="0" cellpadding="0" cellspacing="0" class="itemlist">
                    <tbody>
                        {Object.entries(props.news).map(([k, v], i) => {
                            return (
                                <div key={k} className="newsrow">
                                    <tr>
                                        <td align="right" valign="top" class="title">{ 20*(props.activePage-1) + 1 + i}.</td>
                                        <td>
                                         <center>
                                                <a>
                                                    <img src="https://news.ycombinator.com/grayarrow.gif" width="10" height="10" />
                                                </a>
                                         </center>
                                        </td>
                                        <td>
                                            <a href={`${v.story_url}`}>{v.title || v.story_title}</a>
                                            <span className="subtext"> (<a href={`${v.story_url}`}>{`${v.story_url}`}</a>)</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2"></td>
                                        <td class="subtext">
                                            <span>425 points</span> by <a href="user?id=vira28" class="hnuser">vira28</a> <span class="age"><a href="item?id=23319901">5 hours ago</a></span> 
                                            <span id="unv_23319901"></span> | <a href="hide?id=23319901&amp;auth=4402adee4762e8448c1398cc34cc6976c1d4cfe4&amp;goto=news" onclick="return hidestory(event, this, 23319901)">hide</a> | <a href="item?id=23319901">142&nbsp;comments</a>
                                        </td>
                                    </tr>
                                </div>
                            )
                        })}
                        <tr class="morespace" style={{ height: "10px" }}></tr>
                        
                    </tbody>
                </table>
            </td>
        </tr>
    )
}

const mapStateToProps = store => {
    return{
        activePage: store.page
    }
}

export default connect(mapStateToProps, null)(News)