export const CHANGE_PAGE = 'CHANGE_PAGE';

export const changePage = (newPage) => dispatch =>{
    dispatch({
        type: CHANGE_PAGE,
        payload: newPage
    })
}

