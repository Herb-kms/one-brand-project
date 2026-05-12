'use client';

import { motion } from 'framer-motion';

export default function ContactPage() {
    return (
        <motion.div
            key="contact"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen pt-32 px-6 md:px-20 w-full overflow-y-auto pb-32"
        >
            <div className="max-w-7xl mx-auto w-full">
                <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-6">
                    Contact
                </p>

                <h2 className="text-4xl md:text-7xl font-semibold leading-[1.1] tracking-tight mb-16">
                    연락주세요.
                </h2>

                <div className="grid md:grid-cols-2 gap-16">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                            <input type="text" className="w-full bg-[#e6e1d9] border border-black/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/20 transition-colors" placeholder="성함을 입력해주세요." />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input type="email" className="w-full bg-[#e6e1d9] border border-black/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/20 transition-colors" placeholder="hello@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                            <textarea rows={5} className="w-full bg-[#e6e1d9] border border-black/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/20 transition-colors resize-none" placeholder="문의 내용을 남겨주세요." />
                        </div>
                        <button type="button" className="w-full bg-black text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors shadow-lg shadow-black/10">
                            메시지 보내기
                        </button>
                    </form>

                    <div className="bg-[#e6e1d9] border border-black/5 p-12 rounded-[2rem] flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-medium mb-6 border-b border-black/10 pb-4">Our Office</h3>
                            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                                서울특별시 강남구 테헤란로 123<br />
                                스타트업 빌딩 14층<br />
                                One Brand Team
                            </p>
                            <h3 className="text-xl font-medium mb-6 border-b border-black/10 pb-4">Direct Contact</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                T. 02-1234-5678<br />
                                E. hello@onebrand.com
                            </p>
                        </div>
                        <div className="mt-12 text-sm text-gray-400">
                            © 2026 One Nutrition Inc. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
