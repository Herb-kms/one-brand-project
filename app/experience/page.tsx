'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ExperiencePage() {
    return (
        <motion.div
            key="experience"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen pt-32 px-6 md:px-20 w-full overflow-y-auto pb-32"
        >
            <div className="max-w-7xl mx-auto w-full">
                <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-6">
                    Experience
                </p>

                <h2 className="text-4xl md:text-7xl font-semibold leading-[1.1] tracking-tight mb-8">
                    직접 경험해보세요.
                </h2>

                <p className="text-xl text-gray-500 mb-16 max-w-2xl">
                    당신의 라이프스타일에 맞춘 트라이얼 패키지를 신청하고 새로운 영양의 세계를 경험하세요.
                </p>

                <div className="bg-[#e6e1d9] border border-black/5 p-12 md:p-20 rounded-[3rem] relative overflow-hidden flex flex-col justify-center">
                    <div className="max-w-xl z-10">
                        <h3 className="text-3xl font-medium mb-6">One 14-Day Starter Kit</h3>
                        <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                            가장 베이직한 단계부터 시작하세요. 2주간 몸의 변화를 기록하며 최적의 컨디션을 찾아가는 첫걸음입니다.
                        </p>
                        <button className="bg-black text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-3 hover:bg-gray-800 transition-colors shadow-xl">
                            신청하기 <ArrowRight size={18} />
                        </button>
                    </div>

                    <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#d1cbc1] rounded-full blur-3xl opacity-60" />
                    <div className="absolute top-10 right-20 w-48 h-48 bg-[#f3f1ec] rounded-full blur-2xl opacity-40" />
                </div>
            </div>
        </motion.div>
    );
}
