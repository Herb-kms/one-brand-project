'use client';

import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';

import {
  ShoppingBag,
  ArrowRight,
} from 'lucide-react';

export default function OneBrandLandingPage() {
  const { scrollYProgress } = useScroll();

  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.08]);
  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.25],
    [1, 0.65]
  );

  return (
    <motion.div
      key="home"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <section className="relative min-h-screen px-6 md:px-20 py-32 flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-16">
            <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-6">
              Future Nutrition Brand
            </p>

            <h2 className="text-5xl md:text-8xl font-semibold leading-[0.95] tracking-tight max-w-5xl">
              식사와 영양을
              <br />
              하나의 루틴으로.
            </h2>

            <p className="mt-8 text-lg text-gray-500 max-w-2xl leading-relaxed">
              One은 단순한 영양제가 아닌,
              식사 공백을 해결하기 위한 캡슐 기반 뉴트리션 푸드 시스템입니다.
            </p>
          </div>

          <motion.div
            style={{
              scale: heroScale,
              opacity: heroOpacity,
            }}
            whileHover={{
              y: -6,
              scale: 1.01,
            }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[3rem] overflow-hidden bg-[#e6e1d9] border border-black/5 shadow-2xl"
          >
            <img
              src="/one-product-main.png"
              alt="ONE Product"
              className="w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

            <div className="absolute bottom-10 left-10 text-white">
              <p className="text-sm uppercase tracking-[0.3em] opacity-70 mb-4">
                One System
              </p>

              <h3 className="text-4xl md:text-6xl font-semibold leading-tight">
                3 Moments.
                <br />
                1 Completion.
              </h3>
            </div>

            <div className="absolute top-8 right-8 flex gap-3">
              <button className="bg-white text-black px-6 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition duration-300 shadow-lg">
                Buy Now
                <ArrowRight size={16} />
              </button>

              <button className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-xl text-white flex items-center justify-center">
                <ShoppingBag size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}