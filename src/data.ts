import { Boxes, Building2, Container, Construction as Crane, House, MoveRight, Trash2 } from 'lucide-react'
import type { FleetItem } from './types'
export const services=[
 {icon:Crane,num:'01',title:'Аренда спецтехники',text:'Собственный парк строительной и коммерческой техники с опытными операторами.'},
 {icon:Boxes,num:'02',title:'Доставка сыпучих грузов',text:'Щебень, песок и грунт напрямую с карьеров на объекты Волгоградской области.'},
 {icon:Trash2,num:'03',title:'Вывоз и утилизация мусора',text:'Строительные и бытовые отходы с предоставлением контейнеров объёмом 8 м³.'},
 {icon:MoveRight,num:'04',title:'Грузоперевозки и переезды',text:'ГАЗели 6 м и JAC N75 для квартирных, офисных и коммерческих перевозок.'},
 {icon:House,num:'05',title:'Жилые модули и бытовки',text:'Собственное производство решений для стройплощадок и удалённых объектов.'},
 {icon:Container,num:'06',title:'Бункеры-накопители',text:'Производство и поставка надёжных накопителей для сбора и хранения отходов.'},
 {icon:Building2,num:'07',title:'Полусухая стяжка',text:'Механизированное устройство ровного и прочного основания под ключ.'}
]
export const fleet:FleetItem[]=[
 {name:'HOWO 6×4',type:'Самосвалы',feature:'Строительные грузы',capacity:'до 25 т',price:'Цена по запросу',code:'SM-01',image:'/images/fregat-hero.jpg'},
 {name:'MAN TGS',type:'Самосвалы',feature:'Карьерные работы',capacity:'до 25 т',price:'Цена по запросу',code:'SM-02',image:'/images/fregat-fleet-01.jpg'},
 {name:'Экскаватор-погрузчик',type:'Спецтехника',feature:'Ковш + гидромолот',capacity:'оператор включён',price:'Цена по запросу',code:'EX-01',image:'/images/fregat-fleet-03.jpg'},
 {name:'HOWO T5G + XCMG',type:'Спецтехника',feature:'Стрела 19,5 м',capacity:'груз до 8 т',price:'Цена по запросу',code:'KMU-01',image:'/images/fregat-fleet-04.jpg'},
 {name:'FORD TRANSIT 470',type:'Грузовые',feature:'Фургон 18,5 м³',capacity:'до 2 т',price:'Цена по запросу',code:'TR-01',image:'/images/fregat-fleet-02.jpg'},
 {name:'JAC N75',type:'Грузовые',feature:'Тентованный кузов',capacity:'до 4 т',price:'Цена по запросу',code:'TR-02',image:'/images/fregat-fleet-02.jpg'}
]
