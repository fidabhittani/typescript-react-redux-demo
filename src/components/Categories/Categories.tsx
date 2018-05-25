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
}

class Categories extends React.Component<IProps> {
  public productIdNode: any;
  /**
   * Components constructors with basic initializations.
   * @param props
   */
  constructor(props: IProps) {
    super(props);

    this.state = {};
    this.productIdNode = React.createRef();
  }
  /**
   * get products when on click get products button
   */
  public getProducts = (event: any) => {
    const { getProducts } = this.props;
    const productIds = this.productIdNode.current.state.value || [];
    getProducts(productIds);
  };
  public render() {
    const { productIds } = this.props;

    return (
      <React.Fragment>
        <Grid columns="equal">
          <Grid.Column>
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
          <Grid.Column>
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
