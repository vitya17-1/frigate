import { motion } from 'framer-motion'
import { BadgeCheck, Factory, FileCheck2, Route } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

const reasons = [
  {icon:BadgeCheck,title:'Свой парк',text:'Компания не берёт технику в субаренду и контролирует её техническое состояние.'},
  {icon:Factory,title:'Своё производство',text:'Бункеры-накопители и жилые модули производятся компанией под задачи заказчика.'},
  {icon:Route,title:'Широкая география',text:'Перевозки по Волгограду, области, Южному федеральному округу и за его пределами.'},
  {icon:FileCheck2,title:'Официальная работа',text:'Договор, согласованные условия и комплект документов для бизнеса.'}
]

export function ReviewsSection(){return <section className="relative z-10 border-y border-line bg-[#0d0f10] py-24 lg:py-36"><div className="container-pad"><SectionHeading index="06" label="почему мы" title="Надёжность, которую можно проверить" copy="Вместо вымышленных отзывов — конкретные свойства бизнеса, важные при выборе подрядчика."/><div className="grid sm:grid-cols-2 lg:grid-cols-4">{reasons.map((item,index)=>{const Icon=item.icon;return <motion.article initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.08}} key={item.title} className="border border-line p-6"><Icon className="mb-12 size-7 text-orange"/><h3 className="font-display text-lg uppercase">{item.title}</h3><p className="mt-4 text-sm leading-7 text-white/45">{item.text}</p></motion.article>})}</div></div></section>}
