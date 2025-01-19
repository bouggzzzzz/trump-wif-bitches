import { Twitter, MessageCircle, Share2 } from "lucide-react";

export const Community = () => {
  return (
    <div className="bg-gradient-to-b from-trump-red to-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl md:text-5xl text-trump-gold text-center mb-12">Join The Movement</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <a href="#" className="group flex flex-col items-center p-6 bg-black bg-opacity-50 rounded-lg hover:bg-opacity-70 transition-all">
            <Twitter className="w-12 h-12 text-trump-gold mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-inter text-xl text-white mb-2">Twitter</h3>
            <p className="text-gray-400 text-center">Follow for updates</p>
          </a>
          <a href="#" className="group flex flex-col items-center p-6 bg-black bg-opacity-50 rounded-lg hover:bg-opacity-70 transition-all">
            <MessageCircle className="w-12 h-12 text-trump-gold mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-inter text-xl text-white mb-2">Telegram</h3>
            <p className="text-gray-400 text-center">Join the discussion</p>
          </a>
          <a href="#" className="group flex flex-col items-center p-6 bg-black bg-opacity-50 rounded-lg hover:bg-opacity-70 transition-all">
            <Share2 className="w-12 h-12 text-trump-gold mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-inter text-xl text-white mb-2">Reddit</h3>
            <p className="text-gray-400 text-center">Share the memes</p>
          </a>
        </div>
      </div>
    </div>
  );
};