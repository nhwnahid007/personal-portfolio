"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });



  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:px-12 lg:px-20 xl:px-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/about.png"
              alt=""
              width={172}
              height={172}
              className="w-64 h-64 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
             Myself Md. Nahidul  Islam. Currently I am studying Bsc in Computer Science and Engineering at daffodil international universty. I am from Chapainawabganj, Rajshahi. I have completed my SSC in 2015 and completed HSC in 2017.Tavelling,photography reading books is my hobby.Also I have passion for programming, sports, articles writing and video games. I have skills on excellent planning, strong leadership and communication.I want to become a good person and I want a decent career in development sector. 
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
            Thank you very much.
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
            <svg xmlns="http://www.w3.org/2000/svg" width="180" height="172" viewBox="0 0 220 192" fill="none">
  <path d="M26 190C26 175.612 17.1183 160.815 10.5556 148.333C6.1411 139.937 4.33687 131.401 1.77778 122.444C0.54446 118.128 3.81038 126.439 5.11111 128.111C11.6725 136.547 19.9564 143.435 27.1111 151.333C31.7257 156.427 37.0675 161.189 41.3333 166.556C42.7536 168.342 46.1438 174.87 46 169.333C45.7957 161.468 42.2111 153.885 40.6667 146.222C39.3319 139.6 38.5452 133.1 36.4444 126.667C34.6031 121.028 34.2274 111.918 34 105.778C33.8981 103.026 34 95.1839 34 102C34 105.768 35.3569 110.878 36.2222 114.556C39.9092 130.225 43 145.841 43 162C43 164.137 45.7988 171.764 46 168.444C46.3626 162.462 51.7082 157.544 52 152C52.1744 148.686 53.1116 143.47 55.4444 141C57.2271 139.113 58.1194 139.087 58 136.222C57.9201 134.304 55.6598 139.344 55.2222 140C53.0793 143.214 52.4665 157.652 56 159.222C64.4479 162.977 67 152.663 67 146.222C67 141.548 66.6468 138.647 63.2222 135.222C58.7534 130.753 60 137.325 60 140.778C60 144.707 61.1502 148.378 64.2222 151C67.9611 154.192 79.6194 163.729 85.2222 158.333C91.4771 152.31 84.636 137.616 82 131.667C77.8218 122.236 71.289 110.403 71 100C70.806 93.0166 68.564 86.3019 65 80.2222C62.9043 76.6472 65.6143 82.4858 66.2222 83.4444C68.4545 86.9646 69.5645 91.3763 71.2222 95.2222C78.103 111.186 85.332 126.834 92.5556 142.556C93.1184 143.781 93.8659 147.675 94 146.333C94.2975 143.359 94 140.214 94 137.222C94 132.148 94 127.074 94 122C94 114.222 101.917 123.705 103.778 126C106.741 129.654 111.587 133.853 116.222 131C121.386 127.822 121 127.724 121 121.222C121 117.455 119.749 115.37 119 112C118.348 109.064 113.41 103.966 111.222 101.778C109.748 100.304 110.957 113.202 112 115.778C114.797 122.688 119.643 123 126.444 123C130.789 123 135.453 123.499 139.778 123C142.151 122.726 141 114.058 141 112.444C141 100.866 136.826 90.003 136 78.4444C135.734 74.7215 132.134 72.3865 132 68.7778C131.911 66.3775 132 63.9574 132 61.5556C132 53.7037 132 45.8518 132 38C132 34.9099 132.867 44.223 134.222 47C137.207 53.1162 140.784 58.5551 143.222 65C145.163 70.1302 147.049 74.6788 150.222 79.2222C152.423 82.373 155.437 86.0597 156 90C156.101 90.7045 157.747 93.4408 157.556 93.3333C154.273 91.487 151.625 85.262 149.222 82.4444C146.535 79.2944 142.802 73.1098 138 75.7778C133.388 78.3399 135 86.6019 135 91C135 99.7818 133.91 104.866 144.333 105C153.257 105.114 155.906 104.162 160.556 96.7778C163.366 92.3141 164.1 85.4747 164.778 80.2222C165.024 78.3136 164.809 62.3665 165 70.7778C165.109 75.5772 168.256 83.2872 174 83C178.826 82.7587 178.578 74.821 179.778 71.2222C180.845 68.0208 180 63.3699 180 60C180 58.0726 179.786 63.9005 180.222 65.7778C180.666 67.6858 183.569 70.8981 185.222 72C187.041 73.2124 198.748 77.6504 199.778 74.3333C201.396 69.1202 200.042 60.6695 199.556 55.4444C198.935 48.7715 198.527 41.5385 196 35.2222C193.384 28.6823 191.409 21.8616 187.222 16C184.709 12.481 182.369 8.2939 180.444 4.44444C178.075 -0.295355 178.284 1.43518 179.444 5.66666C182.104 15.3656 187.235 25.4595 191.556 34.5556C194.315 40.365 193.272 47.1854 197 52.7778C199.859 57.0662 200.463 61.5489 206.778 62C210.476 62.2642 214.295 62 218 62" stroke="black" stroke-width="3" stroke-linecap="round"/>
</svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                HTML
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>

              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>

              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Firebase
              </div>

              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>

              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>

              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Vite
              </div>

              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              Education
            </motion.h1>
            {/* Education LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* Education LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* Education TITLE */}
                  <div className="bg-white text-center p-3 font-semibold rounded-b-lg rounded-s-lg">
                    BSC In CSE
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                   Daffodil International University
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2019 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Diu
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* Education LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white text-center p-3 font-semibold rounded-b-lg rounded-s-lg">
                    HSC
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                   Shahid AHM Kamaruzzaman Govt Degree College
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2017{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    SKRC
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="text-center bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    SSC
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                   Shibganj Govt Model High School
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2015
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
