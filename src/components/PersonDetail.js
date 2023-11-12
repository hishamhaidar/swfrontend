import { Modal } from "antd";
import React from "react";
import "../App.css";

function PersonDetails({ pressedPerson, isCardPressed, setIsCardPressed }) {
  const handleModalClose = () => {
    setIsCardPressed(false);
  };

  return (
    <Modal
      className="PeopleDetailsModal"
      visible={isCardPressed}
      footer={null}
      onCancel={handleModalClose}
    >
      {pressedPerson && (
        <>
          <h1>{pressedPerson.name}</h1>
          <img src={pressedPerson.image} alt={pressedPerson.name} />
          <p>Height: {pressedPerson.height} cm</p>
          <p>Mass: {pressedPerson.mass} kg</p>
          <p>Gender: {pressedPerson.gender}</p>
          <p>Birth Year: {pressedPerson.born}</p>
          <p>Born Location: {pressedPerson.bornLocation}</p>
          <p>Died: {pressedPerson.died}</p>
          <p>Died Location: {pressedPerson.diedLocation}</p>
          <p>Species: {pressedPerson.species}</p>
          <p>Hair Color: {pressedPerson.hairColor}</p>
          <p>Eye Color: {pressedPerson.eyeColor}</p>
          <p>Skin Color: {pressedPerson.skinColor}</p>
          <p>Cybernetics: {pressedPerson.cybernetics}</p>

          {pressedPerson?.affiliations && (
            <>
              <p>Affiliations:</p>
              <ul>
                {pressedPerson?.affiliations?.map((affiliation, index) => (
                  <li key={index}>{affiliation}</li>
                ))}
              </ul>
            </>
          )}
          {pressedPerson?.apprentices && (
            <>
              <p>Apprentices:</p>
              <ul>
                {pressedPerson?.apprentices?.map((apprentice, index) => (
                  <li key={index}>{apprentice}</li>
                ))}
              </ul>
            </>
          )}
          {pressedPerson?.formerAffiliations && (
            <>
              <p>Former Affiliations:</p>
              <ul>
                {pressedPerson?.formerAffiliations?.map(
                  (formerAffiliation, index) => (
                    <li key={index}>{formerAffiliation}</li>
                  )
                )}
              </ul>
            </>
          )}
        </>
      )}
    </Modal>
  );
}

export default PersonDetails;
