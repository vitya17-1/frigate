export type FleetType = 'Все' | 'Земляные' | 'Подъёмные' | 'Грузовые'
export interface FleetItem {name:string; type:Exclude<FleetType,'Все'>; power:string; capacity:string; price:string; code:string}
