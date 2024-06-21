import { useReducer, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived": {
      return { ...state, questions: action.payload, status: "ready" };
    }
    case "dataFailed": {
      return { ...state, status: "error" };
    }
    default: {
      throw new Error("Action unknown");
    }
  }
}

// 'loading', 'error', 'ready', 'active', 'finished'
const initialState = { questions: [], status: "loading" };

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const res = await fetch("http://localhost:8000/questions");
        const data = await res.json();

        dispatch({ type: "dataReceived", payload: data });
      } catch (error) {
        dispatch({ type: "dataFailed" });
      }
    }

    fetchQuestions();
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}
