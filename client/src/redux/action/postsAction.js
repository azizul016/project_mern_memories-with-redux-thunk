import * as api from "../../api";

//action creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    // const action = { type: "FETCH_ALL", payload: data };
    // dispatch(action);
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    // console.log(data)

    // dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
