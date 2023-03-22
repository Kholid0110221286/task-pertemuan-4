import React from "react";

/**
 *  Create Component Hello
*/

 function Hello(props){

    return (
    <div>
    <h2>Helo {props.nama}</h2>
    <p>Saya {props.jurusan}</p>
    </div>
    );
}

// export Component Hello
export default Hello;
