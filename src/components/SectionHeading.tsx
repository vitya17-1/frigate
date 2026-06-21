import { motion } from 'framer-motion'

export function SectionHeading({index,label,title,copy}:{index:string;label:string;title:string;copy?:string}){
  return <motion.div initial="hidden" whileInView="visible" viewport={{once:true,amount:.25}} variants={{hidden:{},visible:{transition:{staggerChildren:.1}}}} className="mb-12 grid gap-6 lg:grid-cols-[1fr_340px] lg:items-end">
    <div>
      <motion.div variants={{hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:{duration:.55}}}} className="eyebrow">{index} / {label}</motion.div>
      <div className="overflow-hidden"><motion.h2 variants={{hidden:{opacity:0,y:'55%'},visible:{opacity:1,y:0,transition:{duration:.75,ease:[.22,1,.36,1]}}}} className="section-title">{title}</motion.h2></div>
    </div>
    {copy&&<motion.p variants={{hidden:{opacity:0,y:18},visible:{opacity:1,y:0,transition:{duration:.65,delay:.12}}}} className="text-sm leading-7 text-white/50 lg:text-base">{copy}</motion.p>}
  </motion.div>
}
