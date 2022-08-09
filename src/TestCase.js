import React from "react";
import useDetailCommon from "./hooks/useDetailCommon.js";


const TestCase = () => {
  const item = useDetailCommon();
  return (
    <div>
      {!item ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {item.map((item)=> (
            <div key={item.contentid}>
              <h1>{item.title}</h1>
              <img src={item.firstimage} alt="image" style={{width: '70%', height: '100vh'}}/>
              <p>{item.overview}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TestCase;
