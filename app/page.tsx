'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ShoppingBag, ArrowRight, Clock, Zap, Moon, CheckCircle2 } from 'lucide-react';

export default function OneBrandLandingPage() {
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.08]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.65]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="bg-[#fcfbf9] text-[#1c1c1c] min-h-screen font-sans selection:bg-[#d8cfc4] selection:text-black">

      {/* 1. Hero Section */}
      <section className="relative h-screen flex flex-col justify-center overflow-hidden">
        {/* Full-bleed Background Image */}
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/bg-final.png"
            alt="ONE Future Nutrition Product"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle overlay just enough for white text legibility, without hiding the product */}
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        {/* Hero Content - Middle Left Aligned */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-20 text-white flex items-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl text-left"
          >
            <p className="uppercase tracking-[0.3em] text-sm text-[#d8cfc4] mb-6 font-medium">
              Future Nutrition System
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-semibold leading-[1.1] tracking-tight mb-8 drop-shadow-lg">
              가장 명쾌한<br />솔루션.
            </h1>
            <p className="text-xl md:text-3xl font-medium text-gray-200 mb-6 drop-shadow-md">
              복잡한 건강관리를 끝내기 위한<br className="md:hidden" /> 단 하나의 솔루션.
            </p>
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed drop-shadow-md">
              ONE은 일상 속 복잡함을 줄이고,<br className="hidden md:block" />
              당신의 본질적인 삶에 집중할 수 있도록 고안된<br className="hidden md:block" />
              퓨처 뉴트리션 시스템입니다.
            </p>
          </motion.div>
        </div>

        <motion.div 

          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-6 md:left-20 flex flex-col items-start gap-3 z-10 text-white/70"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/70 to-transparent ml-2"></div>
          <span className="text-xs tracking-[0.2em] uppercase font-light">Scroll Down</span>
        </motion.div>
      </section>

      {/* 2. Insight */}
      <section className="py-32 px-6 md:px-20 bg-[#1c1c1c] text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="flex-1"
          >
            <p className="uppercase tracking-[0.2em] text-[#d8cfc4] text-sm mb-4">Insight</p>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight mb-10">
              건강하게 끼니를 챙기고 싶지만,<br />간편한 게 좋으니까.
            </h2>
            <div className="space-y-6">
              {[
                "현대인은 건강과 간편함 사이에서 늘 갈등합니다.",
                "때로는 완벽한 식사보다, 나를 유지해 줄 정교한 루틴이 필요합니다.",
                "아침, 점심, 저녁으로 이어지는 단순한 반복이 지속 가능한 건강을 만듭니다."
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#d8cfc4] shrink-0 mt-1" />
                  <p className="text-xl text-gray-300 font-light leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
            className="flex-1 w-full"
          >
            <div className="aspect-square rounded-full border border-gray-800 flex items-center justify-center p-12 relative overflow-hidden">
              <div className="absolute inset-0 border-[1px] border-[#d8cfc4]/30 rounded-full animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-4 border-[1px] border-[#d8cfc4]/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
              <img src="/bg-final.png" alt="ONE Capsule" className="w-full h-full object-cover rounded-full relative z-10 opacity-80" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. The Problem */}
      <section className="py-32 bg-white px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="mb-16 md:mb-24"
          >
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">왜 건강을 챙기는 일은<br />여전히 복잡할까?</h2>
            <div className="h-1 w-20 bg-black"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: "불규칙한 식습관",
                desc: "바쁜 직장인과 시험 기간의 학생들에게 '제대로 된 식사'는 사치입니다."
              },
              {
                title: "영양의 불균형",
                desc: "간편식은 늘어가지만, 우리가 필요한 필수 영양은 늘 부족합니다."
              },
              {
                title: "번거로운 루틴",
                desc: "여러 알의 영양제를 나누어 챙기는 과정은 바쁜 일상 속에서 지속하기 어렵습니다."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: idx * 0.2 } }
                }}
                className="bg-[#fcfbf9] p-10 rounded-3xl border border-gray-100"
              >
                <h3 className="text-2xl font-medium mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Philosophy & System Spec */}
      <section className="py-32 px-6 md:px-20 bg-[#f4f2ee]">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex-1">
              <p className="uppercase tracking-[0.2em] text-gray-500 text-sm mb-4">Philosophy</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8 leading-tight">
                ONE: 하루를 하나로<br />완성하는 시스템
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p><strong className="text-black font-medium">Structure:</strong> 하루 3번의 섭취, 3개의 캡슐로 완성되는 구조</p>
                <p><strong className="text-black font-medium">Function:</strong> 하루에 필요한 영양과 2,400 kcal를 완벽하게 포함</p>
                <p><strong className="text-black font-medium">Message:</strong> 복잡한 하루를 하나로 정리하는 가장 명쾌한 솔루션</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 w-full"
            >
              <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl shadow-black/5 bg-white">
                <img
                  src="/bg-final.png"
                  alt="ONE Brand Philosophy"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>

          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-200 pb-12">
              <div>
                <h3 className="text-3xl md:text-5xl font-medium mb-4">단 3번으로 설계되는<br />완벽한 하루</h3>
                <p className="text-gray-500 tracking-widest uppercase">System Spec & UX</p>
              </div>
              <div className="mt-8 md:mt-0 text-right">
                <p className="text-4xl font-semibold mb-2">2,400 <span className="text-xl text-gray-500 font-normal">kcal</span></p>
                <p className="text-gray-500 text-sm">탄수화물 240g / 단백질 180g / 지방 80g / 미네랄 5g</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Morning */}
              <div className="group hover:bg-[#faf9f7] p-8 rounded-3xl transition-colors duration-300">
                <div className="w-14 h-14 rounded-full bg-[#fdecd5] text-[#e09138] flex items-center justify-center mb-8">
                  <Zap size={24} />
                </div>
                <div className="mb-4">
                  <span className="text-sm font-semibold tracking-widest text-[#e09138]">07:00 AM</span>
                  <h4 className="text-2xl font-medium mt-2">Morning 에너지</h4>
                </div>
                <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                  <p><strong>영양:</strong> 탄수화물 110g, 단백질 40g, 지방 11g + 비타민 B군, C</p>
                  <p><strong>효과:</strong> 잠든 몸을 깨우고 선명한 정신으로 아침을 시작합니다.</p>
                </div>
              </div>

              {/* Noon */}
              <div className="group hover:bg-[#faf9f7] p-8 rounded-3xl transition-colors duration-300">
                <div className="w-14 h-14 rounded-full bg-[#e3ecda] text-[#6b8b4b] flex items-center justify-center mb-8">
                  <Clock size={24} />
                </div>
                <div className="mb-4">
                  <span className="text-sm font-semibold tracking-widest text-[#6b8b4b]">01:00 PM</span>
                  <h4 className="text-2xl font-medium mt-2">Noon 균형</h4>
                </div>
                <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                  <p><strong>영양:</strong> 탄수화물 90g, 단백질 90g, 지방 31g + 전해질, 칼슘, 철분</p>
                  <p><strong>효과:</strong> 가장 활동적인 오후 시간, 지치지 않는 에너지를 유지합니다.</p>
                </div>
              </div>

              {/* Night */}
              <div className="group hover:bg-[#faf9f7] p-8 rounded-3xl transition-colors duration-300">
                <div className="w-14 h-14 rounded-full bg-[#e1e9f0] text-[#55779c] flex items-center justify-center mb-8">
                  <Moon size={24} />
                </div>
                <div className="mb-4">
                  <span className="text-sm font-semibold tracking-widest text-[#55779c]">08:00 PM</span>
                  <h4 className="text-2xl font-medium mt-2">Night 회복</h4>
                </div>
                <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                  <p><strong>영양:</strong> 탄수화물 40g, 단백질 50g, 지방 38g + 마그네슘, 아연, 비타민 D</p>
                  <p><strong>효과:</strong> 소화 부담 없이 신체를 안정시키고 깊은 휴식을 돕습니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-6 flex justify-center items-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white px-10 py-5 rounded-full text-lg font-medium flex items-center gap-3 shadow-2xl hover:shadow-black/20 transition-all"
        >
          당신의 하루 설계하기
          <ArrowRight size={20} />
        </motion.button>
      </section>

    </div>
  );
}