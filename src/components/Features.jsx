import React from "react";
import seaweed from "../assets/up-42.jpg";
import pizza from "../assets/up-35.jpg";

const Features = () => {
  return (
    <div className="features-container">
      <div className="feature-right">
        <div className="feature-description">
          <h2>Group Dining at Aba</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          fugit vero vel repudiandae excepturi officia similique accusantium
          adipisci error molestias aliquam natus quibusdam nulla necessitatibus
          pariatur iure nisi sunt repellendus minima, perferendis voluptate
          doloribus. Ullam veritatis reprehenderit dignissimos placeat ipsam?
          Consequatur laboriosam aliquam inventore quisquam illo, maxime veniam
          fuga nostrum!
          <button>Plan Your Party</button>
        </div>

        <img src={pizza} alt="pizza.jpg" />
      </div>
      <div className="feature-left">
        <img src={pizza} alt="pizza.jpg" />
        <div className="feature-description">
          <h2>Wine Dinner</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          fugit vero vel repudiandae excepturi officia similique accusantium
          adipisci error molestias aliquam natus quibusdam nulla necessitatibus
          pariatur iure nisi sunt repellendus minima, perferendis voluptate
          doloribus. Ullam veritatis reprehenderit dignissimos placeat ipsam?
          Consequatur laboriosam aliquam inventore quisquam illo, maxime veniam
          fuga nostrum!
          <button>Learn More</button>
        </div>
      </div>
      <div className="feature-right">
        <div id="about-description" className="feature-description">
          <h2>About Aba</h2>
          Aba is a restaurant with a rooftop patio located in Chicago's historic
          Fulton Market Discrict. This is Chef CJ Jacobson's second restaurant
          with Lettuce Entertain You, and is an extension of Ema(mother in
          Hebrew) in River North. Aba, meaning father in Hebrew, will
          incorporate Ema's style of cooking with a much larger influece of
          steak, raw and chilled seafood. The beverage program is crafted by
          Wine Director Ryan Arnold and Mixologist Liz Pearce and showcases
          Mediterranean-inspired rare wines and spirits.
        </div>
        <img src={seaweed} alt="seaweed.jpg" />
      </div>
    </div>
  );
};

export default Features;
