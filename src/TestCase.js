import React from "react";
import useDetailCommon from "./hooks/useDetailCommon.js";


const TestCase = () => {
  const item = useDetailCommon();
  console.log(item);
  return (
    <div>
      {!item ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {item.map((item)=> (
            <div key={item.contentId}>
              <img src={item?.firstimage} alt="image"/>
              <p>{item?.overview}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TestCase;
