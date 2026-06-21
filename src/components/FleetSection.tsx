import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Ruler, Weight } from 'lucide-react'
import { fleet } from '../data'
import type { FleetType } from '../types'
import { SectionHeading } from './SectionHeading'

const filters: FleetType[] = ['Все', 'Спецтехника', 'Самосвалы', 'Грузовые']

export function FleetSection() {
  const [active, setActive] = useState<FleetType>('Все')
  const items = active === 'Все' ? fleet : fleet.filter((item) => item.type === active)
  return (
    <section id="fleet" className="relative z-10 border-y border-line bg-[#0d0f10] py-24 lg:py-36">
      <div className="container-pad">
        <SectionHeading index="02" label="собственный автопарк" title="Техника под реальные задачи" copy="Не передаём заказ посредникам: подбираем машину из собственного парка и отвечаем за её подачу и техническое состояние." />
        <div className="mb-8 flex flex-wrap gap-2">{filters.map((filter)=><button onClick={()=>setActive(filter)} key={filter} className={`px-5 py-3 text-[10px] font-bold uppercase tracking-[.16em] transition ${active===filter?'bg-orange text-white':'border border-line text-white/45 hover:border-white/40 hover:text-white'}`}>{filter}</button>)}</div>
        <motion.div layout className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">{items.map((item)=><motion.article layout initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:.96}} key={item.code} className="group card overflow-hidden">
            <div className="relative h-56 overflow-hidden bg-black"><img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" /><span className="absolute left-4 top-4 bg-ink/80 px-3 py-2 text-[9px] uppercase tracking-[.18em] text-orange backdrop-blur">{item.code}</span><span className="absolute bottom-4 left-4 text-[9px] uppercase tracking-[.18em] text-white/60">Фото из каталога Фрегат-Юг</span></div>
            <div className="p-6"><div className="mb-6 flex justify-between"><div><span className="text-[9px] uppercase tracking-[.2em] text-orange">{item.type}</span><h3 className="mt-2 font-display text-xl uppercase">{item.name}</h3></div><ArrowUpRight className="size-5 text-white/25 transition group-hover:rotate-45 group-hover:text-orange" /></div><div className="grid grid-cols-2 border-y border-line py-4 text-xs text-white/45"><span className="flex items-center gap-2"><Ruler className="size-4 text-orange" />{item.feature}</span><span className="flex items-center gap-2"><Weight className="size-4 text-orange" />{item.capacity}</span></div><div className="mt-5 flex items-center justify-between"><strong className="text-sm">{item.price}</strong><a href="#contact" className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-orange">Уточнить наличие</a></div></div>
          </motion.article>)}</AnimatePresence>
        </motion.div>
        <p className="mt-6 text-xs leading-6 text-white/35">На сайте показана часть парка. Диспетчер уточнит доступность техники и подберёт вариант под объём, подъездные пути и срок работ.</p>
      </div>
    </section>
  )
}
