import { ArrowDownRight, ArrowUpRight, CheckCircle2, MapPin } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 100])
  return (
    <section ref={ref} id="top" className="relative z-10 min-h-screen overflow-hidden border-b border-line pt-[76px]">
      <motion.div style={{ y: photoY }} className="absolute inset-0 top-[76px]">
        <img src="/images/fregat-hero.jpg" alt="Самосвал HOWO из парка Фрегат-Юг" className="h-full w-full object-cover object-[62%_center]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,10,11,.98)_0%,rgba(9,10,11,.88)_42%,rgba(9,10,11,.35)_72%,rgba(9,10,11,.55)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/20" />
      </motion.div>
      <div className="container-pad relative flex min-h-[calc(100vh-76px)] flex-col justify-center py-16">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="mb-6 flex flex-wrap items-center gap-4 text-[10px] font-bold uppercase tracking-[.18em] text-white/65">
          <span className="flex items-center gap-2 text-orange"><MapPin className="size-3" />Волгоград и область</span><span className="h-px w-6 bg-white/20" />Собственный автопарк
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="max-w-[980px] font-display text-[clamp(2.45rem,5.5vw,5.6rem)] font-semibold uppercase leading-[.97] tracking-[-.055em]">
          Спецтехника и грузоперевозки <span className="text-orange">для вашего объекта</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .25 }} className="mt-7 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
          Аренда техники, доставка сыпучих материалов, вывоз мусора и перевозки по Волгограду и области. Работаем с 2012 года.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .4 }} className="mt-8 flex flex-wrap items-center gap-4">
          <a href="#contact" className="group flex items-center gap-8 bg-orange px-6 py-5 text-xs font-bold uppercase tracking-[.12em] transition hover:bg-white hover:text-ink">Рассчитать стоимость <ArrowUpRight className="size-4 transition group-hover:rotate-45" /></a>
          <a href="tel:+79371012777" className="border border-white/20 bg-black/25 px-6 py-5 text-xs font-bold uppercase tracking-[.12em] backdrop-blur transition hover:border-white">Позвонить сейчас</a>
        </motion.div>
        <div className="mt-12 grid max-w-3xl gap-3 text-xs text-white/70 sm:grid-cols-3">
          {['Техника без посредников','Операторы с опытом','Работа по договору'].map((item)=><span key={item} className="flex items-center gap-2"><CheckCircle2 className="size-4 text-orange" />{item}</span>)}
        </div>
        <a href="#services" className="absolute bottom-8 right-5 hidden items-center gap-3 text-[9px] uppercase tracking-[.2em] text-white/35 md:flex">Все услуги <ArrowDownRight className="size-4" /></a>
      </div>
      <div className="relative border-t border-white/10 bg-ink/80 backdrop-blur-xl">
        <div className="container-pad grid sm:grid-cols-3">{[['2012','работаем на рынке'],['30+','единиц собственного парка'],['ЮФО','география перевозок']].map(([n,l])=><div key={n} className="flex items-end gap-4 border-b border-line p-5 last:border-0 sm:border-b-0 sm:border-r"><strong className="font-display text-2xl text-orange">{n}</strong><span className="pb-1 text-[9px] uppercase tracking-[.14em] text-white/40">{l}</span></div>)}</div>
      </div>
    </section>
  )
}
