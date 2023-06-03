import React, { useMemo } from "react";
import PropTypes from "prop-types";
import RNPickerSelect from "react-native-picker-select";
import { Box, HStack, Text } from "native-base";
import colors from "native-base/lib/module/theme/base/colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Select = (props) => {
  const { items, onChange, value, placeholder } = props;

  const label = useMemo(
    () => items?.find((item) => item.value === value)?.label,
    [items, value],
  );

  return (
    <Box flex={1}>
      <RNPickerSelect
        items={items.sort((item1, item2) =>
          item1.label.localeCompare(item2.label),
        )}
        onValueChange={onChange}
        value={value}
        placeholder={{
          label: placeholder,
          value: "",
          color: colors.gray[500],
        }}>
        <HStack
          width="full"
          paddingX={2}
          paddingY={1}
          borderRadius={5}
          borderWidth={1}
          borderColor="gray.300"
          alignItems="center">
          <Text flex={1} color={label ? "black" : "gray.500"} numberOfLines={1}>
            {label || placeholder}
          </Text>
          <MaterialCommunityIcons name="chevron-down" size={30} />
        </HStack>
      </RNPickerSelect>
    </Box>
  );
};

Select.propTypes = {
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default React.memo(Select);
