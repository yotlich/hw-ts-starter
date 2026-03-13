import { useState } from "react";

const PING_URL = "api/ping";

function Ping() {
  const [date, setDate] = useState<string | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function sendPing() {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(PING_URL);
      if (!res.ok) {
        throw new Error(`${res.statusText}`);
      }
      const date = await res.json();
      setDate(date.result);
    } catch (error) {
      setError(`${error}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div
      className="container"
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "baseline",
        fontFamily: "monospace",
      }}
    >
      <button disabled={isLoading} onClick={sendPing}>
        PING
      </button>
      {isLoading && <span>Loading ...</span>}
      {error && <span style={{ color: "red" }}>{error}</span>}
      {date && <span style={{ color: "green" }}>{date}</span>}
    </div>
  );
}

export default Ping;
