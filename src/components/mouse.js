import React from "react"

function mouse({ onClick }) {
  return (
    <div className="divMouse" href="#about" onClick={onClick}>
      <svg
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 0 247.73 395"
        xmlSpace="preserve"
      >
        <path
          id="mouse"
          className="st0"
          d="M135.03,385.92h-21.7c-56.89,0-103-46.11-103-103v-170.2c0-56.89,46.11-103,103-103h21.7
	c56.89,0,103,46.11,103,103v170.2C238.03,339.8,191.92,385.92,135.03,385.92z"
        />
        <path
          id="bolita"
          className="st1"
          d="M134.23,137.73h-20.1c-12.15,0-22-9.85-22-22v-48.2c0-12.15,9.85-22,22-22h20.1
	c12.15,0,22,9.85,22,22v48.2C156.23,127.88,146.38,137.73,134.23,137.73z"
        />
      </svg>
    </div>
  )
}

export default mouse
