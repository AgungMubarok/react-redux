export const addNumber = (dispatch, state) => {
  dispatch({ type: "add_number", payload: state.number+1 });
};

export const fetchApi = async (dispatch) => {
  dispatch({type: "req_fetch", payload: true})

  try {

    const requestOptions = {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json'
      }
    };

    let req = await fetch("https://randomuser.me/api/", requestOptions);
    let res = await req.json();

    console.log(res);
    dispatch({type: "req_fetch", payload: false})
    return dispatch({type: "fetch_success", payload: res})
  } catch (error) {
    console.log(error);
    dispatch({type: "req_fetch", payload: false})
    dispatch({type: "fetch_fail", payload: error})
  }
}