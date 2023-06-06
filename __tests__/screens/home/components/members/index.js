import "react-native";
import React from "react";

import renderer from "react-test-renderer";
import { NativeBaseProvider } from "native-base";
import Members from "../../../../../src/screens/home/components/members";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <NativeBaseProvider>
        <Members />
      </NativeBaseProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
