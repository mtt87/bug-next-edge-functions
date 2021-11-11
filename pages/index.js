import { useState } from "react";

function Home() {
  const [status, setStatus] = useState("");
  const testEdge = async () => {
    const res = await fetch("/api/edge", {
      method: "POST",
      body: JSON.stringify({ hello: "world" }),
      headers: {
        "content-type": "application/json",
      },
    });
    setStatus(res.status);
  };
  const testLambda = async () => {
    const res = await fetch("/api/lambda", {
      method: "POST",
      body: JSON.stringify({ hello: "world" }),
      headers: {
        "content-type": "application/json",
      },
    });
    setStatus(res.status);
  };
  return (
    <div style={{ padding: 40 }}>
      <div>
        <p>/api/edge</p>
        <button type="button" onClick={testEdge}>
          Test
        </button>
      </div>
      <div>
        <p>/api/lambda</p>
        <button type="button" onClick={testLambda}>
          Test
        </button>
      </div>
      <div>
        <p>Response status code: {status}</p>
      </div>
    </div>
  );
}

export default Home;
