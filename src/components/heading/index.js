import React from "react";
import PropTypes from "prop-types";
import { Pressable, Text } from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Card from "../card";

const Heading = (props) => {
  const { label, isOpen, onPress } = props;

  return (
    <Pressable onPress={onPress}>
      <Card
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <Text bold fontSize={16}>
          {label}
        </Text>
        <MaterialCommunityIcons
          name={isOpen ? "chevron-up" : "chevron-down"}
          size={30}
        />
      </Card>
    </Pressable>
  );
};

Heading.propTypes = {
  label: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default React.memo(Heading);
