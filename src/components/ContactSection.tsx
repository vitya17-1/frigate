import { FormEvent, useState } from 'react'
import { ArrowUpRight, CheckCircle2, Clock3, Mail, MapPin, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

const address = 'Волгоград, Портовская ул. 15, п. Горьковский'
const mapUrl = `https://yandex.ru/map-widget/v1/?text=${encodeURIComponent(address)}&z=16`
const routeUrl = `https://yandex.ru/maps/?text=${encodeURIComponent(address)}`

export function ContactSection(){
  const [done,setDone]=useState(false)
  function submit(event:FormEvent){event.preventDefault();setDone(true)}
  return <footer id="contact" className="relative z-10 bg-orange text-white">
    <div className="container-pad grid lg:grid-cols-[.95fr_1.05fr]">
      <div className="py-20 lg:py-28 lg:pr-16">
        <div className="mb-6 text-[10px] font-bold uppercase tracking-[.22em] text-white/60">07 / контакты</div>
        <h2 className="font-display text-4xl font-semibold uppercase leading-[1.02] tracking-[-.05em] sm:text-6xl">Обсудим вашу задачу</h2>
        <p className="mt-6 max-w-lg text-sm leading-7 text-white/75">Сообщите тип работ, адрес объекта и желаемую дату. Подберём технику и рассчитаем стоимость.</p>
        <div className="mt-10 space-y-5">
          <a href="tel:+79371012777" className="flex items-center gap-4 font-display text-lg uppercase"><Phone className="size-5"/>+7 (937) 101-27-77</a>
          <a href="mailto:fregat-ug@bk.ru" className="flex items-center gap-4 text-sm"><Mail className="size-5"/>fregat-ug@bk.ru</a>
          <a href={routeUrl} target="_blank" rel="noreferrer" className="flex max-w-md items-start gap-4 text-sm leading-6"><MapPin className="mt-1 size-5 shrink-0"/>{address}</a>
          <div className="flex items-center gap-4 text-sm"><Clock3 className="size-5"/>Пн–Пт, 8:00–17:00</div>
        </div>
      </div>
      <div className="border-t border-white/20 bg-[#111315] p-6 text-cream sm:p-10 lg:border-l lg:border-t-0 lg:p-14">
        {done?<motion.div initial={{opacity:0,scale:.95}} animate={{opacity:1,scale:1}} className="grid h-full min-h-[430px] place-content-center text-center"><CheckCircle2 className="mx-auto mb-5 size-12 text-orange"/><h3 className="font-display text-2xl uppercase">Заявка сформирована</h3><p className="mt-3 max-w-sm text-sm leading-6 text-white/45">Демо-форма редизайна. В рабочем проекте данные будут отправлены менеджеру «Фрегат-Юг».</p><button onClick={()=>setDone(false)} className="mt-7 text-xs uppercase tracking-wider text-orange">Вернуться к форме</button></motion.div>:<form onSubmit={submit}><div className="mb-10 flex items-center justify-between"><h3 className="font-display text-xl uppercase">Получить расчёт</h3><span className="text-[9px] uppercase tracking-widest text-white/25">Без обязательств</span></div><label className="block border-b border-line py-5"><span className="block text-[9px] uppercase tracking-widest text-white/30">Ваше имя</span><input required className="mt-2 w-full bg-transparent text-sm outline-none placeholder:text-white/20" placeholder="Как к вам обращаться?"/></label><label className="block border-b border-line py-5"><span className="block text-[9px] uppercase tracking-widest text-white/30">Телефон</span><input required type="tel" className="mt-2 w-full bg-transparent text-sm outline-none placeholder:text-white/20" placeholder="+7 (___) ___-__-__"/></label><label className="block border-b border-line py-5"><span className="block text-[9px] uppercase tracking-widest text-white/30">Что нужно сделать?</span><textarea rows={2} className="mt-2 w-full resize-none bg-transparent text-sm outline-none placeholder:text-white/20" placeholder="Например: доставить 20 м³ щебня"/></label><button className="group mt-8 flex w-full items-center justify-between bg-orange px-6 py-5 text-xs font-bold uppercase tracking-wider">Отправить заявку <ArrowUpRight className="size-5 transition group-hover:rotate-45"/></button><p className="mt-4 text-[9px] leading-4 text-white/25">Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.</p></form>}
      </div>
    </div>
    <div className="relative h-[360px] overflow-hidden border-y border-white/15 bg-[#17191a]">
      <iframe title="Фрегат-Юг на карте" src={mapUrl} className="absolute inset-0 h-full w-full border-0 grayscale-[.75] contrast-125" loading="lazy" allowFullScreen />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/25 via-transparent to-ink/20" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-full">
        <motion.div initial={{opacity:0,y:12,scale:.9}} whileInView={{opacity:1,y:0,scale:1}} viewport={{once:true}} className="flex flex-col items-center drop-shadow-2xl">
          <div className="mb-2 whitespace-nowrap border border-white/15 bg-ink px-4 py-3 text-left shadow-xl"><strong className="block font-display text-xs uppercase text-white">Фрегат-Юг</strong><span className="mt-1 block text-[9px] text-white/55">Портовская ул. 15</span></div>
          <div className="grid size-12 place-items-center rounded-full border-4 border-white bg-orange shadow-[0_0_0_10px_rgba(255,90,31,.22)]"><MapPin className="size-6 text-white" fill="currentColor" /></div>
          <span className="h-5 w-1 bg-orange shadow-lg" />
        </motion.div>
      </div>
      <a href={routeUrl} target="_blank" rel="noreferrer" className="absolute bottom-5 left-5 bg-orange px-5 py-4 text-[10px] font-bold uppercase tracking-[.14em] shadow-xl md:left-12">Построить маршрут</a>
    </div>
    <div className="container-pad flex flex-col gap-5 py-7 text-[9px] uppercase tracking-[.16em] text-white/55 sm:flex-row sm:items-center sm:justify-between"><span>© 2026 ООО «ФРЕГАТ-ЮГ»</span><span>ИНН 3445124197 · ОГРН 1123460002412</span></div>
  </footer>
}
