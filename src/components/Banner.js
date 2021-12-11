import React from "react";
import bannerImage from "../../src/two-young-happy-women-shopping-260nw-523857880 (2).jpg";

const Banner = () => {
  // style={{
  //     backgroundImage: `url("https://i.ibb.co/g94NnF3/two-young-happy-women-shopping-260nw-523857880-2.jpg")`,
  //     backgroundPosition: "center",
  //     backgroundSize: "cover",
  //     backgroundRepeat: "no-repeat",
  //     width: "400px",
  //   }}
  return (
    <section>
      <div className="py-5 text-center mt-4" 
        style={{
          backgroundImage: `url("https://i.ibb.co/g94NnF3/two-young-happy-women-shopping-260nw-523857880-2.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        
      >
          <div className="my-5">
          <h4>Winter Favourite</h4>
          <h1>Fashion Collection 2021</h1>
          <button className="btn btn-outline-dark">Buy Now</button>
          </div>
      </div>
    </section>
  );
};

export default Banner;
