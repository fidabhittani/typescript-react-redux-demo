/**
 * Interface typings for products.
 */

export interface IProduct {
  brand: any;
  image: any;
  id: number;
  min_price: number;
  max_price: number;
  name: string;
  quantity_per_pack: string;
}

export interface IProductProps {
  product: IProduct;
}

export interface IProps {
  children?: React.ReactNode;
  products: IProduct[];
}
