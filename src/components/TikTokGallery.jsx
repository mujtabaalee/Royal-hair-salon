import React, { useState } from 'react';
import { Play, UserPlus, MessageCircle, Heart, Share2, X } from 'lucide-react';
import { motion } from 'framer-motion';

const TikTokGallery = () => {
  const videos = [
    { 
      id: '7580096954835684615', 
      title: 'Fresh Fade & Style', 
      likes: '1.5k', 
      comments: '50', 
      thumbnail: 'https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/ookYDfl1IENoIg6eIBSAFC9xIDjeAxl5MDx3A7~tplv-tiktokx-origin.image?dr=14575&x-expires=1774940400&x-signature=GwO0UlwnUnfwB9TQly19RBut3oc%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my',
      preview: 'https://v16-webapp-prime.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/oQIsxSlIjCeBkAj9lAEA0FEDk6DueYQoIf51no/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1080&bt=540&cs=2&ds=3&ft=-Csk_mauPD12No5B-d-UxZw5PY6e3wv25zcAp&mime_type=video_mp4&qs=14&rc=OWc7ZDw3N2g0ZTRnZmU2aEBpang0Omw5cmd4NzMzODczNEBgNWNiLjEvXzUxXmJeY2NfYSNwMmhmMmRjZmxhLS1kMTFzcw%3D%3D&btag=e000b8000&expire=1774941610&l=2026032915194516B3B7F59366ACA3A872&ply_type=2&policy=2&signature=4dc597b4216249a47442322fb2cc1d99&tk=tt_chain_token'
    },
    { 
      id: '7579268262660164882', 
      title: 'The Royal Experience', 
      likes: '2.8k', 
      comments: '134', 
      thumbnail: 'https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/ogifeFf5AF5G5D5dQEeGM4L1puERukuwAGFdQ9~tplv-tiktokx-origin.image?dr=14575&x-expires=1774940400&x-signature=d8NNk3D4nhaSQtfj6p0JoPrPYo4%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my',
      preview: 'https://v16-webapp-prime.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/o8D9HE5gfIeuMFlRdw2fh1RG75DEFGA4dkQeAG/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1386&bt=693&cs=0&ds=6&ft=-Csk_mauPD12No5B-d-UxZw5PY6e3wv25zcAp&mime_type=video_mp4&qs=4&rc=NDg6ZzplNmQ0NDVkMzU2NEBpM2hlOnY5cm1pNzMzODczNEBeYC41YDFfNS4xLy0zYTZiYSNlbWtyMmQ0Y2thLS1kMWBzcw%3D%3D&btag=e000b8000&expire=1774941603&l=2026032915194516B3B7F59366ACA3A872&ply_type=2&policy=2&signature=32640707e5492f6e02619e7a65f22488&tk=tt_chain_token'
    },
    { 
      id: '7562985461082230034', 
      title: 'Transformation Tuesday', 
      likes: '940', 
      comments: '42', 
      thumbnail: 'https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/o8B9OoRBHmeiEWiRmQIDFvAUiHgf9U41hX9IzB~tplv-tiktokx-origin.image?dr=14575&x-expires=1774940400&x-signature=X9RQ1t0qY9Dyb1dT9n%2BEeWaty%2FM%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my',
      preview: 'https://v16-webapp-prime.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/oMIGLCZfjIQaIKyiQgEoIeYdoPosQIAkeDOjAa/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1794&bt=897&cs=2&ds=3&ft=-Csk_mauPD12No5B-d-UxZw5PY6e3wv25zcAp&mime_type=video_mp4&qs=14&rc=cnF8b2hsc2d3SkBwaHIxaDFybndmNjY3PDg2NzQzaWdlZWc8OUBpMzdsdm45cm1rNDMzODczNEBjRl5Nc3FePmJKYSNvYF90aHFmOiNjLi8uYGJiNTYxL19jNS5fYSMzYmU0MmRrcDVhLS1kMTFzcw%3D%3D&btag=e000b8000&expire=1774941605&l=2026032915194516B3B7F59366ACA3A872&ply_type=2&policy=2&signature=0bf7ed7226c93be948f4481983830818&tk=tt_chain_token'
    }
  ];

  const [activeVideo, setActiveVideo] = React.useState(null);
  const [hoveredVideo, setHoveredVideo] = React.useState(null);

  return (
    <section id="tiktok" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative Gold Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-accent text-sm font-bold tracking-[0.3em] uppercase mb-4">Social Proof</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Join the Community</h2>
            <p className="text-white/60 max-w-xl font-sans">
              Stay updated with our latest transformations, grooming tips, and salon updates on TikTok. Follow over 10k style enthusiasts and get inspired for your next look.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center gap-4 p-4 bg-secondary rounded-xl border border-white/5">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xl">R</span>
              </div>
              <div>
                <h4 className="text-white font-bold leading-none">@royalhairsalon6</h4>
                <p className="text-white/40 text-xs">Royal Hair Salon Gujrat</p>
              </div>
              <a 
                href="https://www.tiktok.com/@royalhairsalon6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-4 p-2 bg-accent text-primary rounded-lg hover:bg-gold-light transition-colors duration-300"
              >
                <UserPlus size={18} fill="currentColor" />
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
              onClick={() => setActiveVideo(video.id)}
              className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[9/16] bg-black"
            >
              {/* Static Thumbnail */}
              <img 
                src={video.thumbnail} 
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hoveredVideo === video.id ? 'opacity-0' : 'opacity-100'}`} 
                alt={video.title} 
              />
              
              {/* 0.5s Video Preview (Actual TikTok Preview) */}
              {hoveredVideo === video.id && (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={video.preview} type="video/mp4" />
                </video>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 transform scale-75 group-hover:scale-100 transition-transform duration-500 delay-100">
                  <Play fill="white" className="ml-1" />
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                <h4 className="text-white font-bold mb-4 font-serif">{video.title}</h4>
                <div className="flex items-center gap-4 text-white text-xs">
                  <span className="flex items-center gap-1"><Heart size={14} fill="currentColor" /> {video.likes}</span>
                  <span className="flex items-center gap-1"><MessageCircle size={14} fill="currentColor" /> {video.comments}</span>
                  <span className="flex items-center gap-1 ml-auto"><Share2 size={14} /></span>
                </div>
              </div>

              <div className="absolute top-4 left-4 p-2 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 opacity-70 group-hover:opacity-100 transition-opacity">
                 <Play size={12} fill="white" className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Selection Modal */}
        {activeVideo && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setActiveVideo(null)}></div>
            <div className="relative w-full max-w-[450px] aspect-[9/16] bg-black rounded-3xl overflow-hidden border border-white/10 shadow-2xl animate-fade-in">
              <button 
                className="absolute top-4 right-4 z-[110] w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                onClick={() => setActiveVideo(null)}
              >
                <X size={24} />
              </button>
              <iframe
                src={`https://www.tiktok.com/embed/v2/${activeVideo}`}
                className="w-full h-full border-0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TikTokGallery;
