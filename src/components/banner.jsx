'use client';
import { ParallaxBanner } from 'react-scroll-parallax';

export default function Banner() {
  return (
    <ParallaxBanner
      layers={[
        { image: './img.png', speed: -20 },
        
        { image: './img2.png', speed: 0 },
        {
          speed: -20,
          children: (
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-8xl text-slate-600 font-semi">Parallax Effect</h1>
            </div>
          ),
        },
      ]}
      className="aspect-[2/1]"
    />
  );
}