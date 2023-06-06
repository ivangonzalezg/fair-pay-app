import "react-native";
import React from "react";

import renderer from "react-test-renderer";
import { NativeBaseProvider } from "native-base";
import Orders from "../../../../../src/screens/home/components/orders";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <NativeBaseProvider>
        <Orders />
      </NativeBaseProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
