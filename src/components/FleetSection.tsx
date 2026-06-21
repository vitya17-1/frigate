import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, Ruler, Weight } from 'lucide-react'
import { fleet } from '../data'
import type { FleetType } from '../types'
import { SectionHeading } from './SectionHeading'

const filters: FleetType[] = ['Все', 'Спецтехника', 'Самосвалы']

export function FleetSection() {
  const [active, setActive] = useState<FleetType>('Все')
  const items = active === 'Все' ? fleet : fleet.filter((item) => item.type === active)

  return (
    <section id="fleet" className="relative z-10 border-y border-line bg-[#0d0f10] py-24 lg:py-36">
      <div aria-hidden className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-orange/[.035] to-transparent" />
      <div className="container-pad relative">
        <SectionHeading index="02" label="собственный автопарк" title="Техника под реальные задачи" copy="Не передаём заказ посредникам: подбираем машину из собственного парка и отвечаем за её подачу и техническое состояние." />
        <div className="mb-8 flex flex-wrap gap-2">{filters.map((filter)=><motion.button whileTap={{scale:.96}} onClick={()=>setActive(filter)} key={filter} className={`relative overflow-hidden px-5 py-3 text-[10px] font-bold uppercase tracking-[.16em] transition duration-300 ${active===filter?'bg-orange text-white shadow-[0_8px_30px_rgba(255,90,31,.2)]':'border border-line text-white/45 hover:border-white/40 hover:bg-white/[.03] hover:text-white'}`}>{filter}</motion.button>)}</div>
        <motion.div layout className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">{items.map((item,index)=><motion.article
            layout
            initial={{opacity:0,y:22,scale:.98}}
            animate={{opacity:1,y:0,scale:1}}
            exit={{opacity:0,y:12,scale:.97}}
            transition={{duration:.45,delay:index*.035,ease:[.22,1,.36,1]}}
            whileHover={{y:-7}}
            key={item.code}
            className="group card relative overflow-hidden transition-colors duration-500 hover:border-orange/45"
          >
            <div className="relative h-60 overflow-hidden bg-black">
              <img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.065]" />
              <div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-black/20" />
              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
                <span className="border border-white/10 bg-ink/80 px-3 py-2 text-[9px] uppercase tracking-[.18em] text-orange backdrop-blur">{item.code}</span>
                <span className="flex items-center gap-2 bg-ink/75 px-3 py-2 text-[9px] uppercase tracking-wider text-white/60 backdrop-blur"><span className="size-1.5 animate-pulse rounded-full bg-green-400" />{item.availability}</span>
              </div>
              <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between"><span className="text-[9px] uppercase tracking-[.18em] text-white/60">Собственный парк</span><span className="font-display text-4xl text-white/[.12]">0{index+1}</span></div>
            </div>
            <div className="p-6">
              <div className="mb-5 flex justify-between gap-4"><div><span className="text-[9px] uppercase tracking-[.2em] text-orange">{item.type}</span><h3 className="mt-2 font-display text-xl uppercase leading-tight">{item.name}</h3><p className="mt-2 text-xs text-white/40">{item.useCase}</p></div><ArrowUpRight className="size-5 shrink-0 text-white/25 transition duration-300 group-hover:rotate-45 group-hover:text-orange" /></div>
              <div className="grid grid-cols-2 border-y border-line py-4 text-xs text-white/50"><span className="flex items-center gap-2"><Ruler className="size-4 text-orange" />{item.feature}</span><span className="flex items-center gap-2"><Weight className="size-4 text-orange" />{item.capacity}</span></div>
              <div className="grid grid-cols-2 border-b border-line">{item.specs.map((spec)=><div key={spec.label} className="border-b border-r border-line/70 py-3 last:border-b-0 even:border-r-0"><span className="block text-[8px] uppercase tracking-[.16em] text-white/25">{spec.label}</span><strong className="mt-1 block text-xs font-semibold text-white/70">{spec.value}</strong></div>)}</div>
              <div className="mt-5 flex items-center justify-between"><div><span className="block text-[8px] uppercase tracking-wider text-white/25">Стоимость</span><strong className="mt-1 block text-sm">{item.price}</strong></div><CheckCircle2 className="size-4 text-green-400/70" /></div>
              <a href="#contact" className="cta-dark mt-5 flex items-center justify-between border border-line px-4 py-4 text-[10px] font-bold uppercase tracking-widest text-white/60 transition hover:border-orange hover:bg-orange hover:text-white">Запросить эту машину <ArrowUpRight className="size-4 transition group-hover:rotate-45" /></a>
            </div>
            <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-orange transition-transform duration-500 group-hover:scale-x-100" />
          </motion.article>)}</AnimatePresence>
        </motion.div>
        <p className="mt-6 text-xs leading-6 text-white/35">На сайте показана часть парка. Диспетчер уточнит доступность техники и подберёт вариант под объём, подъездные пути и срок работ.</p>
      </div>
    </section>
  )
}
