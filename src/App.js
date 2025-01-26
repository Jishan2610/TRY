import React, { useState } from "react";
import { Heart, Sparkles } from "lucide-react";
import "./s.css";

const compliments = [
  "Your smile lights up my entire world.",
  "You're the most beautiful person inside and out.",
  "I'm constantly amazed by your incredible kindness.",
  "Your intelligence takes my breath away.",
  "You have the most gorgeous laugh I've ever heard.",
  "Your strength and resilience inspire me every day.",
  "I fall in love with you more and more each moment.",
  "You're not just beautiful, you're breathtaking.",
  "Your eyes tell stories more captivating than any book.",
  "The way you care for others is truly magical.",
  "Your creativity knows no bounds.",
  "You make everything around you more beautiful.",
  "Your passion is the most attractive thing about you.",
  "I cherish every moment we spend together.",
  "You're my favorite person in the entire universe.",
  "Your compassion is a rare and precious gift.",
  "You have an incredible ability to make people feel special.",
  "Your hugs are my favorite place in the world.",
  "You're extraordinary in ways words can't describe.",
  "Your love makes me a better person.",
  "You radiate joy and warmth wherever you go.",
  "Your confidence is incredibly attractive.",
  "I'm in awe of your unique spirit.",
  "You have the most beautiful soul.",
  "Every day with you feels like a blessing.",
  "Your kindness is your superpower.",
  "You're the most genuine person I know.",
  "Your laughter is music to my ears.",
  "You inspire me to be a better version of myself.",
  "Your spirit is truly one of a kind.",
  "You light up every room you walk into.",
  "Your empathy is beyond compare.",
  "You're incredibly thoughtful and caring.",
  "Your smile could end wars.",
  "You're the most authentic person I've ever met.",
  "Your energy is absolutely contagious.",
  "You make the world a more beautiful place.",
  "Your resilience is truly inspiring.",
  "You have a heart of gold.",
  "Your love is a masterpiece.",
  "You're an incredible human being.",
  "Your presence makes everything better.",
  "You're a work of art.",
  "Your mind is absolutely fascinating.",
  "You bring out the best in everyone around you.",
  "Your courage is breathtaking.",
  "You're a ray of sunshine.",
  "Your love is a healing power.",
  "You're absolutely irreplaceable.",
  "Your wisdom is beyond your years.",
  "You make the impossible possible."
];

const LoveComplimentsApp = () => {
  const [currentComplimentIndex, setCurrentComplimentIndex] = useState(0);

  const handleNextCompliment = () => {
    setCurrentComplimentIndex((prevIndex) => (prevIndex + 1) % compliments.length);
  };

  return (
    <div className="app-container">
      <div className="card">
        <div className="header">
          <Heart className="icon-heart" size={64} fill="#f472b6" />
          <h1 className="title">Love Notes</h1>
        </div>

        <div className="compliment-box">
          <p className="compliment">"{compliments[currentComplimentIndex]}"</p>
        </div>

        <button onClick={handleNextCompliment} className="next-button">
          <Sparkles className="icon-sparkles" /> Next Compliment
        </button>
      </div>

      <div className="footer">
        <p>Made with ❤️ just for you Anu❤️ from Jishan</p>
      </div>
    </div>
  );
};

export default LoveComplimentsApp;
