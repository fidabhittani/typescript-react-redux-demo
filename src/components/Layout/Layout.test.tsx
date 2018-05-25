import * as React from "react";
import Layout from "./Layout";

import * as renderer from "react-test-renderer";

describe("Layout component renders correctly", () => {
  it("renders correctly", () => {
    const rendered = renderer.create(<Layout />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
