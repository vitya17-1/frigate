import { motion } from 'framer-motion'
import { AnimatedNumber } from './AnimatedNumber'

const facts = [
  { value:<><AnimatedNumber value={13} /> лет</>, label:'работаем с 2012 года' },
  { value:<AnimatedNumber value={30} suffix="+" />, label:'единиц техники и транспорта' },
  { value:<AnimatedNumber value={1500} suffix="+" />, label:'выполненных заказов' },
  { value:'ЮФО+', label:'работаем по округу и за его пределами' },
]

export function StatsSection(){return <section className="relative z-10 py-24 lg:py-36"><div className="container-pad"><div className="mb-16 grid gap-6 lg:grid-cols-[1fr_360px] lg:items-end"><div><div className="eyebrow">05 / компания</div><h2 className="section-title">Фрегат-Юг — в работе с 2012 года</h2></div><p className="text-sm leading-7 text-white/50">ООО «ФРЕГАТ-ЮГ» работает с частными заказчиками, строительными организациями и промышленными объектами Волгоградской области.</p></div><div className="grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">{facts.map((fact,index)=><motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.4}} transition={{delay:index*.1,duration:.6,ease:[.22,1,.36,1]}} key={fact.label} className="group relative overflow-hidden border-b border-r border-line p-6 lg:p-8"><span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-orange transition-transform duration-500 group-hover:scale-x-100"/><div className="mb-14 font-display text-3xl text-orange transition-transform duration-500 group-hover:-translate-y-1 lg:text-4xl">{fact.value}</div><div className="text-[10px] font-bold uppercase leading-5 tracking-[.14em] text-white/40">{fact.label}</div></motion.div>)}</div><div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-[10px] uppercase tracking-[.15em] text-white/35"><span>✓ Собственный автопарк</span><span>✓ Производство бытовок и бункеров</span><span>✓ Работа по договору</span><span>✓ Техника с оператором</span></div></div></section>}
