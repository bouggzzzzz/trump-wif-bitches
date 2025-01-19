import { Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-trump-red overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('/lovable-uploads/98df2ba3-0c97-4aab-b925-5195061e5497.png')] bg-center bg-cover"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="font-playfair text-6xl md:text-8xl font-bold text-trump-gold mb-6 animate-float">
          Trump wif Bitches
        </h1>
        <p className="font-inter text-xl md:text-2xl text-white mb-12">
          Bigger, Better, and Classier
          <Sparkles className="inline-block ml-2 text-trump-gold animate-sparkle" />
        </p>
        <button className="bg-trump-gold hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-full text-xl transform transition-transform hover:scale-105">
          Buy Now
        </button>
      </div>
    </div>
  );
};