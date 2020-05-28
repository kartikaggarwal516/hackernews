import React from "react"

const Footer = () => {
    return (
        <tr>
            <td>
                <center>
                    <span class="yclinks">
                        <a href="newsguidelines.html">Guidelines</a>
                                        | <a href="newsfaq.html">FAQ</a>
                                        | <a href="mailto:hn@ycombinator.com">Support</a>
                                        | <a href="https://github.com/HackerNews/API">API</a>
                                        | <a href="security.html">Security</a>
                                        | <a href="lists">Lists</a>
                                        | <a href="bookmarklet.html" rel="nofollow">Bookmarklet</a>
                                        | <a href="http://www.ycombinator.com/legal/">Legal</a>
                                        | <a href="http://www.ycombinator.com/apply/">Apply to YC</a>
                                        | <a href="mailto:hn@ycombinator.com">Contact</a>
                    </span>
                    <br /><br />
                                    Search:
                                    <input type="text" name="name" />
                    <br /><br />
                </center>
            </td>
        </tr>
    )
}

export default Footer