"use client";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { images } from "./constants/images";
import "@/app/forFonts.css"
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { Stack, Chip } from "@mui/material";
import GithubButton from "@/components/GithubButton";



export default function PortfolioPage() {

  const Router = useRouter();

  //Toast
  const notify = () =>
    toast.error("Enter Something to Send", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });



  const scrollToAboutMe = () => {
    const el = document.getElementById("about_me");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
    const scrollToResources = () => {
    const el = document.getElementById("resources");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
    const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
      const scrollToConnect = () => {
    const el = document.getElementById("connect");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <div className="font-sans bg-gradient-to-r from-[#FFFCF4] to-[#F0F6EE]  overflow-x-hidden">
      <ToastContainer />

      <div className="homepage  text-black  w-screen  flex flex-col items-start  justify-between lg:justify-evenly ">

        <div className="navbar border-b-4  neoBrutalism h-[5vh] lg:h-[7vh] w-[90vw] mx-[5vw] py-5 flex flex-row justify-around items-center from-[#FFFCF4] to-[#F0F6EE]">

          <div className="logoSide">
            <h1 className="flex flex-row items-center gap-1"><span className="text-green-600 lg:text-2xl text-xl">&lt;</span> <span className="lg:text-2xl text-xl">/</span> <span className="text-red-500 text-xl lg:text-2xl">&gt;</span> <Link href="#" className="lg:text-2xl neoBrutalism font-semibold lg:cursor-none lg:px-4 text-xl">Binod Sharma</Link> </h1>
          </div>

          <div className="buttonsSide flex flex-row justify-evenly items-center gap-5">
            <button onClick={scrollToAboutMe} className="lg:cursor-none lg:text-lg hidden lg:flex text-md lg:px-2">About Me</button>
            <button onClick={scrollToProjects} className="lg:cursor-none lg:text-lg text-md lg:px-2">Projects</button>
            <button onClick={scrollToConnect} className="lg:cursor-none lg:text-lg  lg:flex text-md lg:px-2">Connect</button>
            <button onClick={scrollToResources} className="lg:cursor-none lg:text-lg text-md lg:px-2">Resources</button>
          </div>

        </div>

        <div className="myDetails  lg:mt-5 lg:h-screeen justify-evenly flex lg:px-5  flex-col lg:flex-row  gap-5 items-center ">

          <div className="intro lg:h-screen w-screen flex lg:flex-row flex-col items-center lg:gap-4 gap-5 justify-evenly bg-gradient-to-r from-[#FFFCF4] to-[#F0F6EE] px-5   py-1 ">


            <div className="Hero  lg:ml-[10vw] lg:w-[50vw] lg:px-10 flex flex-col lg:h-screen justify-start lg:mt-[30vh] my-[5vh] items-start gap-6 lg:gap-10">

              <h2 className="lg:text-6xl text-3xl font-bold text-center neoBrutalism">Welcome to</h2>
              <h1 className='lg:text-8xl text-5xl font-extrabold  text-center -mt-5  neoBrutalismforHero'>BinodLab</h1>
              <h2 className='italic text-start lg:w-4/5 lg:text-xl text-slate-600 text-sm paraFont'>Hi! I am Binod. A React/React Native Full Stack Developer and AI/ML enthusiast.I specialize in building fast, SEO-optimized, and scalable web applications—from simple landing pages to full production-ready platforms.</h2>


              
              <div className="impButtons flex flex-row gap-5 w-full lg:mt-5 mb-1">

                <button onClick={scrollToAboutMe}
                  className="relative cursor-none group border-none bg-transparent p-0 outline-none   font-mono font-light uppercase text-base"
                >
                  <span
                    className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 rounded-lg transform translate-y-0.5 transition duration-600 ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-1 group-hover:duration-250 group-active:translate-y-px"
                  ></span>

                  <span
                    className="absolute top-0 left-0 w-full h-full rounded-lg bg-linear-to-l from-[hsl(217,33%,16%)] via-[hsl(217,33%,32%)] to-[hsl(217,33%,16%)]"
                  ></span>

                  <div
                    className="relative flex items-center justify-between lg:py-3 py-2  lg:px-6 px-2 text-lg text-white rounded-lg transform -translate-y-1 bg-linear-to-r from-[#FFD900] via-[#FFD900] to-[#FFD900] gap-3 transition duration-600 ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-hover:duration-250 group-active:-translate-y-0.5 brightness-100 group-hover:brightness-110"
                  >
                    <span className="select-none font-bold lg:text-xl text-sm text-black ">About Me</span>

                    <svg
                      viewBox="0 0 20 20"
                      fill="black"
                      className="w-5 h-5 ml-2 -mr-1 transition duration-250 group-hover:translate-x-1"
                    >
                      <path
                        clipRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </button>
                <Link href={"https://blogs.binodlab.tech/blogs"} target="_blank"
                  className="relative group border-none bg-transparent p-0 outline-none cursor-none font-mono font-light uppercase text-base"
                >
                  <span
                    className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 rounded-lg transform translate-y-0.5 transition duration-600 ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-1 group-hover:duration-250 group-active:translate-y-px"
                  ></span>

                  <span
                    className="absolute top-0 left-0 w-full h-full rounded-lg bg-linear-to-l from-[hsl(217,33%,16%)] via-[hsl(217,33%,32%)] to-[hsl(217,33%,16%)]"
                  ></span>

                  <div
                    className="relative flex items-center justify-between lg:py-3 py-2 lg:px-6 px-2 text-lg text-white rounded-lg transform -translate-y-1 bg-linear-to-r from-[#FFD900] via-[#FFD900] to-[#FFD900] gap-3 transition duration-600 ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-hover:duration-250 group-active:-translate-y-0.5 brightness-100 group-hover:brightness-110"
                  >
                    <span className="select-none text-sm lg:text-xl font-bold text-black ">Read All Blogs</span>

                    <svg
                      viewBox="0 0 20 20"
                      fill="black"
                      className="w-5 h-5 ml-2 -mr-1 transition duration-250 group-hover:translate-x-1"
                    >
                      <path
                        clipRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </Link>


              </div>








            </div>

            <div className="blogsSection lg:w-[50vw] h-full flex justify-center ">



              <div className="LatestPosts flex flex-col justify-start items-center gap-3   ">

                <h1 className="lg:text-2xl text-2xl neoBrutalism font-bold text-black">Read Latest Articles</h1>


                <BlogCard
                  link={`https://blogs.binodlab.tech/blogs/leetcode-problem-153-find-minimum-in-rotated-sorted-array-using-python`}
                  title={"Leetcode Problem 153 - Find Minimum in Rotated Sorted Array using Python"}
                  excerpt={"Here is the complete solution for Leetcode Problem 153 called Find Minimum in Rotated Sorted Array using Binary Search in Python"}
                  category={"LEETCODE"}
                  readTime="25"
                  author={"Binod Sharma"}
                  color="lime"
                  date="2/13/2026"

                />
                <BlogCard
                  link={`https://blogs.binodlab.tech/blogs/why-70s-c-language-refuse-to-die-`}
                  title={"Why 70s C Language Refuse to Die"}
                  excerpt={"The truth behind 50 Years of dominance of C Language which still refuse to get replaced."}
                  category={"C PROGRAMMING"}
                  readTime="7"
                  author={"Binod Sharma"}
                  color="orange"
                  date="2/5/2026"

                />
                <BlogCard
                  link={`https://blogs.binodlab.tech/blogs/leetcode-problem-238-product-of-array-except-self`}
                  title={"Leetcode Problem 238 - Product of Array Except Self"}
                  excerpt={"Leetcode Problem 238 - Product of Array Except Self"}
                  category={"LEETCODE"}
                  readTime="15"
                  author={"Binod Sharma"}
                  color="lime"
                  date="2/9/2026"

                />


              </div>




            </div>


          </div>


        </div>


        {/* Projects Section */}



        <h1 className="lg:text-4xl text-2xl neoBrutalism mt-[5vh] w-screen text-center">My Recent Works : </h1>

        <section id="projects" className=" bg-gradient-to-r from-[#FFFCF4] to-[#F0F6EE]  w-screen h-auto flex-col">

          <div className="grid  grid-cols-1 py-10 px-8 md:grid-cols-2 lg:grid-cols-3 gap-6  lg:max-w-[80vw] mx-auto ">
            {[
              {
                title: "BinodLab Blogs",
                isCompleted: true,
                description:
                  "Blogging platform built with  dynamic routing, SEO optimization, and a user-friendly interface for sharing tech insights and CS Blogs",
                link: "https://blogs.binodlab.tech/blogs",
                githubLink: null
              },
              {
                title: "Authentication",
                isCompleted: true,
                description:
                  "Ready to use custom web authentication based on NextAuth and JWT for time-based session and Email Sending feature.",
                githubLink: "https://github.com/binnoodx/Authentication"
              },
              {
                title: "BeatIOE",
                isCompleted: true,
                description:
                  "Quiz platform for engineering students. Full-stack app with question feeds, ranking, solutions, and user authentication.",
                link: "https://beatioe.vercel.app",
                githubLink: "https://github.com/binnoodx/beatIOE.com"
              },

              {
                title: "Movie App",
                isCompleted: true,
                description:
                  "App made on React Native that fetch Movie Detail from TMDB and Display Trending as well as Search Queries",
                githubLink: "https://github.com/binnoodx/MovieApp"

              },
              {
                title: "Productive_Me",
                isCompleted: true,
                description:
                  "A Full-stack webapp to track your daily todos , journals , goals and make you productive.",
                link: null,
                githubLink: "https://github.com/binnoodx/ProductiveMe-App"
              },
              {
                title: "E-commerce WebApp",
                isCompleted: false,
                description:
                  "A Full-stack Ecommerce website including optimize performamce , Better UI/UX and ready to serve website.",
                githubLink: "https://github.com/binnoodx/Ecommer_x-Frontend",
              },
            ].map((project, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r lg:h-[25vh] flex flex-col justify-evenly items-start gap-3 from-[#FFFCF4] to-[#F0F6EE] text-black border-2 border-black p-6 rounded-xl shadow-md shadow-cyan-500/20 text-left"
              >
                <h3 className="text-lg font-bold text-black mb-2">

                  {(
                    <div className="flex flex-row justify-center items-center gap-1 text-sm">
                      <h1 className="lg:text-xl text-lg cursor-none" >
                        {project.title}
                      </h1>
                      <Stack spacing={1} sx={{ alignItems: 'center' }}>
                        <Stack direction="row" spacing={0}>
                          {project.isCompleted ? <Chip label="Completed" className="lg:scale-75 scale-60" color="success" /> : <Chip className="scale-75" label="Working" color="primary" />}

                        </Stack>

                      </Stack>

                      {project.link && (
                        <Link target="_blank" href={project.link} className="italic font-normal text-lg underline cursor-none">
                          Live →
                        </Link>
                      )}



                    </div>
                  )}
                </h3>
                <p className="text-black text-sm lg:text-sm">{project.description}</p>
                {
                  project.githubLink && (
                    <GithubButton params={{ link: project.githubLink }} />
                  )
                }
              </div>
            ))}
          </div>
        </section>






        {/* About me Section */}

        <div id="about_me" className="aboutMeSection lg:px-[10vw] h-auto w-screen flex flex-col lg:flex-row lg:justify-center  justify-start items-center">



          <div id="about_me" className="gap-5  overflow-scroll lg:overflow-hidden  overflow-x-hidden   h-auto  flex lg:justify-center justify-start items-center  text-center py-10  lg:px-4  ">

            <div className="mt-3   flex justify-center items-center  text-center">


              <h1 className="text-start lg:w-4/5 text-slate-800 px-10 paraFont py-2">Hello World , This is <br></br><span className="normalFont text-4xl font-extrabold">Binod Sharma</span><br></br> An aspiring and  multidisciplinary Software Developer Engineer from Nepal. Currently, I am pursuing my Bsc. CSIT at Patan Mutliple Campus. I have high urge to build projects that doesn't even make sense. All I do is put all Creativity and Logics for best outcomes.<br></br><br></br>Behind Programming I have several hobbies like <br></br>- Competitive Programming<br></br>- Reading Novels and manga<br></br>- Playing Chess<br></br>- Touring in Bike<br></br>- Doing Maths and Physics<br></br>- Listening Music<br></br>- Photography<br></br>- Watching Anime </h1>




            </div>

          </div>

          {/* Social Handle Section */}

          <div id="connect" className=" gap-5 lg:mt-0 mt-20 text-slate-800 lg:w-1/2 w-screen flex lg:justify-center justify-start lg:items-center lg:h-auto  text-center">

            <div className="flex flex-col justify-start items-start px-5">
              <Link target="_blank" href={"https://leetcode.com/u/e1pKm0hxGM/"} className="oneByone cursor-none flex flex-row items-center mx-5 my-2 gap-3">
                <img src={images.leetcode.src} className="h-8" alt="" />
                <h1 className="paraFont"> /binod_docs </h1>
              </Link>
              <Link target="_blank" href={"https://www.pinterest.com/thebinodd/_"} className="oneByone cursor-none flex flex-row items-center mx-5 my-2 gap-3">
                <img src={images.pinterest.src} className="h-8" alt="" />
                <h1 className="paraFont"> /the_binod </h1>
              </Link>

              
              <Link target="_blank" href={"https://www.instagram.com/the_binodd"} className="oneByone cursor-none flex flex-row items-center mx-5 my-2 gap-3">
                <img src={images.instagram.src} className="h-8" alt="" />
                <h1 className="paraFont"> /the_binodd </h1>
              </Link>
              <Link target="_blank" href={"https://www.linkedin.com/in/binoddsharma"} className="oneByone cursor-none flex flex-row items-center mx-5 my-2 gap-3">
                <img src={images.linkedin.src} className="h-8" alt="" />
                <h1 className="paraFont"> /Binod Sharma </h1>
              </Link>
              <Link target="_blank" href={"https://x.com/the_binodd"} className="oneByone cursor-none flex flex-row items-center mx-5 my-2 gap-3">
                <img src={images.twitter.src} className="h-8" alt="" />
                <h1 className="paraFont"> /the_binod </h1>
              </Link>
              
              <Link target="_blank" href={"https://github.com/binnoodx"} className="oneByone cursor-none flex flex-row items-center mx-5 my-2 gap-3">
                <img src={images.github.src} className="h-8" alt="" />
                <h1 className="paraFont"> /binnoodx </h1>
              </Link>
              <Link target="_blank" href={"https://www.chess.com/member/the_binodd"} className="oneByone cursor-none flex flex-row items-center mx-5 my-2 gap-3">
                <img src={images.chess.src} className="h-8" alt="" />
                <h1 className="paraFont"> /the_binodd </h1>
              </Link>
            

            </div>

          </div>



        </div>

        {/* Resources Section */}

        <section id="resources" className=" g:mt-10 mt-20 mb-20 w-screen border-white flex justify-center items-center  text-center">

          <div className="space-y-5 lg:w-[75vw]  lg:mx-10 mx-2 my-2 neoBrutalism">
            <details className="group [&amp;_summary::-webkit-details-marker]:hidden ">
              <summary className="flex lg:cursor-none items-center justify-between gap-4 border-2 border-black bg-white px-4 py-3 font-medium text-gray-900 shadow-[4px_4px_0_0] hover:bg-yellow-100 focus:bg-yellow-100 focus:outline-0">
                <span className="font-semibold text-md lg:text-md">Learn Website Development</span>

                <svg className="size-5 shrink-0 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>


              <div className="webResources w-full flex flex-col neoBrutalism">


                <div className="firstRow">
                  <div className="p-4 flex flex-row gap-3 justify-evenly item-start">

                    <Link href="https://youtube.com/playlist?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&si=y32HHCcRYFuaKSmA" target="_blank" className="learnWebDev cursor-none flex flex-col gap-3 items-start justify-start">
                      <img src="https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCKktmHuXV_macV6MoUwhKxwzXJ7w" className="lg:h-27 lg:w-48 h-9 w-16" alt="Link" />
                      <p className=" text-xs lg:text-sm">🔗 Learn Full Stack Web Dev</p>


                    </Link>
                    <Link href="https://youtube.com/playlist?list=PLu71SKxNbfoCXO80Z4miZHTL5GxfFbz7A&si=nMAy8Eaw9kY2MqxE" target="_blank" className="learnWebDev cursor-none flex flex-col gap-3 items-start justify-start">
                      <img src="https://i.ytimg.com/vi/3BEn2E9PvBM/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLATU7lpzVG7UM6sIVJ0EP-vZcRzJw" className="lg:h-27 lg:w-48 h-9 w-16" alt="Link" />
                      <p className=" text-xs lg:text-sm">🔗 Learn Web Authentication</p>


                    </Link>
                    <Link href="https://youtube.com/playlist?list=PLt5mNkGuWcuWbFcwT8V5a_BpLVa1AVXD4&si=LUAHVcsFs2ye-G0e" target="_blank" className="learnWebDev cursor-none flex flex-col gap-3 items-start justify-start">
                      <img src="https://i.ytimg.com/vi/cr1XaYBqlhs/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAzi5fJY8_J6KlN6eX3cabuxOcjcw" className="lg:h-27 lg:w-48 h-9 w-16" alt="Link" />
                      <p className=" text-xs lg:text-sm">🔗 Learn Chat App with Socket IO</p>


                    </Link>
                    <Link href="https://youtu.be/q8EevlEpQ2A?si=q6zM0VztZJuQ8KYB" target="_blank" className="learnWebDev cursor-none flex flex-col gap-3 items-start justify-start">
                      <img src="https://i.ytimg.com/vi/q8EevlEpQ2A/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLA3wvZ2tf440prOd9AGo4PhiRVUqw" className="lg:h-27 lg:w-48 h-9 w-16" alt="Link" />
                      <p className=" text-xs lg:text-sm">🔗 Learn Git and Github</p>


                    </Link>




                  </div>
                  <div className="secondRow">
                    <div className="p-4 flex flex-row gap-3 justify-evenly item-start">

                      <Link href="https://youtube.com/playlist?list=PLUcsbZa0qzu0gVRFlVfscqjD84TqMssOt&si=8-nnHuR2oyGe0KZH" target="_blank" className="learnWebDev cursor-none flex flex-col gap-3 items-start justify-start">
                        <img src="https://i.ytimg.com/pl_c/PLUcsbZa0qzu0gVRFlVfscqjD84TqMssOt/studio_square_thumbnail.jpg?sqp=COOWzMwG-oaymwEICIAKENAFSFqi85f_AwYI3tvCwwY=&rs=AOn4CLAy1lZsDyFqeqXWkDugp8koS1Wwdw" className="lg:h-27 lg:w-48 h-9 w-16" alt="Link" />
                        <p className=" text-xs lg:text-sm">🔗 Learn Java Spring Bootv</p>


                      </Link>
                      <Link href="https://youtu.be/ig26iRcMavQ?si=ohYLpvSPcI1N4bOT" target="_blank" className="learnWebDev cursor-none flex flex-col gap-3 items-start justify-start">
                        <img src="https://i.ytimg.com/vi/ArmPzvHTcfQ/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA8QseBspGKnXKVkc9vS1fQ-yoqwA" className="lg:h-27 lg:w-48 h-9 w-16" alt="Link" />
                        <p className=" text-xs lg:text-sm">🔗 Advance Web Project</p>


                      </Link>
                      <Link href="https://youtube.com/playlist?list=PLjiHFwhbHYlEmPhn68XdG2p2k4X47XR-8&si=BE7IFajYHK1bl7yQ" target="_blank" className="learnWebDev cursor-none flex flex-col gap-3 items-start justify-start">
                        <img src="https://i.ytimg.com/vi/BOt3MNB71gI/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAMChmO3IQL0gfGfqQMQmD3Op08CQ" className="lg:h-27 lg:w-48 h-9 w-16" alt="Link" />
                        <p className=" text-xs lg:text-sm">🔗 Learn UI/UX Design</p>


                      </Link>
                      <Link href="https://youtu.be/JmpDGMgRFfo?si=jyVamlLdNkMkOBzF" target="_blank" className="learnWebDev cursor-none flex flex-col gap-3 items-start justify-start">
                        <img src="https://i.ytimg.com/vi/JmpDGMgRFfo/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDFP-6Og6xq9IfPPD4UquzR8w62OQ" className="lg:h-27 lg:w-48 h-9 w-16" alt="Link" />
                        <p className=" text-xs lg:text-sm">🔗 Advance Backend Project</p>


                      </Link>




                    </div>
                  </div>
                </div>


              </div>

            </details>

            <details className="group [&amp;_summary::-webkit-details-marker]:hidden">
              <summary className="flex lg:cursor-none items-center justify-between gap-4 border-2 border-black bg-white px-4 py-3 font-medium text-gray-900 shadow-[4px_4px_0_0] hover:bg-yellow-100 focus:bg-yellow-100 focus:outline-0">
                <span className="font-semibold text-md lg:text-md">Learn App Development (React Native)</span>

                <svg className="size-5 shrink-0 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>

              <div className="p-4 flex flex-row gap-3 justify-start item-start">

                <Link href="https://youtu.be/CzJQEstIiEI?si=AI86ghQYsssVHDNw" target="_blank" className="learnWebDev cursor-none flex flex-col gap-3 items-start justify-start">
                  <img src="https://i.ytimg.com/vi/ZBCUegTZF7M/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBf4c4C8CtzjjIRjTxeTVBydv4p7Q" className="lg:h-27 lg:w-48 h-9 w-16" alt="Link" />
                  <p className=" text-xs lg:text-sm">🔗 Learn React Native</p>


                </Link>




              </div>
            </details>

            <details className="group [&amp;_summary::-webkit-details-marker]:hidden">
              <summary className="flex lg:cursor-none items-center justify-between gap-4 border-2 border-black bg-white px-4 py-3 font-medium text-gray-900 shadow-[4px_4px_0_0] hover:bg-yellow-100 focus:bg-yellow-100 focus:outline-0">
                <span className="font-semibold text-md lg:text-md">Learn Python</span>

                <svg className="size-5 shrink-0 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>

              <div className="p-4 flex flex-row gap-3 justify-start item-start">

                <Link href="https://youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&si=v2yF1Y-QylPBza0c" target="_blank" className="learnWebDev cursor-none flex flex-col gap-3 items-start justify-start">
                  <img src="https://i.ytimg.com/vi/7wnove7K-ZQ/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDMirEJX-r2pxI5nylJWpyclDDEcg" className="lg:h-27 lg:w-48 h-9 w-16" alt="Link" />
                  <p className=" text-xs lg:text-sm">🔗 Learn Basics of Python</p>


                </Link>





              </div>
            </details>
            <details className="group [&amp;_summary::-webkit-details-marker]:hidden">
              <summary className="flex lg:cursor-none items-center justify-between gap-4 border-2 border-black bg-white px-4 py-3 font-medium text-gray-900 shadow-[4px_4px_0_0] hover:bg-yellow-100 focus:bg-yellow-100 focus:outline-0">
                <span className="font-semibold text-md lg:text-md">Learn Data Structure and Algorithm using Python</span>

                <svg className="size-5 shrink-0 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>

              <div className="p-4 flex flex-row gap-3 justify-start item-start">

                <Link href="https://www.youtube.com/watch?v=nIVW4P8b1VA&list=PLot-Xpze53ldVwtstag2TL4HQhAnC8ATf&pp=iAQB">
                  <img src="https://i.ytimg.com/vi/KLlXCFG5TnA/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBAhJmbgOeFFayTD6UbmjWO5DHkug" className="lg:h-27 lg:w-48 h-9 w-16" alt="Link" />
                  <p className=" text-xs lg:text-sm">🔗 Leetcode Blind 75</p>


                </Link>





              </div>
            </details>
          </div>

        </section>

        {/*Footer */}
        <footer className="text-center w-screen py-6 text-slate-700  text-sm px-4">
          © {new Date().getFullYear()} Binod Sharma. All rights reserved.
        </footer>

        {/* Bookie Section */}

        {/* <section className={showBookie ? `gap-5 border-1 ${active === 8 ? "z-1" : "z-0 "} w-[90vw] lg:w-auto lg:overflow-hidden overflow-scroll h-[85vh] lg:h-auto border-white absolute bg-slate-800 lg:mr-[23vw]  text-center` : "py-16 hidden border-1 border-white absolute bg-slate-800 ml-[40vw] px-4 sm:px-6 text-center"}>
          <div className="uppertext bg-slate-300 text-black flex flex-row justify-between px-10 py-1   items-center">
            <h1 className="text-sm normalFont text-center py-2">
              Rookie Bookie Collections
            </h1>

            <button onClick={() => setshowBookie(false)} className="px-3 lg:cursor-none py-1 bg-red-500">X</button>


          </div>
          <div className="booksCollection flex h-full w-full flex-col items-center  ">

            <div className="flex gap-3 flex-row mx-5 my-5">


              <div className="onebyone cursor-none flex flex-col">
                <img src="https://upload.wikimedia.org/wikipedia/en/8/86/Karnali_Blues_by_Buddhisagar.jpg" className="h-32 lg:h-42" alt="" />
                <h1 className="text-sm">Karnali Blues</h1>
                <h2 className="text-sm italic">⭐ 9/10</h2>
              </div>
              <div className="onebyone cursor-none flex flex-col">
                <img src="https://img.drz.lazcdn.com/static/np/p/3b4328af29f327c02b796ef67c2b1dc8.jpg_720x720q80.jpg" className="h-32 lg:h-42" alt="" />
                <h1 className="text-sm">Aithan</h1>
                <h2 className="text-sm italic">⭐ 6/10</h2>
              </div>
              <div className="onebyone cursor-none flex flex-col">
                <img src="https://media.thuprai.com/front_covers/ek-sarko-maya_front.jpg" className="h-32 lg:h-42" alt="" />
                <h1 className="text-sm">Ek sarko Maya</h1>
                <h2 className="text-sm italic">⭐ 8/10</h2>
              </div>
              <div className="onebyone cursor-none flex flex-col">
                <img src="https://static-01.daraz.com.np/p/5e839d6b91f98053bfb8bc2ad1c20859.jpg" className="h-32 lg:h-42" alt="" />
                <h1 className="text-sm">Radha</h1>
                <h2 className="text-sm italic">⭐ -/10</h2>
              </div>




            </div>
            <div className="flex gap-3 flex-row mx-5 my-2">


              <div className="onebyone cursor-none flex flex-col">
                <img src="https://upload.wikimedia.org/wikipedia/en/d/d9/Summer_Love_%28novel%29.jpg" className="h-32 lg:h-42" alt="" />
                <h1 className="text-sm">SummerLove</h1>
                <h2 className="text-sm italic">⭐ 9/10</h2>
              </div>
              <div className="onebyone cursor-none flex flex-col">
                <img src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1407659398i/22889351.jpg" className="h-32 lg:h-42" alt="" />
                <h1 className="text-sm">Saaya</h1>
                <h2 className="text-sm italic">⭐ 8/10</h2>
              </div>
              <div className="onebyone cursor-none flex flex-col">
                <img src="https://upload.wikimedia.org/wikipedia/en/a/a0/Phirphire_%28novel%29.jpg" className="h-32 lg:h-42" alt="" />
                <h1 className="text-sm">Firfire</h1>
                <h2 className="text-sm italic">⭐ -/10</h2>
              </div>
              <div className="onebyone cursor-none flex flex-col">
                <img src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1407659398i/22889351.jpg" className="h-32 lg:h-42" alt="" />
                <h1 className="text-sm">Saaya</h1>
                <h2 className="text-sm italic">⭐ 8/10</h2>
              </div>





            </div>
            <div className="flex gap-3 flex-row mx-5 mb-10">
              <div className="onebyone cursor-none flex flex-col">
                <img src="https://upload.wikimedia.org/wikipedia/en/4/47/Seto_Dharti_by_Amar_Neupane.jpg" className="h-32 lg:h-42" alt="" />
                <h1 className="text-sm">Seto Dharti</h1>
                <h2 className="text-sm italic">⭐ -/10</h2>
              </div>


              <div className="onebyone cursor-none flex flex-col">



                <img src="https://api.bookslandnepal.com/images/9789355434029-7405-1742210004644-1744121898646-1744123176821-1745659240929.jpeg?size=lg" className="h-32 lg:h-42" alt="" />
                <h1 className="text-sm">Ikagai</h1>
                <h2 className="text-sm italic">⭐ 8/10</h2>
              </div>
              <div className="onebyone cursor-none flex flex-col">
                <img src="https://media.thuprai.com/front_covers/psychology-of-money.jpg" className="h-32 lg:h-42" alt="" />
                <h1 className="text-sm">..</h1>
                <h2 className="text-sm italic">⭐ 8/10</h2>
              </div>
              <div className="onebyone cursor-none flex flex-col">
                <img src="https://heritagebooks.com.np/wp-content/uploads/2021/10/The-subtle-art-of-not-giving-fucck.jpg" className="h-32 lg:h-42" alt="" />
                <h1 className="text-sm">..</h1>
                <h2 className="text-sm italic">⭐ 7/10</h2>
              </div>

            </div>
          </div>
        </section> */}
      </div>
    </div>



  );
}
