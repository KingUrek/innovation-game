import React from 'react';
import './style.css';
import PhotoInput from '../PhotoInput';

const SRC_DEFAULT = "data:image/jpeg;base64,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"

export default function PerfilImage({ src = SRC_DEFAULT }) {
  return (
      <PhotoInput />
      // <img className="photo-profile" src={src} />
  );
}