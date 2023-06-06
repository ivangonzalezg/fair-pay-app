import "react-native";
import React from "react";

import renderer from "react-test-renderer";
import { NativeBaseProvider } from "native-base";
import Card from "../../../src/components/card";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <NativeBaseProvider>
        <Card />
      </NativeBaseProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
