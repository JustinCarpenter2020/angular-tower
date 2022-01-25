export interface TowerEvent {
  id?: string,
  name: string,
  imgUrl: string,
  type: string,
  status: string,
  description: string,
  location: string,
  tickets: number,
  price: number,
  startDate: string,
  endDate: string,
  comments: []
}
