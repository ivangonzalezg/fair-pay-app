import * as React from "react";
import { PickerSelectProps } from "react-native-picker-select";

declare class SelectType extends React.Component<SelectProps, any> {}

interface SelectProps extends PickerSelectProps {
  onChange(value: any): void;
}

declare var Select: typeof SelectType;
export = Select;
