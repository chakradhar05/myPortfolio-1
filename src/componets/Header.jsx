import { Link } from "react-scroll";
import React from "react";

function Header() {
  return (
    <div className="px-6 w-full sticky top-0 py-2 bg-slate-800 shadow-lg z-20">
      <nav className="flex items-center justify-between mx-2">
        <div className="p-2">
          <Link to="home" smooth duration={500} className="hover:cursor-pointer ">
            <span className="transition delay-250 duration-300 ease-in-out bg-transparent hover:text-white hover:bg-slate-800 text-2xl md:text-4xl italic font-semibold font-mono shadow-md rounded-3xl p-1 bg-white text-slate-800">
              CS
            </span>
          </Link>
        </div>
        <div className="hidden md:flex">
          <ul className="flex items-center space-x-4 md:space-x-8">
            <li className="text-lg md:text-xl hover:cursor-pointer hover:border-b-2 text-white">
              <Link to="home" smooth duration={500}>
                Home
              </Link>
            </li>
            <li className="text-lg md:text-xl hover:cursor-pointer hover:border-b-2 text-white">
              <Link to="about" smooth duration={500}>
                About
              </Link>
            </li>
            <li className="text-lg md:text-xl hover:cursor-pointer hover:border-b-2 text-white">
              <Link to="skills" smooth duration={500}>
                Skills
              </Link>
            </li>
            <li className="text-lg md:text-xl hover:cursor-pointer hover:border-b-2 text-white">
              <Link to="projects" smooth duration={500}>
                Projects
              </Link>
            </li>
          </ul>
        </div>
        <div className="px-2">
          <Link
            to="contact"
            smooth
            duration={500}
            className="transition delay-150 duration-300 ease-in-out bg-transparent hover:bg-blue-500 text-blue-400 font-semibold hover:cursor-pointer hover:text-white py-1 px-2 md:py-2 md:px-4 border hover:border-transparent rounded-lg"
          >
            Let's talk &rarr;
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;


// // // export default Header;
// // import React from "react";

// // function Header() {
// //   return (
// //     <div className="px-6 w-full sticky top-0 py-2 bg-slate-800 shadow-lg ">
// //       <nav className="flex items-center justify-between mx-2 z-20">
// //         <div className="p-2">
// //           <span className="text-4xl italic font-semibold font-serif text-white">CS</span>
// //         </div>
// //         <div className="hidden md:flex">
// //           <ul className="flex items-center space-x-8">
// //             <li className="text-xl text-white"><a href="#" className="hover:text-gray-400">Home</a></li>
// //             <li className="text-xl text-white"><a href="#about" className="hover:text-gray-400">About</a></li>
// //             <li className="text-xl text-white"><a href="#skills" className="hover:text-gray-400">Skills</a></li>
// //             <li className="text-xl text-white"><a href="#projects" className="hover:text-gray-400">Projects</a></li>
// //           </ul>
// //         </div>
// //         <div className="px-2">
// //           <a href="#contact" className="transition delay-150 duration-300 ease-in-out bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-lg">
// //             Let's talk &rarr;
// //           </a>
// //         </div>
// //       </nav>
// //     </div>
// //   );
// // }

// // export default Header;
// import { Link } from "react-scroll";
// import React from "react";

// function Header() {
//   return (
//     <div className="px-6 w-full sticky top-0 py-2 bg-slate-800 shadow-lg z-20">
//       <nav className="flex items-center justify-between mx-2">
//         <div className="p-2">
//           <Link to="home" smooth duration={500}><span className="text-4xl italic font-semibold font-serif text-white">
//             CS
//           </span></Link>
//         </div>
//         <div className="hidden md:flex">
//           <ul className="flex items-center space-x-8">
//             <li className="text-xl hover:cursor-pointer hover:border-b-2 text-white">
//               <Link to="home" smooth duration={500}>
//                 Home
//               </Link>
//             </li>
//             <li className="text-xl hover:cursor-pointer hover:border-b-2 text-white">
//               <Link to="about" smooth duration={500}>
//                 About
//               </Link>
//             </li>
//             <li className="text-xl hover:cursor-pointer hover:border-b-2 text-white">
//               <Link to="skills" smooth duration={500}>
//                 Skills
//               </Link>
//             </li>
//             <li className="text-xl hover:cursor-pointer hover:border-b-2 text-white">
//               <Link to="projects" smooth duration={500}>
//                 Projects
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <div className="px-2">
//           <Link
//             to="contact"
//             smooth duration={500}
//             className="transition delay-150 duration-300 ease-in-out bg-transparent hover:bg-blue-500 text-blue-400 font-semibold hover:cursor-pointer hover:text-white py-1 px-2 md:py-2 md:px-4 border hover:border-transparent rounded-lg"
//           >
//             Let's talk &rarr;
//           </Link>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Header;
