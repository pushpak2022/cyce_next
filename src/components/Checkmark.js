import React from "react"

const Checkmark = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 26 26">
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
      ></path>
      <path
        fill="none"
        d="M8.25 13.25L11.25 15.75L17.75 9.25"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  )
}

export { Checkmark }
