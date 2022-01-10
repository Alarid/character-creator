import React from "react"

import CharacterEditor from "./components/CharacterEditor"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          backgroundColor: "hsl(195deg, 20%, 86%)",
          bottom: "0",
          height: "40vh",
          width: "100%",
        }}
      />
      <CharacterEditor />
      <Footer />
    </>
  )
}

export default App
