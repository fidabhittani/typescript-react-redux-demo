import * as React from "react";

import { connect } from "react-redux";

import { Container, Dimmer, Header, Loader, Message } from "semantic-ui-react";

import Categories from "./Categories";

import { getProductIds, getProducts, sortProducts } from "../redux/actions";

import MainLayout from "./Layout";
import Products from "./Products";

export interface IState {
  sorterVal?: string;
}

class App extends React.Component<any, IState> {
  public state: IState;
  constructor(props: any) {
    super(props);
    this.state = {
      sorterVal: "min_price"
    };
  }
  public componentDidMount() {
    this.props.getProductIds();
  }

  public getProducts = (productsIds: Array<1>) => {
    this.props.getProducts(productsIds);
    this.setState({
      sorterVal: "min_price"
    });
  };
  public sortProductsBy = (ev: any, data: any) => {
    this.setState({
      sorterVal: data.value
    });
    this.props.sortProducts(data.value);
  };
  public render() {
    const { products, productIds, loading, loadingText, message } = this.props;
    const { sorterVal } = this.state;
    console.log(sorterVal);
    return (
      <React.Fragment>
        <Dimmer active={loading} inverted={true}>
          <Loader inverted={true}>{loadingText}</Loader>
        </Dimmer>

        <MainLayout>
          <Container>
            <Header as="h2">TypeScript React/Redux Demo</Header>
            {message.message && (
              <Message color={message.color} size="mini">
                {message.message}
              </Message>
            )}

            <Categories
              getProducts={this.getProducts}
              sortProductsBy={this.sortProductsBy}
              productIds={productIds}
              sorterVal={sorterVal}
            />

            <Products products={products} />
          </Container>
        </MainLayout>
      </React.Fragment>
    );
  }
}

const mstp = (store: any) => {
  const { products, productsIds, loading, loadingText, message } = store.app;
  return {
    loading,
    loadingText,
    message,
    productIds: productsIds.map((id: number) => ({
      key: id,
      text: id,
      value: id
    })),
    products
  };
};

const mdtp = (dispatch: any) => ({
  getProductIds: () => dispatch(getProductIds()),
  getProducts: (productsIds: any) => dispatch(getProducts(productsIds)),
  sortProducts: (sortBy: string) => dispatch(sortProducts(sortBy))
});
export default connect(mstp, mdtp)(App);
