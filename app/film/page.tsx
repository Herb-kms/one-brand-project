'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function FilmPage() {
    return (
        <motion.div
            key="film"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen pt-32 px-6 md:px-20 w-full overflow-y-auto pb-32"
        >
            <div className="max-w-7xl mx-auto w-full">
                <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-6">
                    Brand Film
                </p>

                <h2 className="text-4xl md:text-7xl font-semibold leading-[1.1] tracking-tight mb-16">
                    One, 이야기.
                </h2>

                <motion.div
                    whileHover={{ scale: 0.99 }}
                    className="relative w-full aspect-video bg-[#1a1a1a] rounded-[3rem] overflow-hidden group cursor-pointer shadow-xl border border-black/10"
                >
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 transition-transform group-hover:scale-105">
                        <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white mb-4 group-hover:bg-white/20 transition-colors">
                            <Play className="ml-1" size={32} fill="currentColor" />
                        </div>
                        <p className="text-white/60 tracking-widest text-sm uppercase">Play Film</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-40 mix-blend-multiply" />
                </motion.div>

                <div className="mt-16 grid md:grid-cols-2 gap-8 text-gray-500 text-lg">
                    <p>
                        단순한 영상이 아닌, 우리가 믿는 가치와 기술력이 어떻게 하나의 시스템으로
                        탄생하게 되었는지를 보여줍니다.
                    </p>
                    <p>
                        디지털 디바이스의 복잡함 속에서, 역설적으로 가장 아날로그적인 우리 몸을
                        위해 가장 진보된 영양을 선사하는 여정을 확인하세요.
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
