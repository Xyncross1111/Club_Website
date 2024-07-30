import React from "react";
import Style from "../Stylesheets/Achievement.module.css";
import AchievementsList from "../data/Achievements.json";
// let AchievementsList = [
//   {
//     aname: "Tushar Pamnani",
//     branch: "Computer Science and engineering [2026]",
//     title: "Smart India Hackathon",
//     img: "../Assets/tcblogo.jpg",
//     description:
//       "lorem epsum cortesdf dfbdf dfndf dfndf dnfdf ndf df  djsd hddf dfh",
//   },
//   {
//     aname: "Tushar Pamnani",
//     branch: "Computer Science and engineering [2026]",
//     title: "Smart India Hackathon",
//     img: "../Assets/tcblogo.jpg",
//     description:
//       "lorem epsum cortesdf dfbdf dfndf dfndf dnfdf ndf df  djsd hddf dfh",
//   },
//   {
//     aname: "Tushar Pamnani",
//     branch: "Computer Science and engineering [2026]",
//     title: "Smart India Hackathon",
//     img: "../Assets/tcblogo.jpg",
//     description:
//       "lorem epsum cortesdf dfbdf dfndf dfndf dnfdf ndf df  djsd hddf dfh",
//   },
//   {
//     aname: "Tushar Pamnani",
//     branch: "Computer Science and engineering [2026]",
//     title: "Smart India Hackathon",
//     img: "../Assets/tcblogo.jpg",
//     description:
//       "lorem epsum cortesdf dfbdf dfndf dfndf dnfdf ndf df  djsd hddf dfh",
//   },
//   {
//     aname: "Tushar Pamnani",
//     branch: "Computer Science and engineering [2026]",
//     title: "Smart India Hackathon",
//     img: "../Assets/tcblogo.jpg",
//     description:
//       "lorem epsum cortesdf dfbdf dfndf dfndf dnfdf ndf df  djsd hddf dfh",
//   },
// ];

let AchievementsCard = AchievementsList.map((obj) => {
  return (
    <div className={Style.AchievementsCard}>
      <div className={Style.leftOfAchievementCard}>
        {/* <img src="hh" alt={"Image of " + obj.aname}></img> */}
        <h2 className={Style.tag}>{obj.category.tag}</h2>
        <h2 className={Style.date}>{obj.date}</h2>
      </div>
      <div className={Style.rightOfAchievementCard}>
        {/* <h4>{obj.date}</h4> */}
        <div className={Style.details}>
          <h1 className={Style.name}>{obj.name}</h1>
          <p className={Style.description}>{obj.description}</p>
        </div>
      </div>
    </div>
  );
});
const AchievementsCards = () => {
  return (
    <div className={Style.AchievementsContainer}>
      <div className={Style.AchievementsHead}>Our Achievements</div>
      <div className={Style.AchievementsCards}>
        {AchievementsList.map((obj, index) => (
          <div
            key={index}
            className={`${Style.AchievementsCard} ${
              index % 2 === 0 ? Style.leftAligned : Style.rightAligned
            }`}
          >
            <div className={Style.leftOfAchievementCard}>
              <h2 className={Style.tag}>{obj.category.tag}</h2>
              <h2 className={Style.date}>{obj.date}</h2>
            </div>
            <div className={Style.rightOfAchievementCard}>
              <div className={Style.details}>
                <h1 className={Style.name}>{obj.name}</h1>
                <p className={Style.description}>{obj.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsCards;
