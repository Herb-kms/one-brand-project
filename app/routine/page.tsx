'use client';

import { motion } from 'framer-motion';

export default function RoutinePage() {
    return (
        <motion.div
            key="routine"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen pt-32 px-6 md:px-20 w-full overflow-y-auto pb-32"
        >
            <div className="max-w-7xl mx-auto w-full">
                <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-6">
                    Daily Routine
                </p>

                <h2 className="text-4xl md:text-7xl font-semibold leading-[1.1] tracking-tight mb-20">
                    하루를 디자인하다.
                </h2>

                <div className="grid grid-cols-1 gap-12 relative before:absolute before:inset-0 before:ml-[28px] md:before:ml-[50%] before:-translate-x-px md:before:mx-auto before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-400 before:to-transparent">
                    {[
                        { tag: '08:00 AM', title: 'Awake', desc: '아침을 여는 산뜻한 시작. 몸을 깨우는 필수 미네랄과 비타민.' },
                        { tag: '01:00 PM', title: 'Focus', desc: '지치기 쉬운 오후, 뇌에 에너지를 공급하고 집중력을 극대화.' },
                        { tag: '10:00 PM', title: 'Rest', desc: '긴 하루의 끝, 근육 이완과 숙면을 돕는 심야 케어.' }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative flex flex-col md:flex-row items-start md:items-center justify-between md:justify-normal md:odd:flex-row-reverse group border-none"
                        >
                            <div className="flex items-center justify-center w-14 h-14 rounded-full border-4 border-[#f3f1ec] bg-black text-white z-10 shrink-0 md:group-odd:-ml-7 md:group-even:-mr-7 mb-4 md:mb-0">
                                <span className="text-sm">{idx + 1}</span>
                            </div>
                            <div className="w-full md:w-[calc(50%-2rem)] bg-[#e6e1d9] border border-black/5 p-8 rounded-[2rem] hover:shadow-lg transition-shadow">
                                <span className="inline-block px-3 py-1 bg-white border border-black/10 text-xs font-semibold rounded-full text-gray-600 mb-4">{item.tag}</span>
                                <h3 className="text-2xl font-medium mb-2">{item.title}</h3>
                                <p className="text-gray-500">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
