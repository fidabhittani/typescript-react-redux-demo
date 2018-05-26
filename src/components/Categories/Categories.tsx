import * as React from "react";

import { Button, Dropdown, Grid } from "semantic-ui-react";
/**
 * Components interfaces/types
 */
export interface IProductIds {
  key: number;
  value: number;
  text: number;
}

export interface IProps {
  children?: React.ReactNode;
  getProductIds?: any;
  productIds?: IProductIds[];
  getProducts?: any;
  sortProductsBy?: any;
  sorterVal?: string;
}

class Categories extends React.Component<IProps> {
  public productIdNode: any;
  public productSortNode: any;

  /**
   * Components constructors with basic initializations.
   * @param props
   */
  constructor(props: IProps) {
    super(props);
    this.productIdNode = React.createRef();
    this.productSortNode = React.createRef();
  }
  /**
   * get products when on click get products button
   */
  public getProducts = () => {
    const { getProducts } = this.props;
    const productIds = this.productIdNode.current.state.value || [];
    getProducts(productIds);
  };
  public render() {
    const { productIds, sortProductsBy, sorterVal } = this.props;
    return (
      <React.Fragment>
        <Grid>
          <Grid.Column width={10}>
            <Dropdown
              ref={this.productIdNode}
              placeholder="Choose product ids"
              fluid={true}
              multiple={true}
              search={true}
              selection={true}
              options={productIds}
            />
          </Grid.Column>
          <Grid.Column width={3}>
            <Dropdown
              placeholder="Sort By"
              fluid={true}
              ref={this.productSortNode}
              selection={true}
              onChange={sortProductsBy}
              value={sorterVal}
              options={[
                {
                  text: "Price",
                  value: "min_price"
                },
                {
                  text: "Name",
                  value: "name"
                }
              ]}
            />
          </Grid.Column>
          <Grid.Column width={3}>
            <Button basic={true} color="violet" onClick={this.getProducts}>
              Get Products
            </Button>
          </Grid.Column>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Categories;
