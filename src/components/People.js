import React, { useState } from "react";
import { Card, List } from "antd";
import "../App.css";
import PersonDetails from "./PersonDetail";
function People({ loading, peopleData }) {
  const [pressedPerson, setPressedPerson] = useState(null);
  const [isCardPressed, setIsCardPressed] = useState(false);
  const handleCardPress = (person) => {
    console.log(person);
    setPressedPerson(person);
    setIsCardPressed(true);
  };

  return (
    <div>
      <List
        grid={{
          gutter: 25,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
          xxl: 5,
        }}
        loading={loading}
        dataSource={peopleData}
        rowKey={(item) => item.id}
        renderItem={(item) => {
          return (
            <Card
              hoverable
              className="Cards"
              cover={<img src={item.image} alt={" picsum"} />}
              onClick={() => {
                handleCardPress(item);
              }}
            >
              <p>{item.name}</p>
            </Card>
          );
        }}
      />
      <PersonDetails
        pressedPerson={pressedPerson}
        isCardPressed={isCardPressed}
        setPressedPerson={setPressedPerson}
        setIsCardPressed={setIsCardPressed}
      />
    </div>
  );
}

export default People;
