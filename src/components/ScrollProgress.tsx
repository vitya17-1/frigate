import { motion, useScroll, useSpring } from 'framer-motion'
export function ScrollProgress(){const{scrollYProgress}=useScroll();const x=useSpring(scrollYProgress,{stiffness:120,damping:25});return <motion.div className="fixed left-0 top-0 z-[100] h-[3px] w-full origin-left bg-orange" style={{scaleX:x}}/>}
