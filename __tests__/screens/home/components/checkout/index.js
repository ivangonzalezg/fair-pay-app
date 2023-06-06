import "react-native";
import React from "react";

import renderer from "react-test-renderer";
import { NativeBaseProvider } from "native-base";
import Checkout from "../../../../../src/screens/home/components/checkout";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <NativeBaseProvider>
        <Checkout />
      </NativeBaseProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
