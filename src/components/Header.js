import React from 'react';

const Header = ()=>{
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "2em",
  }
  return(
    <header style={headerStyle}>
      <h1 style={{ fontSize: "25px", marginBottom: "15px" }}>Diego Dev</h1>
      <p style={{fontWeight:"bold",fontSize: "19px"}}>Desenvolvedor web</p>
    </header>  
  )
}

export default Header;