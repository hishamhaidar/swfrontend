import React, { useEffect, useState } from "react";
import { swApi } from "../api/AxiosConfig";
import { Button, Pagination } from "antd";
import "../App.css";
import { ReloadOutlined } from "@ant-design/icons";

function Pages({
  peopleData,
  setPeopleData,
  setLoading,
  setError,
  currPage,
  setCurrPage,
  searchedText,
  selectedValue,
  selectedCategory,
}) {
  const [totalPages, setTotalPages] = useState(88);
  useEffect(() => {
    handlePageChange(currPage);
    console.log(selectedValue, "  ss  ", searchedText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedValue, searchedText]);
  const refreshPage = () => {
    handlePageChange(currPage);
  };
  const handlePageChange = async (page) => {
    setLoading(true);
    setError(null);
    setCurrPage(page);
    try {
      if (searchedText !== "" && selectedValue === "") {
        const response = await swApi.get(
          `/search?page=${page}&name=${searchedText}`
        );
        setPeopleData(response?.data?.result);
        setTotalPages(response?.data?.count);
      } else if (searchedText === "" && selectedValue !== "") {
        const response = await swApi.get(
          `/filter?page=${page}&${selectedCategory}=${selectedValue}`
        );
        setPeopleData(response?.data?.result);
        setTotalPages(response?.data?.count);
      } else if (searchedText !== "" && selectedValue !== "") {
        const response = await swApi.get(
          `/fsearch?page=${page}&${selectedCategory}=${selectedValue}&name=${searchedText}`
        );
        setPeopleData(response?.data?.result);
        setTotalPages(response?.data?.count);
      } else {
        const response = await swApi.get(`/sw?page=${page}`);
        setPeopleData(response.data);
        setTotalPages(88);
      }
    } catch (error) {
      setError(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handlePageChange(1); // eslint-disable-next-line
  }, []);
  return (
    <div className="Pages">
      <Pagination
        defaultCurrent={1}
        total={totalPages}
        showSizeChanger={false}
        onChange={(page) => {
          handlePageChange(page);
        }}
      />
      <Button
        danger
        style={{ width: "100px" }}
        onClick={refreshPage}
        type="dashed"
        size="large"
        icon={<ReloadOutlined />}
      />
    </div>
  );
}

export default Pages;
