import React from "react";

export const Home = () => {
  return (
    <div>
      <div id="welcome">
        <h2>WELCOME</h2>
      </div>
      
      <div id="random-fact">
        <h2>RANDOM ANIMAL INFO</h2>
        <br />
        <br />
        <img id="fact-image"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg"></img>
        <br />
        <br />
        <h2>LION</h2>
        <br />
        <br />
        <h3> A large, powerfully built cat that is second in sizeonly
          to the tiger; it is a famous apex predator. The proverbial “king 
          of beasts,” the lion has been one of the best-known wild animals
          since earliest times.
        </h3>
        <br />
        <h3>To see more information about animals, please visit the Animals Page</h3>
      </div>
      
      <div id="news">
        <h2>RECENT NEWS</h2>
        <br />
        <br />
        <h3>Millions of birds and thousands of mammals have died as
          the current outbreak of bird flu spreads around the
          globe. The first polar bear death from the virus has just
          been confirmed in Alaska.</h3>
      </div>
    </div>
  );
};
