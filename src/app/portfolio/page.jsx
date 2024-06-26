"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Medvantage",
    desc: "MedVantage: Your premier destination for all things health and wellness. Discover a vast selection of top-quality medicines, supplements, and healthcare essentials, all conveniently available at your fingertips. With MedVantage, your journey to better health begins here",
    img: "https://i.ibb.co/Y29MvYV/Screenshot-2024-06-24-044538.png",
    liveLink: "https://medvantage-mv.web.app",
    gitLink: "https://github.com/nhwnahid007/medvantage-client.git",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "VolunteerVerse",
    desc: "Welcome to VolunteerVerse, your premier platform for revolutionizing volunteer management. Our innovative tools facilitate seamless coordination, empowering you to find, engage, and mobilize volunteers effortlessly.",
    img: "https://i.ibb.co/6ssWYfc/Screenshot-2024-06-24-053940.png",
    liveLink: "https://volunteer-verse.web.app",
    gitLink: "https://github.com/nhwnahid007/volunteer-verse-client.git",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "TouristIQ",
    desc: "TouristIQ is your passport to seamless travel experiences. With personalized recommendations, comprehensive guides, interactive trip planning tools, a vibrant community, and real-time updates, TravelIQ empowers adventurers to explore the world confidently, connect with fellow travelers, and make every journey unforgettable.",
    img: "https://i.ibb.co/yXbb1hy/Screenshot-2024-06-24-054633.png",
    liveLink: "https://tourist-iq.web.app/",
    gitLink: "https://github.com/nhwnahid007/tourist-iq-client.git",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Prime Places",
    desc: "These features and characteristics position Prime Places as a premier destination for luxury estate seekers, offering unparalleled properties, services, and experiences in the world of upscale real estate.",
    img: "https://i.ibb.co/4sjPbMB/Screenshot-2024-06-24-055518.png",
    liveLink: "https://prime-places.web.app",
    gitLink: "https://github.com/nhwnahid007/prime-places.git",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-4xl md:text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-4 text-white text-center p-4">
                  <h1 className="text-lg font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-64 h-40 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px] mx-auto">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="w-64 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px] mx-auto">
                    {item.desc}
                  </p>
                  <div className="flex justify-center gap-4 mt-4">
  <Link href={item.liveLink}>
    <button className="p-2 text-2xl bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
      <FaExternalLinkAlt />
    </button>
  </Link>
  <Link href={item.gitLink}>
    <button className="p-2 text-2xl bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold rounded shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
      <FaGithub />
    </button>
  </Link>
</div>

                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-4xl md:text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Web Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
