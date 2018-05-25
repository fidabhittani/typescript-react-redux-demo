import * as React from "react";
import Categories from "./Categories";

import * as renderer from "react-test-renderer";
/**
 * Test suites for categories/ productids
 */
describe("Categories component renders correctly", () => {
  it("Renders Correctly", () => {
    const productIds = [
      {
        key: 3383096,
        value: 3383096,
        text: 3383096
      }
    ];
    const rendered = renderer.create(<Categories productIds={productIds} />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
