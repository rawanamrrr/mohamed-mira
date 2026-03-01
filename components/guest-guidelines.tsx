"use client"

import { motion } from "framer-motion"
import { useTranslation } from "@/lib/translations"
import { useLanguage } from "@/contexts/LanguageContext"
import { Variants } from "framer-motion"

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

export default function GuestGuidelines() {
  const t = useTranslation()
  const { isRTL } = useLanguage()

  const guidelines = [
    { key: 'noPhotography' },
    { key: 'noChildren' },
  ]

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="font-luxury text-5xl md:text-6xl text-foreground mb-4 tracking-wide">
            {t('guestGuidelinesTitle')}
          </h2>
          <p className="font-luxury text-xl md:text-2xl text-muted-foreground italic">
            {t('guestGuidelinesSubtitle')}
          </p>
        </motion.div>

        <motion.div
          className="relative bg-card/50 backdrop-blur-sm border-2 border-accent/20 rounded-[2rem] p-8 md:p-12 shadow-xl overflow-hidden max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="flex justify-center mb-8">
            <svg 
              className="w-24 h-24 text-[#e11d48]" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
            </svg>
          </div>

          <h3 className="text-center font-luxury text-2xl text-accent mb-10">
            {t('eventRulesTitle')}
          </h3>

          <motion.div 
            className="space-y-4"
            variants={staggerContainer}
          >
            {guidelines.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-background/80 border border-accent/10 rounded-2xl p-5 flex items-center gap-4 shadow-sm"
              >
                <div className="w-3 h-3 rounded-full bg-red-500 shrink-0" />
                <span className="font-luxury text-xl md:text-2xl text-foreground">
                  {t(item.key as any)}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
