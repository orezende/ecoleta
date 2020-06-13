import Point from './Point';
import ItemPoint from './ItemPoint';

export default interface DetailPoint { 
  point: Point,
  items: Array<ItemPoint>
}