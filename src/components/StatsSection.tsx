import { motion } from 'framer-motion'

const facts = [
  ['13 лет','работаем с 2012 года'],
  ['30+','единиц техники и транспорта'],
  ['1500+','выполненных заказов'],
  ['ЮФО+','работаем по округу и за его пределами']
]

export function StatsSection(){return <section className="relative z-10 py-24 lg:py-36"><div className="container-pad"><div className="mb-16 grid gap-6 lg:grid-cols-[1fr_360px] lg:items-end"><div><div className="eyebrow">05 / компания</div><h2 className="section-title">Фрегат-Юг — в работе с 2012 года</h2></div><p className="text-sm leading-7 text-white/50">ООО «ФРЕГАТ-ЮГ» работает с частными заказчиками, строительными организациями и промышленными объектами Волгоградской области.</p></div><div className="grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">{facts.map(([number,label],index)=><motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.1}} key={label} className="border-b border-r border-line p-6 lg:p-8"><div className="mb-14 font-display text-3xl text-orange lg:text-4xl">{number}</div><div className="text-[10px] font-bold uppercase leading-5 tracking-[.14em] text-white/40">{label}</div></motion.div>)}</div><div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-[10px] uppercase tracking-[.15em] text-white/35"><span>✓ Собственный автопарк</span><span>✓ Производство бытовок и бункеров</span><span>✓ Работа по договору</span><span>✓ Техника с оператором</span></div></div></section>}
