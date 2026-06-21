import { Boxes, Building2, Container, Construction as Crane, House, MoveRight, Trash2 } from 'lucide-react'
import type { FleetItem } from './types'

export const services = [
  {icon:Crane,num:'01',title:'Аренда спецтехники',text:'Собственный парк строительной и коммерческой техники с опытными операторами.'},
  {icon:Boxes,num:'02',title:'Доставка сыпучих грузов',text:'Щебень, песок и грунт напрямую с карьеров на объекты Волгоградской области.'},
  {icon:Trash2,num:'03',title:'Вывоз и утилизация мусора',text:'Строительные и бытовые отходы с предоставлением контейнеров объёмом 8 м³.'},
  {icon:MoveRight,num:'04',title:'Грузоперевозки и переезды',text:'ГАЗели 6 м и JAC N75 для квартирных, офисных и коммерческих перевозок.'},
  {icon:House,num:'05',title:'Жилые модули и бытовки',text:'Собственное производство решений для стройплощадок и удалённых объектов.'},
  {icon:Container,num:'06',title:'Бункеры-накопители',text:'Производство и поставка надёжных накопителей для сбора и хранения отходов.'},
  {icon:Building2,num:'07',title:'Полусухая стяжка',text:'Механизированное устройство ровного и прочного основания под ключ.'},
]

export const fleet: FleetItem[] = [
  {name:'HOWO 6×4',type:'Самосвалы',feature:'Строительные грузы',capacity:'до 25 т',price:'Расчёт за рейс',code:'SM-01',image:'/images/fregat-hero.jpg',availability:'Уточнить на дату',useCase:'Щебень, песок, грунт',specs:[{label:'Формула',value:'6×4'},{label:'Класс',value:'тяжёлый'},{label:'Экипаж',value:'включён'},{label:'Работа',value:'рейс / смена'}]},
  {name:'MAN TGS',type:'Самосвалы',feature:'Карьерные работы',capacity:'до 25 т',price:'Расчёт за рейс',code:'SM-02',image:'/images/fregat-fleet-01.jpg',availability:'Уточнить на дату',useCase:'Инертные материалы',specs:[{label:'Формула',value:'6×4'},{label:'Класс',value:'тяжёлый'},{label:'Кузов',value:'самосвальный'},{label:'Работа',value:'рейс / смена'}]},
  {name:'Самосвал 6×4',type:'Самосвалы',feature:'Доставка материалов',capacity:'тяжёлый класс',price:'Расчёт за рейс',code:'SM-03',image:'/images/fregat-fleet-02.jpg',availability:'Уточнить на дату',useCase:'Щебень и сыпучие грузы',specs:[{label:'Формула',value:'6×4'},{label:'Кузов',value:'самосвальный'},{label:'Разгрузка',value:'задняя'},{label:'Работа',value:'рейс / смена'}]},
  {name:'Экскаватор-погрузчик',type:'Спецтехника',feature:'Фронтальный ковш',capacity:'оператор включён',price:'Расчёт за смену',code:'EX-01',image:'/images/fregat-fleet-03.jpg',availability:'Уточнить на дату',useCase:'Котлованы и планировка',specs:[{label:'Оснастка',value:'ковш'},{label:'Привод',value:'полный'},{label:'Оператор',value:'включён'},{label:'Работа',value:'час / смена'}]},
]
