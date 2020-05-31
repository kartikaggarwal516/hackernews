//2.action types
export const SELECT_PAGE = "SELECT_PAGE"
export const UPVOTE = "UPVOTE"
export const UNVOTE = "UNVOTE"

//3.Action Creators
export const handlePageChange = page => {
    console.log("Selected Page", page);
    return {
        type: SELECT_PAGE,
        payload: page
    }
}

export const upvote = title => {
    return{
        type: UPVOTE,
        payload: title
    }
}

export const unvote = title => {
    return{
        type: UNVOTE,
        payload: title
    }
}
