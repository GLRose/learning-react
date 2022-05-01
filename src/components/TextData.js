import React, { useState } from "react";

const TextData = () => {
  const [data, setData] = useState("");
  const [submittedData, setSubmittedData] = useState("");


  return (
    <div>
      <input
        value={data}
        onChange={(e) => setData(e.target.value)}
        type="text"
      />
    
      <button onClick={() => setSubmittedData(data)}>Show Data</button>
      <h1>{submittedData}</h1>
      <button onClick={() => setSubmittedData(null)}>Delete Data</button>
    </div>
  );
};

export default TextData;
