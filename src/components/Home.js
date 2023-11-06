import { Alert, Typography } from "antd";
import React, { useState } from "react";
import Pages from "./Pages";

function Home() {
  const [peopleData, setPeopleData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currPage, setCurrPage] = useState(1);

  return (
    <div>
      <Typography.Title id="starwarH1">Star Wars</Typography.Title>
      {error && <Alert type="error" showIcon closable message={error} />}
      <Pages
        currPage={currPage}
        setCurrPage={setCurrPage}
        peopleData={peopleData}
        setPeopleData={setPeopleData}
        setLoading={setLoading}
        setError={setError}
      />
      <pre>{JSON.stringify(peopleData, 0, 2)}</pre>
    </div>
  );
}

export default Home;
