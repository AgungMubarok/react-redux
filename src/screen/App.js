import Layout from "../layout/Layout";
import Buttons from "../components/button/buttons";
import { addNumber, fetchApi } from "../context/action/action";
import { useAuthDispatch, useAuthState } from "../context/auth/auth";
import { useEffect } from "react";

function App() {
  const dispatch = useAuthDispatch();
  const state = useAuthState();

  useEffect(() => {
    fetchApi(dispatch);
  }, [dispatch])

  return (
    <Layout>
      <div>
        <p>agung</p>
        <p>Mubarok</p>
        <Buttons title="add" onClick={() => addNumber(dispatch, state)} />
        <p>{state.number}</p>
        {state.loading && <p>loading ...</p>}
        {state.data && state.data.results &&  <p>{state.data.results[0].email}</p>}
      </div>
    </Layout>
  );
}

export default App;
