'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
    return (
        <motion.div
            key="about"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen pt-32 px-6 md:px-20 w-full overflow-y-auto pb-32"
        >
            <div className="max-w-7xl mx-auto w-full">
                <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-6">
                    About One
                </p>

                <h2 className="text-4xl md:text-7xl font-semibold leading-[1.1] tracking-tight mb-20">
                    우리가 걷는 길.
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: 'Innovation', desc: '영양소 흡수율을 극대화한 독자적인 기술력으로 몸의 밸런스를 되찾아줍니다.' },
                        { title: 'Purity', desc: '자연에서 유래한 프리미엄 원료만을 선별한 순수함을 담았습니다.' },
                        { title: 'Sustainability', desc: '지구와 공존하는 친환경 패키징과 제조 공정을 거칩니다.' }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -6 }}
                            className="bg-[#e6e1d9] p-10 rounded-[2rem] border border-black/5"
                        >
                            <h3 className="text-2xl font-medium mb-4">{item.title}</h3>
                            <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
