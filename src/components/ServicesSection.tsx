import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { services } from '../data'
import { SectionHeading } from './SectionHeading'

export function ServicesSection() {
  return (
    <section id="services" className="relative z-10 py-24 lg:py-36">
      <div className="container-pad">
        <SectionHeading
          index="01"
          label="возможности"
          title="Один партнёр для всего объекта"
          copy="Синхронизируем технику, материалы и людей. Один диспетчер отвечает за весь маршрут задачи."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: (index % 3) * 0.08 }}
                whileHover={{ y: -7 }}
                className={`group relative min-h-[270px] overflow-hidden border border-line bg-panel/60 p-6 transition-colors hover:border-orange/60 hover:bg-[#17191b] ${index < 3 ? 'lg:col-span-4' : 'lg:col-span-3'}`}
              >
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-10 -translate-y-10 rounded-full bg-orange/0 blur-2xl transition group-hover:bg-orange/20" />
                <div className="flex items-start justify-between">
                  <span className="text-[10px] font-bold tracking-[.2em] text-white/25">{service.num}</span>
                  <Icon className="size-6 text-orange transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110" />
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="mb-3 font-display text-lg uppercase leading-tight">{service.title}</h3>
                  <p className="max-h-24 overflow-hidden text-sm leading-6 text-white/50 opacity-100">{service.text}</p>
                </div>
                <ArrowUpRight className="absolute bottom-6 right-6 size-5 translate-y-3 text-orange opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100 sm:hidden" />
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
