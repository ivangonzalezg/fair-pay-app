import "react-native";
import React from "react";

import renderer from "react-test-renderer";
import { NativeBaseProvider } from "native-base";
import Heading from "../../../src/components/heading";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <NativeBaseProvider>
        <Heading />
      </NativeBaseProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
