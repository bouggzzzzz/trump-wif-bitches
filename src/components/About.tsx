import { DollarSign } from "lucide-react";

export const About = () => {
  return (
    <div className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <DollarSign className="w-16 h-16 text-trump-gold mx-auto mb-8 animate-float" />
          <h2 className="font-playfair text-4xl md:text-5xl text-trump-gold mb-8">About The Coin</h2>
          <p className="font-inter text-xl text-white mb-6 leading-relaxed">
            Trump wif Bitches is the ultimate satirical memecoin inspired by the golden age of Trump memes and internet humor. It's bold, unapologetic, and here to shake up the blockchain.
          </p>
          <p className="font-inter text-lg text-gray-400 italic">
            Because sometimes, the best investments are the ones that make you laugh.
          </p>
        </div>
      </div>
    </div>
  );
};