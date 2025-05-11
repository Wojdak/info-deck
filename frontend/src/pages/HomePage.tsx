// src/pages/HomePage.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion, useInView } from "framer-motion";
import { CardBody, CardWithGridEllipsis } from "@/components/CardWithGridEllipsis";
import { FaArrowRight } from "react-icons/fa";

const TypingEffect: React.FC<{ text: string }> = ({ text }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.h1
      ref={ref}
      className="text-6xl font-extrabold text-white mb-4 tracking-tight leading-tight text-center"
      style={{ textShadow: "0 0 7px #6b46c1, 0 0 17px #6b46c1" }}>
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.05, delay: index * 0.05 }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col bg-[#09090b] text-white">
      {/* Main Content Area */}
      <div className="flex-grow flex flex-col items-center justify-start px-4 pt-12 pb-8">
        <div className="max-w-5xl w-full space-y-8 mt-12">
          <div className="text-center">
            <TypingEffect text="Welcome to InfoDeck" />
            <p className="text-lg text-gray-400 max-w-xl mx-auto">
              Personalize your dashboard with modular panels for sports, games, movies, and more.
            </p>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <Button 
              size="lg" 
              className="px-8 py-3 text-lg bg-purple-600 text-white hover:bg-purple-500 rounded-md shadow-md transition-transform duration-200" 
              rightIcon={<FaArrowRight />}
            >
              Try it now
            </Button>
          </div>

          <Separator className="my-8 bg-white opacity-20" />

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <CardWithGridEllipsis className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:scale-[1.02]">
              <CardBody 
                title="Modular Panels" 
                description="Customize your dashboard with modular panels tailored to your interests." 
              />
            </CardWithGridEllipsis>

            <CardWithGridEllipsis className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:scale-[1.02]">
              <CardBody 
                title="Extensive Data Sources" 
                description="Choose from a wide range of data sources and APIs." 
              />
            </CardWithGridEllipsis>

            <CardWithGridEllipsis className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:scale-[1.02]">
              <CardBody 
                title="Multi-Platform Support" 
                description="Access your dashboard on any device, whether it's your phone, tablet, or desktop." 
              />
            </CardWithGridEllipsis>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
