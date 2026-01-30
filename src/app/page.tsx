"use client";
import { useEffect, useState, useRef } from "react";
import { socket } from "./socket";
import { BsSend } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import * as React from 'react';
import { images } from "./constants/images";
import "@/app/forFonts.css"
import Link from "next/link";
import Loader from "./Components/Loader";
import BlogCard from "@/components/BlogCard";

export default function PortfolioPage() {

  //For Messaging
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<string[]>([]);
  const [onlineUsers, setonlineUsers] = useState(0)
  const [IsDataLoading, setIsDataLoading] = useState(false);

  useEffect(() => {
    getDBmessage();
  }, []);


  const inpRefMsg = useRef<HTMLInputElement | null>(null);
  const inpRefName = useRef<HTMLInputElement | null>(null);
  const chatBoxRef = useRef<HTMLDivElement>(null);

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

  //Get Messages From DB
  const getDBmessage = async () => {
    setIsDataLoading(true);
    const res = await fetch("/api/getMessage");
    const response = await res.json();
    setIsDataLoading(false);
    setChat(response.reverse());
  };

  //Hit Enter To send
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      handleclick();
    }
  };

  const handleclick = async () => {
    const User = inpRefName.current ? inpRefName.current.value : "";
    if (message.length !== 0)
      socket.emit("send_message", {
        name: User ? User : "Anonymous",
        text: message,
      });
    if (inpRefMsg.current) inpRefMsg.current.value = "";
    setMessage("");

    if (message.length === 0) {
      notify();
    } else {
      await fetch("/api/forMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: message,
          user: inpRefName.current ? inpRefName.current.value : "Anonymous",
        }),
      });
    }
  };

  // Messages
  useEffect(() => {
    const handleReceiveMessage = (data: any) => {
      setChat((prev) => [...prev, data]);
    };

    socket.on("receive_message", handleReceiveMessage);

    return () => {
      socket.off("receive_message", handleReceiveMessage);
    };
  }, []);

  // Online users
  useEffect(() => {
    // Listener for online_count updates
    const handleOnlineUsers = (count: number) => {
      setonlineUsers(count);
    };

    socket.on("connect", () => {

      // ✅ Request current count
      socket.emit("get_online_users");
    });

    socket.on("online_count", handleOnlineUsers);

    return () => {
      socket.off("connect");
      socket.off("online_count", handleOnlineUsers);
    };
  }, []);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [chat]);

 

  return (
    <div className="font-sans bg-[#FBF5E7]  overflow-x-hidden">
      <ToastContainer />

      {/* Home Page */}
      <div className="homepage  text-black  w-screen  flex flex-col items-start  justify-between lg:justify-evenly ">

        {/* Navbar Part */}

        <div className="navbar bebas-neue-regular h-[5vh] lg:h-[7vh] w-screen flex flex-row justify-around items-center bg-[#FBF5E7]">

          <div className="logoSide">
            <h1 className="flex flex-row items-center gap-1"><span className="text-green-400 lg:text-2xl">&lt;</span> <span className="lg:text-2xl">/</span> <span className="text-red-500 lg:text-2xl">&gt;</span> <Link href="#" className="lg:text-2xl lg:cursor-none lg:px-4 text-sm">Binod Sharma</Link> </h1>
          </div>

          <div className="buttonsSide flex flex-row justify-evenly items-center gap-5">
            <Link target="_blank" href="#" className="lg:cursor-none lg:text-lg text-sm lg:px-2">Blogs</Link>
            <Link target="_blank" href="#about_me" className="lg:cursor-none lg:text-lg text-sm lg:px-2">About Me</Link>
            <Link target="_blank" href="https://github.com/binnoodx?tab=repositories" className="lg:cursor-none lg:text-lg text-sm lg:px-2">Projects</Link>
            <Link target="_blank" href="#about_me"  className="lg:cursor-none lg:text-lg hidden lg:flex text-sm lg:px-2">Connect</Link>
            <Link target="_blank" href="#resources_section" className="lg:cursor-none lg:text-lg text-sm lg:px-2">Resources</Link>
          </div>

        </div>


        {/* Except Navbar Part */}
        <div className="myDetails w-screen lg:mt-5 h-screeen justify-evenly flex lg:px-5  flex-col lg:flex-row  gap-5 items-center ">

          {/* Intro + Tabs Part */}
          <div className="left flex flex-col justify-evenly items-center mb-2 w-screen  lg:w-auto gap-10">


            {/* Intro Section */}
            <div className="intro  flex flex-col items-center lg:gap-4 justify-center bg-[#F7C236] px-5 w-screen lg:w-auto py-1  lg:h-[50vh] border-4  border-b-black border-r-black border-t-0 border-l-0">


              <div className="top  lg:h-[60vh] w-auto lg:px-10 flex flex-row-reverse  items-center justify-evenly lg:gap-10">
                <div className="textPart flex flex-col gap-5">
                  <h1 className='lg:text-5xl text-3xl font-extrabold  text-center tracking-wide   normalFont'>Binod's Homepage</h1>
                  <h2 className='italic text-center lg:text-xl text-sm normalFont'>Hi! I am Binod.<br /> A React/React Native Full Stack Developer</h2>


                  <div className="achievements lg:mt-5 w-full flex flex-row gap-2 justify-evenly items-center">

                    <div className="insideAchievement bg-[#F6D672] px-2 py-1  text-center">
                      <h1 className="text-xl font-bold lg:font-extrabold">10+</h1>
                      <h2 className=" text-xs lg:text-sm">Web Projects</h2>

                    </div>
                    <div className="insideAchievement bg-[#F6D672] px-2 py-1  text-center">
                      <h1 className="text-xl font-bold lg:font-extrabold">30+</h1>
                      <h2 className=" text-xs lg:text-sm">Leetcode</h2>
                    </div>
                    <div className="insideAchievement bg-[#F6D672] px-2 py-1 text-center">
                      <h1 className="text-xl font-bold lg:font-extrabold">4 Yrs+</h1>
                      <h2 className=" text-xs lg:text-sm">Web Dev XP</h2>
                    </div>
                    <div className="insideAchievement bg-[#F6D672] px-2 py-1  text-center">
                      <h1 className="text-xl font-bold lg:font-extrabold">2 Yrs+</h1>
                      <h2 className=" text-xs lg:text-sm">App Dev XP</h2>
                    </div>

                  </div>
                  <div className="impButtons flex flex-row justify-evenly w-full lg:mt-5 mb-1">

                    <button className="bg-[#E2581D] px-10 text-white border-black border-2 lg:cursor-none py-1 font-semibold">Resume</button>
                    <button className="bg-white px-10 text-black border-black border-2 lg:cursor-none py-1 font-semibold">Connect</button>


                  </div>

                </div>
                <div className="imagePart">
                  <div className="imageSection ">
                    <img src={images.binod.src} className="lg:h-72 hidden lg:flex rounded-tl-4xl rounded-br-4xl" alt="" />
                  </div>
                </div>
              </div>




            </div>




            {/* TechStack */}
            {/* <section id="tech_stack" className={techStackShow ? `${active === 3 ? "z-1" : "hidden "} gap-5 border-1 text-white w-[90vw] lg:w-[30vw] h-[55vh] lg:h-auto border-white  bg-slate-800   text-center` : "py-16 hidden border-1 text-white border-white absolute bg-slate-800  px-4 sm:px-6 text-center"}>
              <div className="uppertext bg-[#F7C236]  text-black flex flex-row justify-between px-10 py-1   items-center">
                <h1 className="text-sm normalFont text-center py-2">
                  Binod's Tech Stack
                </h1>

                <button onClick={() => setTechStackShow(false)} className="px-3 lg:cursor-none py-1 bg-red-500">X</button>


              </div>
              <div className="myTechStack w-[90vw] gap-5 lg:w-auto flex flex-col justify-start items-start py-10 px-5">

                <div className="Framework w-full flex flex-col justify-start items-start">
                  <h1 className="normalFont text-xl">Programming Languages</h1>
                  <h2 className="text-xs lg:text-sm text-start">Typescript / Javascript (ES6) / Python / C Basics</h2>

                </div>

                <div className="Frontend w-full flex flex-col  justify-start items-start">
                  <h1 className="normalFont text-xl">Frontend</h1>
                  <h2 className="text-xs lg:text-sm text-start">React / React Native / Tailwind CSS</h2>

                </div>
                <div className="Backend w-full flex flex-col justify-start items-start">
                  <h1 className="normalFont text-xl">Backend</h1>
                  <h2 className="text-xs lg:text-sm text-start">Node Js</h2>

                </div>
                <div className="Framework w-full flex flex-col justify-start items-start">
                  <h1 className="normalFont text-xl">Framework</h1>
                  <h2 className="text-xs lg:text-sm text-start">Express JS / Next Js / Expo / Vite</h2>

                </div>
                <div className="Tools & Platform w-full flex flex-col justify-start items-start">
                  <h1 className="normalFont text-xl">Tools & Platform</h1>
                  <h2 className="text-xs lg:text-sm text-start">Figma / Postman / Vercel / Git / OAuth / MongoDB <br /> Socket IO / AWS</h2>

                </div>





              </div>
            </section> */}



            {/* Projects Section */}
            {/* <section className={showProjects ? ` ${active === 2 ? "z-1" : "hidden"} bg-slate-700 border-2  border-slate-800 w-[90vw] lg:w-[30vw] h-[60vh] lg:h-[50vh] lg:overflow-y-scroll overflow-y-scroll overflow-x-hidden   flex-col` : " bg-slate-700 border-2 hidden border-slate-800   absolute  flex-col"}>
              <div className="uppertext  overflow-hidden lg:w-full  w-[90vw] bg-slate-300 text-black flex flex-row justify-between px-10 py-1   items-center">
                <h1 className="text-sm normalFont text-center  py-2">
                  Binod's Projects
                </h1>

                <button onClick={() => setShowProjects(false)} className="px-3 lg:cursor-none py-1 bg-red-500">X</button>


              </div>
              <div className="grid  grid-cols-1 py-10 px-8 md:grid-cols-2 gap-6 max-w-5xl mx-auto ">
                {[
                  {
                    title: "Startup",
                    isCompleted: false,
                    description:
                      "Expected to release on 2026. Contact me for more info.",
                    link: "/"
                  },
                  {
                    title: "Authentication",
                    isCompleted: true,
                    description:
                      "Ready to use custom web authentication based on NextAuth and JWT for time-based session and Email Sending feature.",
                    link: "https://github.com/binnoodx/Authentication"
                  },
                  {
                    title: "BeatIOE",
                    isCompleted: true,
                    description:
                      "Quiz platform for engineering students. Full-stack app with question feeds, ranking, solutions, and user authentication.",
                    link: "https://beatioe.vercel.app",
                  },

                  {
                    title: "Movie App",
                    isCompleted: true,
                    description:
                      "App made on React Native that fetch Movie Detail from TMDB and Display Trending as well as Search Queries",
                    link: "https://github.com/binnoodx/MovieApp"

                  },
                  {
                    title: "Productive_Me",
                    isCompleted: true,
                    description:
                      "A Full-stack webapp to track your daily todos , journals , goals and make you productive.",
                    link: "",
                  },
                  {
                    title: "E-commerce WebApp",
                    isCompleted: false,
                    description:
                      "A Full-stack Ecommerce website including optimize performamce , Better UI/UX and ready to serve website.",
                    link: "https://github.com/binnoodx/Ecommer_x-Frontend",
                  },
                ].map((project, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.03 }}
                    className="bg-[#1e293b] p-6 rounded-xl shadow-md shadow-cyan-500/20 text-left"
                  >
                    <h3 className="text-lg font-bold text-white mb-2">

                      {(
                        <div className="flex flex-row gap-1 text-sm">
                          <a className="text-md" href={project.link} target="_blank" rel="noreferrer">
                            {project.title}
                          </a>
                          <Stack spacing={1} sx={{ alignItems: 'center' }}>
                            <Stack direction="row" spacing={0}>
                              {project.isCompleted ? <Chip label="Completed" className="scale-75" color="success" /> : <Chip className="scale-75" label="Working" color="primary" />}

                            </Stack>

                          </Stack>

                        </div>
                      )}
                    </h3>
                    <p className="text-gray-300 text-sm lg:text-sm">{project.description}</p>
                  </motion.div>
                ))}
              </div>
            </section> */}





          </div>


          {/* ChatSection */}

          <div
            className={
              "chatApp lg:border-l-1 border-b-4 lg:border-r-4 border-b-black lg:border-r-black lg:border-l-black w-screen  lg:w-[40vw] flex flex-col h-[50vh] "}
          >
            <div className="uppertext w-full bg-[#F7C236] text-black flex flex-row justify-between px-10 py-1   items-center">
              <h1 className="text-sm normalFont text-center py-2">
                Let's Talk Real Time
              </h1>
              {/* <h1><span className="text-xl text-green-600 font-extrabold animate-ping">o </span> {onlineUsers} Online Users</h1> */}



            </div>

            <div
              ref={chatBoxRef}
              className="flex-1 bg-[#F8F4F1]  overflow-y-auto  px-4 py-2 text-black"
              style={{ scrollbarWidth: "none" }}
            >
              {IsDataLoading ? (
                <div className="flex items-center justify-center h-full">
                  <Loader />
                </div>
              ) : (
                chat.map((msg: any, i) => (
                  <div
                    key={i}
                    className="textArea flex flex-row mb-2 justify-between items-center px-1"
                  >
                    <div className="mdgsection w-[90vw] min-sm:w-[20vw] flex flex-row">
                      <span className="text-sm text-slate-400 pr-5">
                        {msg.name || msg.sendBy || "Anonymous"}:
                      </span>
                      <h1 className="texty text-black text-sm">
                        {msg.text ?? msg}
                      </h1>
                    </div>
                    <p className="text-[10px] min-sm:text-[12px] italic text-gray-600">
                      {msg.createdAt
                        ? new Date(msg.createdAt).toLocaleString("en-US", {
                          month: "long",
                          day: "numeric",
                          hour: "numeric",
                          minute: "2-digit",
                          hour12: true,
                        })
                        : "Just now"}
                    </p>
                    <p>{msg.connectedSocket}</p>
                  </div>
                ))
              )}
            </div>

            {/* Fixed Chat Input */}
            <div className="inpsec flex w-screen lg:w-full flex-row justify-center gap-2 p-2 bg-[#F7C236]">
              <input
                ref={inpRefName}
                className="w-[30vw] lg:text-md text-xs lg:cursor-none min-sm:w-[8vw] h-[5vh] bg-slate-600 px-6 border-white text-white"
                type="text"
                placeholder="Name"
              />
              <input
                ref={inpRefMsg}
                onKeyDown={handleKeyDown}
                onChange={(e) => setMessage(e.target.value)}
                className="w-[55vw] lg:text-md text-xs  lg:cursor-none min-sm:w-[17vw] bg-slate-600 px-12 text-white"
                type="text"
                placeholder="Enter Your Message"
              />
              <button
                onClick={handleclick}
                className="bg-green-500 text-center flex justify-center items-center lg:cursor-none text-white w-[10vw] min-sm:w-[5vw]"
              >
                <BsSend scale={1.5} />
              </button>
            </div>
          </div>
        </div>


        {/* Blogs Section */}

        <div className="blogsSection h-auto w-screen">

          <div className="topText w-screen text-center">

            <h1 className="my-10 text-2xl anton-sc-regular">My top blogs</h1>

          </div>

          <div className="blogsCard ">

            <div className="forLargeDevice hidden lg:flex flex-row justify-evenly items-center w-screen">
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <h1 className="lg:cursor-none animate-bounce">View More →</h1>

            </div>

            <div className="forMobile flex flex-col justify-center items-center h-auto w-screen gap-10 lg:hidden">
              <BlogCard />
              <BlogCard />
              <h1 className="lg:cursor-none animate-bounce">View More →</h1>


            </div>


          </div>




        </div>

        {/* About me Section */}

        <div className="aboutMeSection  h-auto w-screen flex flex-col lg:flex-row lg:justify-evenly justify-start items-center">



          <div id="about_me" className="gap-5 w-screen overflow-scroll lg:overflow-hidden  overflow-x-hidden  lg:h-[60vh] h-auto  flex lg:justify-center justify-start items-center  text-center py-10  lg:px-4  ">

            <div className="mt-3 lg:w-[50vw] w-screen">


              <h1 className="text-start text-slate-800 px-10 paraFont py-2">Hello World , This is <br></br><span className="normalFont text-4xl font-extrabold">Binod Sharma</span><br></br> An aspiring and  multidisciplinary Software Developer Engineer from Nepal. Currently, I am pursuing my Bsc. CSIT at Patan Mutliple Campus. I have high urge to build projects that doesn't even make sense. All I do is put all Creativity and Logics for best outcomes.<br></br><br></br>Behind Programming I have several hobbies like <br></br>- Competitive Programming<br></br>- Reading Novels and manga<br></br>- Playing Chess<br></br>- Touring in Bike<br></br>- Doing Maths and Physics<br></br>- Listening Music<br></br>- Photography<br></br>- Watching Anime </h1>




            </div>

          </div>

          {/* Social Handle Section */}

          <div className=" gap-5 text-slate-800 lg:w-[50vw] w-screen flex justify-start items-center lg:h-auto    text-center">

            <div className="flex flex-col px-5">

              <Link target="_blank" href={"https://www.facebook.com/binod.sharma.616611/"} className="oneByone flex flex-row items-center mx-5 my-2 gap-3">
                <img src={images.facebook.src} className="h-8" alt="" />
                <h1 className="paraFont"> /Binod Sharma </h1>
              </Link>
              <Link target="_blank" href={"https://www.instagram.com/the_binodd"} className="oneByone flex flex-row items-center mx-5 my-2 gap-3">
                <img src={images.instagram.src} className="h-8" alt="" />
                <h1 className="paraFont"> /the_binodd </h1>
              </Link>
              <Link target="_blank" href={"https://www.linkedin.com/in/binoddsharma"} className="oneByone flex flex-row items-center mx-5 my-2 gap-3">
                <img src={images.linkedin.src} className="h-8" alt="" />
                <h1 className="paraFont"> /Binod Sharma </h1>
              </Link>
              <Link target="_blank" href={"https://x.com/the_binodd"} className="oneByone flex flex-row items-center mx-5 my-2 gap-3">
                <img src={images.twitter.src} className="h-8" alt="" />
                <h1 className="paraFont"> /the_binod </h1>
              </Link>
              <Link target="_blank" href={"https://www.youtube.com/@binod_docs"} className="oneByone flex flex-row items-center mx-5 my-2 gap-3">
                <img src={images.youtube.src} className="h-8" alt="" />
                <h1 className="paraFont"> /binoodx </h1>
              </Link>
              <Link target="_blank" href={"https://github.com/binnoodx"} className="oneByone flex flex-row items-center mx-5 my-2 gap-3">
                <img src={images.github.src} className="h-8" alt="" />
                <h1 className="paraFont"> /binnoodx </h1>
              </Link>
              <Link target="_blank" href={"https://www.tiktok.com/@binodx_"} className="oneByone flex flex-row items-center mx-5 my-2 gap-3">
                <img src={images.tiktok.src} className="h-8" alt="" />
                <h1 className="paraFont"> /binodx_ </h1>
              </Link>
              <Link target="_blank" href={"https://www.pinterest.com/thebinodd/_"} className="oneByone flex flex-row items-center mx-5 my-2 gap-3">
                <img src={images.pinterest.src} className="h-8" alt="" />
                <h1 className="paraFont"> /the_binod </h1>
              </Link>




            </div>

          </div>



        </div>

        {/* Resources Section */}

        <section id="resources_section" className=" mt-10 mb-20 w-screen border-white flex justify-center items-center  text-center">

          <div className="space-y-5 lg:w-[65vw]  lg:mx-10 mx-2 my-2">
            <details className="group [&amp;_summary::-webkit-details-marker]:hidden">
              <summary className="flex lg:cursor-none items-center justify-between gap-4 border-2 border-black bg-white px-4 py-3 font-medium text-gray-900 shadow-[4px_4px_0_0] hover:bg-yellow-100 focus:bg-yellow-100 focus:outline-0">
                <span className="font-semibold text-xs lg:text-md">Learn Website Development</span>

                <svg className="size-5 shrink-0 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>


              <div className="webResources flex flex-col">


                <div className="firstRow">
                  <div className="p-4 flex flex-row gap-3 justify-evenly item-start">

                    <Link href="https://youtube.com/playlist?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&si=y32HHCcRYFuaKSmA" target="_blank" className="learnWebDev flex flex-col gap-3 items-start justify-start">
                      <img src="https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCKktmHuXV_macV6MoUwhKxwzXJ7w" className="lg:h-27 lg:w-48 h-9 w-16" alt="Link" />
                      <p className=" text-xs lg:text-sm">🔗 Learn Full Stack Web Dev</p>


                    </Link>
                    <Link href="https://youtube.com/playlist?list=PLu71SKxNbfoCXO80Z4miZHTL5GxfFbz7A&si=nMAy8Eaw9kY2MqxE" target="_blank" className="learnWebDev flex flex-col gap-3 items-start justify-start">
                      <img src="https://i.ytimg.com/vi/3BEn2E9PvBM/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLATU7lpzVG7UM6sIVJ0EP-vZcRzJw" className="lg:h-27 lg:w-48 h-9 w-16" alt="Link" />
                      <p className=" text-xs lg:text-sm">🔗 Learn Web Authentication</p>


                    </Link>
                    <Link href="https://youtube.com/playlist?list=PLt5mNkGuWcuWbFcwT8V5a_BpLVa1AVXD4&si=LUAHVcsFs2ye-G0e" target="_blank" className="learnWebDev flex flex-col gap-3 items-start justify-start">
                      <img src="https://i.ytimg.com/vi/cr1XaYBqlhs/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAzi5fJY8_J6KlN6eX3cabuxOcjcw" className="lg:h-27 lg:w-48 h-9 w-16" alt="Link" />
                      <p className=" text-xs lg:text-sm">🔗 Learn Chat App with Socket IO</p>


                    </Link>
                    <Link href="https://youtu.be/q8EevlEpQ2A?si=q6zM0VztZJuQ8KYB" target="_blank" className="learnWebDev flex flex-col gap-3 items-start justify-start">
                      <img src="https://i.ytimg.com/vi/q8EevlEpQ2A/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLA3wvZ2tf440prOd9AGo4PhiRVUqw" className="lg:h-27 lg:w-48 h-9 w-16" alt="Link" />
                      <p className=" text-xs lg:text-sm">🔗 Learn Git and Github</p>


                    </Link>




                  </div>
                  <div className="secondRow">
                    <div className="p-4 flex flex-row gap-3 justify-evenly item-start">

                      <Link href="https://youtube.com/playlist?list=PLUcsbZa0qzu0gVRFlVfscqjD84TqMssOt&si=8-nnHuR2oyGe0KZH" target="_blank" className="learnWebDev flex flex-col gap-3 items-start justify-start">
                        <img src="https://i.ytimg.com/pl_c/PLUcsbZa0qzu0gVRFlVfscqjD84TqMssOt/studio_square_thumbnail.jpg?sqp=CO6-v8kG-oaymwEICIAKENAFSFqi85f_AwYI3tvCwwY=&rs=AOn4CLAFl81pPQrL9aIcPNky4u65HLdXOw" className="lg:h-27 lg:w-48 h-9 w-16" alt="Link" />
                        <p className=" text-xs lg:text-sm">🔗 Learn Java Spring Bootv</p>


                      </Link>
                      <Link href="https://youtu.be/ig26iRcMavQ?si=ohYLpvSPcI1N4bOT" target="_blank" className="learnWebDev flex flex-col gap-3 items-start justify-start">
                        <img src="https://i.ytimg.com/vi/ArmPzvHTcfQ/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA8QseBspGKnXKVkc9vS1fQ-yoqwA" className="lg:h-27 lg:w-48 h-9 w-16" alt="Link" />
                        <p className=" text-xs lg:text-sm">🔗 Advance Web Project</p>


                      </Link>
                      <Link href="https://youtube.com/playlist?list=PLjiHFwhbHYlEmPhn68XdG2p2k4X47XR-8&si=BE7IFajYHK1bl7yQ" target="_blank" className="learnWebDev flex flex-col gap-3 items-start justify-start">
                        <img src="https://i.ytimg.com/vi/BOt3MNB71gI/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAMChmO3IQL0gfGfqQMQmD3Op08CQ" className="lg:h-27 lg:w-48 h-9 w-16" alt="Link" />
                        <p className=" text-xs lg:text-sm">🔗 Learn UI/UX Design</p>


                      </Link>
                      <Link href="https://youtu.be/JmpDGMgRFfo?si=jyVamlLdNkMkOBzF" target="_blank" className="learnWebDev flex flex-col gap-3 items-start justify-start">
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
                <span className="font-semibold text-xs lg:text-md">Learn App Development (React Native)</span>

                <svg className="size-5 shrink-0 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>

              <div className="p-4 flex flex-row gap-3 justify-start item-start">

                <Link href="https://youtu.be/CzJQEstIiEI?si=AI86ghQYsssVHDNw" target="_blank" className="learnWebDev flex flex-col gap-3 items-start justify-start">
                  <img src="https://i.ytimg.com/vi/ZBCUegTZF7M/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBf4c4C8CtzjjIRjTxeTVBydv4p7Q" className="lg:h-27 lg:w-48 h-9 w-16" alt="Link" />
                  <p className=" text-xs lg:text-sm">🔗 Learn React Native</p>


                </Link>




              </div>
            </details>

            <details className="group [&amp;_summary::-webkit-details-marker]:hidden">
              <summary className="flex lg:cursor-none items-center justify-between gap-4 border-2 border-black bg-white px-4 py-3 font-medium text-gray-900 shadow-[4px_4px_0_0] hover:bg-yellow-100 focus:bg-yellow-100 focus:outline-0">
                <span className="font-semibold text-xs lg:text-md">Learn Python</span>

                <svg className="size-5 shrink-0 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>

              <div className="p-4 flex flex-row gap-3 justify-start item-start">

                <Link href="https://youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&si=v2yF1Y-QylPBza0c" target="_blank" className="learnWebDev flex flex-col gap-3 items-start justify-start">
                  <img src="https://i.ytimg.com/vi/7wnove7K-ZQ/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDMirEJX-r2pxI5nylJWpyclDDEcg" className="lg:h-27 lg:w-48 h-9 w-16" alt="Link" />
                  <p className=" text-xs lg:text-sm">🔗 Learn Basics of Python</p>


                </Link>





              </div>
            </details>
            <details className="group [&amp;_summary::-webkit-details-marker]:hidden">
              <summary className="flex lg:cursor-none items-center justify-between gap-4 border-2 border-black bg-white px-4 py-3 font-medium text-gray-900 shadow-[4px_4px_0_0] hover:bg-yellow-100 focus:bg-yellow-100 focus:outline-0">
                <span className="font-semibold text-xs lg:text-md">Learn Data Structure and Algorithm using Python</span>

                <svg className="size-5 shrink-0 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>

              <div className="p-4 flex flex-row gap-3 justify-start item-start">

                <Link href="https://youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&si=v2yF1Y-QylPBza0c" target="_blank" className="learnWebDev flex flex-col gap-3 items-start justify-start">
                  <img src="https://i.ytimg.com/vi/7wnove7K-ZQ/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDMirEJX-r2pxI5nylJWpyclDDEcg" className="lg:h-27 lg:w-48 h-9 w-16" alt="Link" />
                  <p className=" text-xs lg:text-sm">🔗 Learn Basics of Python</p>


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


              <div className="onebyone flex flex-col">
                <img src="https://upload.wikimedia.org/wikipedia/en/8/86/Karnali_Blues_by_Buddhisagar.jpg" className="h-32 lg:h-42" alt="" />
                <h1 className="text-sm">Karnali Blues</h1>
                <h2 className="text-sm italic">⭐ 9/10</h2>
              </div>
              <div className="onebyone flex flex-col">
                <img src="https://img.drz.lazcdn.com/static/np/p/3b4328af29f327c02b796ef67c2b1dc8.jpg_720x720q80.jpg" className="h-32 lg:h-42" alt="" />
                <h1 className="text-sm">Aithan</h1>
                <h2 className="text-sm italic">⭐ 6/10</h2>
              </div>
              <div className="onebyone flex flex-col">
                <img src="https://media.thuprai.com/front_covers/ek-sarko-maya_front.jpg" className="h-32 lg:h-42" alt="" />
                <h1 className="text-sm">Ek sarko Maya</h1>
                <h2 className="text-sm italic">⭐ 8/10</h2>
              </div>
              <div className="onebyone flex flex-col">
                <img src="https://static-01.daraz.com.np/p/5e839d6b91f98053bfb8bc2ad1c20859.jpg" className="h-32 lg:h-42" alt="" />
                <h1 className="text-sm">Radha</h1>
                <h2 className="text-sm italic">⭐ -/10</h2>
              </div>




            </div>
            <div className="flex gap-3 flex-row mx-5 my-2">


              <div className="onebyone flex flex-col">
                <img src="https://upload.wikimedia.org/wikipedia/en/d/d9/Summer_Love_%28novel%29.jpg" className="h-32 lg:h-42" alt="" />
                <h1 className="text-sm">SummerLove</h1>
                <h2 className="text-sm italic">⭐ 9/10</h2>
              </div>
              <div className="onebyone flex flex-col">
                <img src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1407659398i/22889351.jpg" className="h-32 lg:h-42" alt="" />
                <h1 className="text-sm">Saaya</h1>
                <h2 className="text-sm italic">⭐ 8/10</h2>
              </div>
              <div className="onebyone flex flex-col">
                <img src="https://upload.wikimedia.org/wikipedia/en/a/a0/Phirphire_%28novel%29.jpg" className="h-32 lg:h-42" alt="" />
                <h1 className="text-sm">Firfire</h1>
                <h2 className="text-sm italic">⭐ -/10</h2>
              </div>
              <div className="onebyone flex flex-col">
                <img src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1407659398i/22889351.jpg" className="h-32 lg:h-42" alt="" />
                <h1 className="text-sm">Saaya</h1>
                <h2 className="text-sm italic">⭐ 8/10</h2>
              </div>





            </div>
            <div className="flex gap-3 flex-row mx-5 mb-10">
              <div className="onebyone flex flex-col">
                <img src="https://upload.wikimedia.org/wikipedia/en/4/47/Seto_Dharti_by_Amar_Neupane.jpg" className="h-32 lg:h-42" alt="" />
                <h1 className="text-sm">Seto Dharti</h1>
                <h2 className="text-sm italic">⭐ -/10</h2>
              </div>


              <div className="onebyone flex flex-col">



                <img src="https://api.bookslandnepal.com/images/9789355434029-7405-1742210004644-1744121898646-1744123176821-1745659240929.jpeg?size=lg" className="h-32 lg:h-42" alt="" />
                <h1 className="text-sm">Ikagai</h1>
                <h2 className="text-sm italic">⭐ 8/10</h2>
              </div>
              <div className="onebyone flex flex-col">
                <img src="https://media.thuprai.com/front_covers/psychology-of-money.jpg" className="h-32 lg:h-42" alt="" />
                <h1 className="text-sm">..</h1>
                <h2 className="text-sm italic">⭐ 8/10</h2>
              </div>
              <div className="onebyone flex flex-col">
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
