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
 {name:'HOWO 6×4',type:'Самосвалы',feature:'Строительные грузы',capacity:'до 25 т',price:'Расчёт за рейс',code:'SM-01',image:'/images/fregat-hero.jpg',availability:'Уточнить на дату',useCase:'Щебень, песок, грунт',specs:[{label:'Формула',value:'6×4'},{label:'Класс',value:'тяжёлый'},{label:'Экипаж',value:'включён'},{label:'Работа',value:'рейс / смена'}]},
 {name:'MAN TGS',type:'Самосвалы',feature:'Карьерные работы',capacity:'до 25 т',price:'Расчёт за рейс',code:'SM-02',image:'/images/fregat-fleet-01.jpg',availability:'Уточнить на дату',useCase:'Инертные материалы',specs:[{label:'Формула',value:'6×4'},{label:'Класс',value:'тяжёлый'},{label:'Кузов',value:'самосвальный'},{label:'Работа',value:'рейс / смена'}]},
 {name:'Экскаватор-погрузчик',type:'Спецтехника',feature:'Ковш + гидромолот',capacity:'оператор включён',price:'Расчёт за смену',code:'EX-01',image:'/images/fregat-fleet-03.jpg',availability:'Уточнить на дату',useCase:'Котлованы и планировка',specs:[{label:'Оснастка',value:'ковш'},{label:'Привод',value:'полный'},{label:'Оператор',value:'включён'},{label:'Работа',value:'час / смена'}]},
 {name:'HOWO T5G + XCMG',type:'Спецтехника',feature:'Стрела 19,5 м',capacity:'груз до 8 т',price:'Расчёт за смену',code:'KMU-01',image:'/images/fregat-fleet-04.jpg',availability:'Уточнить на дату',useCase:'Перевозка и монтаж',specs:[{label:'Высота',value:'22,5 м'},{label:'Секции',value:'6'},{label:'Поворот',value:'360°'},{label:'Опоры',value:'6 м'}]},
 {name:'FORD TRANSIT 470',type:'Грузовые',feature:'Фургон 18,5 м³',capacity:'до 2 т',price:'Расчёт за рейс',code:'TR-01',image:'/images/fregat-fleet-02.jpg',availability:'Уточнить на дату',useCase:'Городские перевозки',specs:[{label:'Объём',value:'18,5 м³'},{label:'Паллеты',value:'до 8'},{label:'Кузов',value:'4,2 м'},{label:'Двери',value:'распашные'}]},
 {name:'JAC N75',type:'Грузовые',feature:'Тентованный кузов',capacity:'до 4 т',price:'Расчёт за рейс',code:'TR-02',image:'/images/fregat-fleet-02.jpg',availability:'Уточнить на дату',useCase:'Переезды и стройматериалы',specs:[{label:'Кузов',value:'тент'},{label:'Борта',value:'съёмные'},{label:'Загрузка',value:'боковая'},{label:'Класс',value:'средний'}]}
]
