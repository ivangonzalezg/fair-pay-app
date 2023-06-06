import "react-native";
import React from "react";

import renderer from "react-test-renderer";
import { NativeBaseProvider } from "native-base";
import HomeScreen from "../../../src/screens/home";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <NativeBaseProvider>
        <HomeScreen />
      </NativeBaseProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
