function Home() {
  const testEdge = async () => {
    await fetch("/api/edge", {
      method: "POST",
      body: JSON.stringify({ hello: "world" }),
      headers: {
        "content-type": "application/json",
      },
    });
  };
  const testLambda = async () => {
    await fetch("/api/lambda", {
      method: "POST",
      body: JSON.stringify({ hello: "world" }),
      headers: {
        "content-type": "application/json",
      },
    });
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
    </div>
  );
}

export default Home;
