'use client';

import { motion } from 'framer-motion';

export default function PhilosophyPage() {
    return (
        <motion.div
            key="philosophy"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen pt-32 px-6 md:px-20 w-full overflow-y-auto pb-32"
        >
            <div className="max-w-7xl mx-auto w-full">
                <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-6">
                    Brand Philosophy
                </p>

                <h2 className="text-4xl md:text-7xl font-semibold leading-[1.1] tracking-tight mb-16">
                    단순함의 미학, <br />그 이상의 영양.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg text-gray-500 leading-relaxed mb-32">
                    <div>
                        <p>
                            우리는 매일 바쁜 현대인을 위해 식사가 간편해지면서도 영양적으로는 완벽해야 한다고 믿습니다.
                            One은 가장 복잡한 영양의 균형을 가장 단순한 형태로 제공합니다.
                            최소한의 루틴으로 최대의 건강을 경험하세요.
                        </p>
                    </div>
                    <div>
                        <p>
                            먹는 것을 넘어선 생명력의 회복. 불필요한 성분을 덜어내고, 내 몸이 진정으로 필요로 하는 것만을 남겼습니다.
                            오직 하나, 당신의 하루를 완성하는 뉴트리션 시스템입니다.
                        </p>
                    </div>
                </div>

                <div className="w-full aspect-[21/9] bg-[#e6e1d9] rounded-[3rem] overflow-hidden relative shadow-md">
                    <img
                        src="/one-brand-img2.png"
                        alt="Brand Philosophy"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </motion.div>
    );
}
