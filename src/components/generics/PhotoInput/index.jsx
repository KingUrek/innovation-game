import React, { useState } from 'react';
import './style.css';


const readValue = async (value, cb) => {
  const input = value.target
  const fReader = new FileReader();
  fReader.readAsDataURL(input.files[0]);
  fReader.onloadend = function (event) {
    cb({ event: event, image: event.target.result })
  }
}

const savePhoto = (value) => console.log(value)

export default function PhotoInput({ data }) {
  const [photo, setPhoto] = useState();
  return (
    <>
      {!photo ? <label className="profile-label" for="avatar" /> : null}
      <input type="file"
        id="avatar" name="avatar"
        accept="image/png, image/jpeg"
        onChange={e => readValue(e, setPhoto)} />
      {photo ? <img className="photo-profile" src={photo.image} /> : null}
      {photo ? <div className="PhotoInputBtns">
        <input className="btn-profile saveButton" type="button" value="✔" onClick={() => savePhoto(photo)} />
        <input className="btn-profile cancelButton" type="button" value="X" onClick={() => setPhoto()} />
      </div> : null}
    </>
  );
}
