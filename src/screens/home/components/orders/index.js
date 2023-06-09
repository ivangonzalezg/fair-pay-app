import React from "react";
import PropTypes from "prop-types";
import { Box, Button, FlatList, HStack, Pressable } from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Card from "../../../../components/card";
import constants from "../../../../constants";
import Select from "../../../../components/select";
import { formatToCurrency } from "../../../../utils";

const Orders = (props) => {
  const {
    orders,
    members,
    onAddOrder,
    onUpdateOrder,
    onRemoveOrder,
    onNext,
    nextDisabled,
    ...rest
  } = props;

  return (
    <Card {...rest}>
      <FlatList
        scrollEnabled={false}
        data={orders}
        renderItem={({ item: order }) => (
          <HStack space={3}>
            <Select
              placeholder="Select product"
              items={constants.products.map((product) => ({
                label: `${product.name} - ${formatToCurrency(product.price)}`,
                value: product.id,
              }))}
              value={order.product}
              selectedValue={order.product}
              onChange={(product) => onUpdateOrder(order.id, { product })}
            />
            <Select
              placeholder="Select a member"
              items={members
                .filter((member) => Boolean(member.name.trim()))
                .map((member) => ({ label: member.name, value: member.id }))}
              value={order.member}
              onChange={(member) => onUpdateOrder(order.id, { member })}
            />
            <Pressable
              alignSelf="stretch"
              justifyContent="center"
              alignItems="center"
              paddingX={1}
              onPress={() => onRemoveOrder(order.id)}>
              <MaterialCommunityIcons name="delete" size={25} color="black" />
            </Pressable>
          </HStack>
        )}
        ItemSeparatorComponent={<Box height={2} />}
      />
      <HStack alignItems="center" space={3}>
        <Button flex={1} onPress={onAddOrder} colorScheme="blue">
          Add order
        </Button>
        <Button
          flex={1}
          onPress={onNext}
          colorScheme="green"
          isDisabled={nextDisabled}>
          Next
        </Button>
      </HStack>
    </Card>
  );
};

Orders.propTypes = {
  orders: PropTypes.array.isRequired,
  members: PropTypes.array.isRequired,
  onAddOrder: PropTypes.func.isRequired,
  onUpdateOrder: PropTypes.func.isRequired,
  onRemoveOrder: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  nextDisabled: PropTypes.bool.isRequired,
};

export default React.memo(Orders);
