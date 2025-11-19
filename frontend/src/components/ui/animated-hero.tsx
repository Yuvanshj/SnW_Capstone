import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, LogInIcon } from "lucide-react";
import { Button } from "../ui/button";

import { Link } from "react-router";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["boundless", "luminous", "connected"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full flex items-center justify-center scale-120">
      <div className="container mx-auto">
            <div className="relative w-full">
              <div className="hero-backdrop" />
              <div className="hero-content-wrapper">
                <div className="flex gap-8 pt-6 pb-6 lg:pt-8 lg:pb-8 items-center justify-center flex-col">

          <div className="w-full flex items-center justify-center">
            <div>
              <div className="tomodachi-title mb-0 opacity-89">Tomodachi</div>
            </div>
          </div>

          <div className="flex gap-4 flex-col">
            
            <h1 className="text-5xl md:text-6xl max-w-2xl text-center font-regular main-heading">
              <span className="text-white opacity-50">Enter a world that’s</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-spektr-cyan-400 backdrop-blur-2xl backdrop-brightness-90 px-2 md:px-4 py-1 md:py-2 rounded-lg"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Tomodachi is a next-generation social platform where friendships, creativity, and communities shine brighter than ever.
            </p>
          </div>
          <div className="flex flex-row gap-3">

            <Link to={"/login"}>
              <Button size="lg" className="gap-4 btn" variant="outline">
                Explore Now <LogInIcon className="w-4 h-4" />
              </Button>
            </Link>

            <Link to={"/signup"}>
              <Button size="lg" className="gap-4 btn" variant={"link"}>
                Sign up here <MoveRight className="w-4 h-4" />
              </Button>
            </Link>

          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export { Hero };
