import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {upvote, unvote} from "./Assets/Actions/Actions"

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
                                        <td align="right" valign="top" class="title">{20 * (props.activePage - 1) + 1 + i}.</td>
                                        <td>
                                            <center>
                                                <a>
                                                    {props.upvotearr.includes(v.title) || props.upvotearr.includes(v.story_title) ? null
                                                        : <img src="https://news.ycombinator.com/grayarrow.gif" width="10" height="10" style = {{cursor:"Pointer"}} onClick={() => props.upvote(v.title || v.story_title)} />
                                                    }
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
                                            <span>425 points</span> by <a >vira28</a> <span class="age"><a >5 hours ago</a></span>
                                            <a>
                                                    {props.upvotearr.includes(v.title) || props.upvotearr.includes(v.story_title) ? <span style = {{cursor:"Pointer"}} onClick={() => props.unvote(v.title || v.story_title)}>&nbsp;|&nbsp;unvote</span>
                                                        : null
                                                    }
                                            </a>
                                            <span></span> | <a style = {{cursor:"Pointer"}} onClick={() => props.hide(k)}>hide</a> | <a>142&nbsp;comments</a>
                                        </td>
                                    </tr>
                                </div>
                            )
                        })}
                        <tr style={{ height: "10px" }}></tr>

                    </tbody>
                </table>
            </td>
        </tr>
    )
}

const mapStateToProps = store => {
    return {
        activePage: store.page,
        upvotearr: store.upvotearr
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {upvote, unvote},dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(News)