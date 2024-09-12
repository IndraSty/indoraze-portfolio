import React from 'react'
import { BsMoonFill, BsSunFill } from "react-icons/bs";

function ToggleButtonTheme({colorMode, onClick}) {
  return (
    <button onClick={onClick} className="p-2 text-primary text-3xl">
      {colorMode === "light" ? <BsMoonFill size="25px"/> : <BsSunFill size="25px"/>}
    </button>
  )
}

export default ToggleButtonTheme
