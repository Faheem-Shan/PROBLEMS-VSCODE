import React from "react";

function Title(){
    console.log("Rendering title");
    return(
        <h2>UseCallBack</h2>
    )
}
export default React.memo(Title);