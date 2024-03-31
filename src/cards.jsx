import Info from "./Info.json";
import "./cards.css";
import Popup from "reactjs-popup";
import React, { useState } from "react";

const ProfilePreview = ({ name, pic }) => (
  <div className="profile-preview">
    <img className="profile" src={pic} alt={name} />
    <h4 className="mtext">{name}</h4>
  </div>
);

const ItemNoC = ({
  name,
  pronouns,
  majorsminors,
  semesterInBerkeley,
  semesterInNoteworthy,
  interests,
  bio,
  howWasYourDay,
  pic,
  close
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const Names = Object.keys(Info);

  const handleNext = () => {
    const currentIndex = Names.indexOf(name);
    setCurrentIndex((prevIndex) => (currentIndex + 1) % Names.length);
  };

  const handlePrev = () => {
    const currentIndex = Names.indexOf(name);
    setCurrentIndex((prevIndex) => (currentIndex - 1 + Names.length) % Names.length);
  };

  const currentItem = Info[name];
  const currentIndexName = Names[currentIndex];

  return (
    <Popup
      trigger={
        <div className="itemNoC">
          <img className="profile" src={pic} alt={name} />
          <h4 className="mtext">{name}</h4>
        </div>
      }
      position="center"
      modal
    >
      <div className="pop">
        <img className="profile" src={pic} alt={name} />
        <h2>{name}</h2>
        <h4>Bio: {bio}</h4>
        <h4>Pronouns: {pronouns}</h4>
        <h4>Major/Minor: {majorsminors}</h4>
        <h4>Semester in Berkeley: {semesterInBerkeley}</h4>
        <h4>Semester in Noteworthy: {semesterInNoteworthy}</h4>
        <h4>Interests: {interests}</h4>
        <h4>How Was Your Day? {howWasYourDay}</h4>
      </div>
    </Popup>
  );
};

const Card = () => {
  const itemList = [];
  const Names = Object.keys(Info);
  for (let i = 0; i < Names.length; i++) {
    const name = Names[i];
    const info = Info[name];
    itemList.push(
      <ItemNoC
        key={i}
        name={info.name}
        pronouns={info.pronouns}
        majorsminors={info.majorsminors}
        semesterInBerkeley={info.semesterInBerkeley}
        semesterInNoteworthy={info.semesterInNoteworthy}
        interests={info.interests}
        bio={info.bio}
        howWasYourDay={info.howWasYourDay}
        pic={info.pic}
        
      />
    );
  }
  return (
    <div className="classM">
      <h1 className="card"> Members </h1>
      <div className="spacing">{itemList}</div>
    </div>
  );
};

export default Card;
