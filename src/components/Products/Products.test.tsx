import * as React from "react";
import Products from "./Products";

import * as renderer from "react-test-renderer";
/**
 * Test suites for products
 */
describe("Products component renders correctly", () => {
  it("Renders Correctly", () => {
    const products = [
      {
        id: 3383096,
        name: "Shirt 'The Perfect Tee Large Batwing'",
        brand: {
          id: 226,
          name: "LEVI'S"
        },
        image: {
          hash: "56755a972fefe61b91380e94df8481e8"
        },
        min_price: 1990,
        max_price: 1990,
        quantity_per_pack: "some quantity"
      }
    ];
    const rendered = renderer.create(<Products products={products} />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
