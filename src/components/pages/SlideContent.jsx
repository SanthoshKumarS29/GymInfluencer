import React, { useEffect, useRef } from "react";

const SlideContent = () => {
  const logosRef1 = useRef(null);
  const logosRef2 = useRef(null);

  useEffect(() => {
    const duplicateCarousel = (ulRef) => {
      if (ulRef.current) {
        const ul = ulRef.current;
        const duplicate = ul.cloneNode(true);
        duplicate.setAttribute("aria-hidden", "true");
        ul.parentElement.appendChild(duplicate);
      }
    };

    duplicateCarousel(logosRef1);
    duplicateCarousel(logosRef2);
  }, []);

  return (
    <div className="space-y-8">
      <div className="relative h-24 flex flex-col justify-center overflow-hidden">
        <div className="w-full px-4 md:px-6 py-24">
          <div className="text-center">
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <ul  ref={logosRef1}  className="flex items-center justify-center md:justify-start [&_li]:mx-2 animate-infinite-scroll text-7xl lg:text-8xl">
                <li className="flex gap-4"><span>Motivation</span>/</li>
                <li className="flex gap-4"><span>Progress</span>/</li>
                <li className="flex gap-4"><span>Benefits</span>/</li>
                <li className="flex gap-4"><span>Transformation</span>/</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-16 flex flex-col justify-center overflow-hidden">
        <div className="w-full px-4 md:px-6 py-24">
          <div className="text-center">
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <ul  ref={logosRef2} className="flex items-center justify-center md:justify-start [&_li]:mx-2 animate-infinite-scroll-r text-7xl lg:text-8xl text-[#4d0f0f]">
                <li className="flex gap-4"><span>Strength</span>/</li>
                <li className="flex gap-4"><span>Progress</span>/</li>
                <li className="flex gap-4"><span>Work</span>/</li>
                <li className="flex gap-4"><span>Community</span>/</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideContent;