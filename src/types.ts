export type FleetType = 'Все' | 'Спецтехника' | 'Самосвалы' | 'Грузовые'
export interface FleetItem {
  name: string
  type: Exclude<FleetType, 'Все'>
  feature: string
  capacity: string
  price: string
  code: string
  image: string
}
