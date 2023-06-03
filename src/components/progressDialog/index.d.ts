import * as React from "react";

declare class ProgressDialogType extends React.Component<
  ProgressDialogProps,
  any
> {}

interface ProgressDialogProps {
  visible: boolean;
  /**
   * The default value is "Loading".
   */
  label?: string;
}

declare var ProgressDialog: typeof ProgressDialogType;
export = ProgressDialog;
