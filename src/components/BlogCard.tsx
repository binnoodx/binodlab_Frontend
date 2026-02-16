import { ArrowUpRight, Clock, Eye, MessageCircleMore, ThumbsUp } from "lucide-react";

import Link from "next/link";

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  color: "yellow" | "pink" | "blue" | "lime" | "orange";
  link: string,
  likes?: number,
  views?: number,
  date?: string,
  author?: string,
  commentCount?: number
}

const colorClasses = {
  yellow: "bg-yellow-400",
  pink: "bg-pink-400",
  blue: "bg-blue-400",
  lime: "bg-lime-400",
  orange: "bg-orange-400",
};

const BlogCard = ({ title, excerpt, category, readTime, color, link, date, author  }: BlogCardProps) => {

  const handleGoToBlog = (link: string) => {
    window.location.href = `${link}`


  }

  return (
    <article
      onClick={() => handleGoToBlog(link)}
      className={`group  items-start cursor-none gap-5 min-w-[90vw] lg:min-w-[30vw] lg:w-[30vw] lg:min-h-[25vh] lg:h-auto overflow-hidden  border-[3px]  transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_hsl(0_0%_0%)]  `}
    >

      <div onClick={() => handleGoToBlog(link)} className={`${colorClasses[color]}  w-full border-b-[3px] border-foreground px-4 py-2 flex items-center justify-between gap-3`}>

        <h1 className="neoBrutalism uppercase">{category}</h1>
        


        <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>


      <div className={`p-6 flex flex-col  neoBrutalism justify-evenly h-auto `}>
        <h3 className={`font-bold mb-3 text-xl `}>
          {title}
        </h3>
        <p className={` text-md mb-3`}>
          {excerpt}
        </p>
        <p className="text-sm italic">Written on {date} by {author}</p>
         



      </div>
    </article>
  );
};

export default BlogCard;
