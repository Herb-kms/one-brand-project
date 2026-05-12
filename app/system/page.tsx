'use client';

import { motion } from 'framer-motion';
import { Layers, Activity, Zap } from 'lucide-react';

export default function SystemPage() {
    return (
        <motion.div
            key="system"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen pt-32 px-6 md:px-20 w-full overflow-y-auto pb-32"
        >
            <div className="max-w-7xl mx-auto w-full">
                <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-6">
                    Product System
                </p>

                <h2 className="text-4xl md:text-7xl font-semibold leading-[1.1] tracking-tight mb-16">
                    완벽한 분해와 조립.
                </h2>

                <div className="space-y-6">
                    {[
                        { icon: <Layers size={24} />, title: 'Core Nutrition', desc: '생명 유지에 필수적인 기초 영양 패키지' },
                        { icon: <Activity size={24} />, title: 'Energy Boost', desc: '신진대사를 활성화하고 활력을 부여하는 시스템' },
                        { icon: <Zap size={24} />, title: 'Recovery', desc: '일상이 끝난 후 깊은 휴식을 위한 회복 포뮬라' }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.01 }}
                            className="group flex flex-col md:flex-row items-start md:items-center p-8 bg-[#e6e1d9] border border-black/5 rounded-[2rem] gap-8 shadow-sm transition-all hover:shadow-md"
                        >
                            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-black shadow-inner shrink-0">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-medium mb-2 group-hover:text-gray-700 transition-colors">{item.title}</h3>
                                <p className="text-gray-500">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
