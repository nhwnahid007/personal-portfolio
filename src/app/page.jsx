"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/myself.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-2 md:gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:mt-6 md:text-6xl font-bold">
            Web Developer
          </h1>
          {/* DESC */}
          <p className="text-sm md:text-xl">
          I am a passionate web developer specializing in React, Express, Firebase, Node, MongoDb. With a strong foundation in web development, I enjoy building dynamic and responsive web applications.I am committed to continuous learning and staying updated with the latest industry trends. Let&apos;s work together to bring your ideas to life!
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link href={'/portfolio'}>
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                View My Work
              </button>
            </Link>
            <Link href={'/contact'}>
              <button className="p-4 rounded-lg ring-1 ring-black">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
