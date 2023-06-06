import "react-native";
import React from "react";

import renderer from "react-test-renderer";
import { NativeBaseProvider } from "native-base";
import Select from "../../../src/components/select";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <NativeBaseProvider>
        <Select />
      </NativeBaseProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
