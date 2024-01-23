import React from "react";

export default function ThemeModes({setColor}) {
  

  return (
    <>
      <button className="btn btn-primary button-pink" onClick={()=>setColor('#F03861')}></button>
      <button className="btn btn-primary button-orange" onClick={()=>setColor('#B80000')}></button>
      <button className="btn btn-primary button-violet" onClick={()=>setColor('#3E1E68')}></button>
      <button className="btn btn-primary button-green" onClick={()=>setColor('#3C6E57')}></button>
    </>
  );
}
