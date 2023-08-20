// import { useEffect, useState } from "react";
// // import PortfolioList from "../portfolioList/PortfolioList";
// import "./portfolio.scss";
// // import {
// //   featuredPortfolio,
// //   webPortfolio,
// //   mobilePortfolio,
// //   designPortfolio,
// //   contentPortfolio,
// // } from "../../data";

// export default function Portfolio() {
//   const [selected, setSelected] = useState("featured");
//   const [data, setData] = useState([]);
//   const [handleClick] = useState ([])
//   const list = [
//     {
//       id: "featured",
//       title: "Featured",
//     },
//     {
//       id: "web",
//       title: "Web App",
//     },
//     {
//       id: "mobile",
//       title: "Mobile App",
//     },
//     {
//       id: "design",
//       title: "Design",
//     },
//     {
//       id: "content",
//       title: "Content",
//     },
//   ];

//   // useEffect(() => {
//   //   switch (selected) {
//   //     case "featured":
//   //       setData(featuredPortfolio);
//   //       break;
//   //     case "web":
//   //       setData(webPortfolio);
//   //       break;
//   //     case "mobile":
//   //       setData(mobilePortfolio);
//   //       break;
//   //     case "design":
//   //       setData(designPortfolio);
//   //       break;
//   //     case "content":
//   //       setData(contentPortfolio);
//   //       break;
//   //     default:
//   //       setData(featuredPortfolio);
//   //   }
//   // }, [selected]);

//   return (
//     <div className="portfolio" id="portfolio">
//       <h1>Portfolio</h1>
//       {/* <ul>
//         {list.map((item) => (
//           <PortfolioList
//             title={item.title}
//             active={selected === item.id}
//             setSelected={setSelected}
//             id={item.id}
//           />
//         ))}
//       </ul>
//       <div className="container">
//         {data.map((d) => (
//           <div className="item">
//             <img
//               src={d.img}
//               alt=""
//             />
//             <h3>{d.title}</h3>
//           </div>
//         ))}
//       </div> */}
//       <div className="imagecontainer">
//       <a href="https://dynamic-froyo-b6e9a6.netlify.app/" target="_blank" rel="">
//           <img src="assets/one.png"
//           alt="Click Me" width="500px"
//           // onClick={handleClick}
//         />
//       </a>
//       <div>
//       <a href="https://dazzling-babka-2bf9f6.netlify.app/" target="_blank" rel="">
//           <img src="assets/two.png"
//           alt="Click Me" width="500px"
//         />
//         </a>
//       </div>
//       <div>
//       <a href="https://unrivaled-lolly-cbeacf.netlify.app/" target="_blank" rel="">
//           <img src="assets/three.png"
//           alt="Click Me" width="500px"
//         />
//         </a>
//       </div>
//       <div>
//       <a href="https://clinquant-youtiao-2bc60d.netlify.app/" target="_blank" rel="">
//           <img src="assets/four.png"
//           alt="Click Me" width="500px"
//         />
//         </a>
//       </div>
//     </div>
//     </div>
//   );
// }
