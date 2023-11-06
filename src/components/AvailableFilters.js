import React, { useEffect, useState } from "react";
import { Button, Col, Radio, Row, Select, Space, message } from "antd";
import { swApi } from "../api/AxiosConfig";

const { Option } = Select;

const AvailableFilters = ({
  setSelectedValue,
  selectedCategory,
  setSelectedCategory,
  setFilteredPressed,
}) => {
  const [optionsData, SetOptionsData] = useState([]);
  const [tempSelectedValue, setTempSelectedValue] = useState(null);
  const [filterPage, setFilterPage] = useState(null);
  const [loading, setLoading] = useState(false);
  const getFilterOptions = async () => {
    try {
      setLoading(true);
      const response = await swApi.get(`/filter?${selectedCategory}=`);
      if (selectedCategory === "planet") {
        const planetKeys = Object.keys(response.data.homeworlds);
        SetOptionsData(planetKeys);
      } else if (selectedCategory === "species") {
        const speciesCountKeys = Object.keys(response.data.speciesCount);
        SetOptionsData(speciesCountKeys);
      } else if (selectedCategory === "film") {
        const filmsKeys = response.data.films;
        SetOptionsData(filmsKeys);
      }
    } catch (error) {
      message.error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    selectedCategory && getFilterOptions();

    // eslint-disable-next-line
  }, [filterPage, selectedCategory]);

  const handleOk = () => {
    setSelectedValue(tempSelectedValue);
    setFilteredPressed(false);
  };
  const handleReset = () => {
    setFilterPage(1);
    setSelectedCategory("");
    setSelectedValue("");
  };

  return (
    <div>
      <Radio.Group
        value={selectedCategory}
        onChange={(e) => {
          setSelectedCategory(e.target.value);
          setFilterPage(1);
        }}
      >
        <Radio value="planet">Planet</Radio>
        <Radio value="species">Species</Radio>
        <Radio value="film">Film</Radio>
      </Radio.Group>

      {selectedCategory && (
        <>
          <Row
            className={"Filer-Space"}
            gutter={24}
            style={{ padding: "0 0", margin: "0 0", gap: "20px" }}
            justify={"start"}
          >
            <Col span={16}>
              <Select
                style={{ width: "100%" }}
                loading={loading}
                placeholder={`Select a ${selectedCategory}`}
                onChange={setTempSelectedValue}
              >
                {!loading && (
                  <>
                    {selectedCategory &&
                      optionsData.map((option) => (
                        <Option key={option} value={option}>
                          {option}
                        </Option>
                      ))}
                  </>
                )}
              </Select>
            </Col>

            <Col span={2}>
              <Button type="primary" onClick={handleOk}>
                Ok
              </Button>
            </Col>
            <Col span={3}>
              <Button onClick={handleReset}>Reset</Button>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default AvailableFilters;
