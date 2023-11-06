import { Alert, Typography } from "antd";
import React, { useState } from "react";
import Pages from "./Pages";
import SearchFilterBar from "./SearchFilterBar";

function Home() {
  const [peopleData, setPeopleData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currPage, setCurrPage] = useState(1);
  const [searchedText, setSearchedText] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div>
      <Typography.Title id="starwarH1">Star Wars</Typography.Title>
      {error && <Alert type="error" showIcon closable message={error} />}
      <SearchFilterBar
        setSearchedText={setSearchedText}
        setSelectedValue={setSelectedValue}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Pages
        currPage={currPage}
        setCurrPage={setCurrPage}
        peopleData={peopleData}
        searchedText={searchedText}
        setPeopleData={setPeopleData}
        setLoading={setLoading}
        setError={setError}
        selectedValue={selectedValue}
        selectedCategory={selectedCategory}
      />
      {loading && <pre>{JSON.stringify(peopleData, 0, 2)}</pre>}
    </div>
  );
}

export default Home;
