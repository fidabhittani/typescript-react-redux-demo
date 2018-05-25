import * as React from "react";

import { Card, Grid, Image } from "semantic-ui-react";
import { IProduct, IProductProps, IProps } from "../../typings/products";
/**
 * Single Product view
 */
const SingleProduct = (props: IProductProps) => {
  const { product } = props;
  return (
    <Card key={product.id + "card"}>
      <Image
        src={`//cdn.aboutstatic.com/file/${
          product.image.hash
        }?quality=90&progressive=1&bg=f2f2f2&brightness=0.95&width=400&height=400`}
      />
      <Card.Content>
        <Card.Header>{product.name}</Card.Header>
        <Card.Meta>
          Price : {product.min_price} - {product.max_price}
        </Card.Meta>
        <Card.Description>{product.brand.name}</Card.Description>
      </Card.Content>
      <Card.Content extra={true}>
        Quantity: {product.quantity_per_pack}
      </Card.Content>
    </Card>
  );
};
/**
 * Products lists iterated to display single products
 */
const Products = (props: IProps) => {
  const { products } = props;
  return (
    <React.Fragment>
      <Grid columns={4} divided={false}>
        {products.map((product: IProduct, key: number) => {
          return (
            <Grid.Column key={product.id + key + "grid"}>
              <SingleProduct product={product} />
            </Grid.Column>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

export default Products;
