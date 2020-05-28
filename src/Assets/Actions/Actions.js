//2.action types
export const SELECT_PAGE = "SELECT_PAGE"

//3.Action Creators
export const handlePageChange = page => {
    console.log("Selected Page", page);
    return {
        type: SELECT_PAGE,
        payload: page
    }
}
