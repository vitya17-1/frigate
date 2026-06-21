import { Boxes, Building2, Container, Construction as Crane, House, MoveRight, Trash2 } from 'lucide-react'
import type { FleetItem } from './types'
export const services=[
 {icon:Crane,num:'01',title:'Аренда спецтехники',text:'Экскаваторы, краны, погрузчики и самосвалы с опытным экипажем.'},
 {icon:Boxes,num:'02',title:'Сыпучие грузы',text:'Песок, щебень и грунт. Точная логистика от карьера до объекта.'},
 {icon:Trash2,num:'03',title:'Вывоз мусора',text:'Контейнеры и спецтранспорт для строительных площадок любого масштаба.'},
 {icon:MoveRight,num:'04',title:'Переезды',text:'Квартирные и офисные переезды с грузчиками и упаковкой.'},
 {icon:House,num:'05',title:'Бытовки и модули',text:'Доставка и установка готовых жилых и производственных модулей.'},
 {icon:Container,num:'06',title:'Бункеры',text:'Накопители 8–27 м³ с оперативной заменой по графику.'},
 {icon:Building2,num:'07',title:'Полусухая стяжка',text:'Механизированное устройство ровного основания под ключ.'}
]
export const fleet:FleetItem[]=[
 {name:'JCB 4CX',type:'Земляные',power:'81 кВт',capacity:'1.1 м³',price:'от 3 200 ₽/ч',code:'EX-04'},
 {name:'Liebherr LTM',type:'Подъёмные',power:'240 кВт',capacity:'50 т',price:'от 5 800 ₽/ч',code:'CR-12'},
 {name:'КАМАЗ 6520',type:'Грузовые',power:'294 кВт',capacity:'20 м³',price:'от 2 900 ₽/ч',code:'TR-21'},
 {name:'Hitachi ZX200',type:'Земляные',power:'128 кВт',capacity:'1.2 м³',price:'от 4 100 ₽/ч',code:'EX-09'},
 {name:'MAN TGS',type:'Грузовые',power:'324 кВт',capacity:'25 т',price:'от 3 400 ₽/ч',code:'TR-15'},
 {name:'Zoomlion ZTC',type:'Подъёмные',power:'213 кВт',capacity:'25 т',price:'от 4 600 ₽/ч',code:'CR-08'}
]
