import { useEffect, useState } from "react";

function ChatPage() {
  const [state, setState] = useState(0);
  const [state1, setState1] = useState(0);

  useEffect(() => {
    console.log("on mount");
    function handleclick() {
      console.log("click");
    }
    document.addEventListener("click", handleclick);

    return () => {
      document.removeEventListener("click", handleclick);
    };
  });

  return (
    <>
      <button
        onClick={() => {
          setState((S) => S + 1);
        }}
      >
        click me {state}
      </button>
      <button
        onClick={() => {
          setState1((S) => S + 1);
        }}
      >
        click me {state1}
      </button>
    </>
  );
}

export default ChatPage;
