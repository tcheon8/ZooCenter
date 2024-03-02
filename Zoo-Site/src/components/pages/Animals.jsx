import React from "react";
import { Link } from "react-router-dom";

export const Animals = () => {
  return (
    <div>
      <div id="animals">
        <h2>ANIMALS</h2>
      </div>
 
      <div id="mammals">
        <Link to="/Lion">
        <img id="lion-img"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg"></img>
        </Link>
         
        <Link to="/Zebra">
        <img id="zebra-img"
             src="https://cdn.mos.cms.futurecdn.net/HjFE8NKWuCmgfHCcndJ3rK-1200-80.jpg">
        </img>
        </Link>

        <Link to="/Giraffe">
        <img id="giraffe-img"
             src="https://giraffeconservation.org/wp-content/uploads/2020/07/Bull-and-calves-in-Skeleton-Coast-National-Park-400x400.jpg">
        </img>
        </Link>
      </div>

      <div id="birds">
        <Link to="/Hawk">
        <img id="hawk-img"
             src="https://www.treehugger.com/thmb/hABHkJldvMOC7FMjwJS493YoSZs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cooper-s-hawk-profile-583855629-d89e191a88d1484db08800f067ba98e8.jpg">
        </img>
        </Link>

        <Link to="/Parrot" >
        <img id="parrot-img"
             src="https://d2zp5xs5cp8zlg.cloudfront.net/image-62867-800.jpg">
        </img>
        </Link>

        <Link to="/Flamingo">
        <img id="flamingo-img"
             src="https://animalfactguide.com/wp-content/uploads/2023/12/american-flamingo-1.jpg">
        </img>
        </Link>
      </div>

      <div id="fish">
        <Link to="/Clownfish">
        <img id="clownfish-img"
             src="https://ladymusgraveexperience.com.au/wp-content/uploads/2019/08/clown-fish-southern-great-barrier-reef-845x684.jpeg">
        </img>
        </Link>

        <Link to="/Shark">
        <img id="shark-img"
             src="https://c02.purpledshub.com/uploads/sites/62/2023/06/Megalodon-Getty-7147431.jpg">
        </img>
        </Link>

        <img id="lionfish-img"
             src="https://media.npr.org/assets/news/2009/08/09/lionfish-9f7f0480b3c6c767897b092ce3ecc3fd91e7d44f.jpg">
        </img>
      </div>
    </div>
  );
};