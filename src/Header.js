import React from "react"
import "./Assets/Styles/header.css"
import {Link} from "react-router-dom"

const Header = () => {
    return(
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style={{padding:"2px"}}>
            <tbody>
                <tr>
                    <td style={{width:"18px",paddingRight:"4px"}}>
                        <img src="https://news.ycombinator.com/y18.gif" width="18" height="18" style={{border:"1px white solid"}} />
                    </td>
                    <td style={{height: "10px"}}>
                        <span>
                            <b><a href="https://news.ycombinator.com/news" style={{color: "#000000"}}>Hacker News</a></b>                                                        
                            <a style={{marginLeft: "10px"}} href="https://news.ycombinator.com/newswelcome.html">welcome</a>
                            " | "
                            <a href="https://news.ycombinator.com/newest">new</a>
                            " | "   
                            <a href="https://news.ycombinator.com/front">past</a>
                            " | "
                            <a href="https://news.ycombinator.com/newcomments">comments</a>
                            " | "
                            <a href="https://news.ycombinator.com/ask">ask</a>
                            " | "
                            <a href="https://news.ycombinator.com/show">show</a>
                            " | "
                            <a href="https://news.ycombinator.com/jobs">jobs</a>
                            " | "
                            <a href="https://news.ycombinator.com/submit">submit</a>                    
                        </span>
                    </td>
                    <td style={{textAlign:"right",paddingRight:"4px"}}>
                        <Link to="/signin"><span>login</span></Link>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Header