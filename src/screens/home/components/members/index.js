import React from "react";
import PropTypes from "prop-types";
import { Box, Button, FlatList, HStack, Input, Pressable } from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Card from "../../../../components/card";

const Members = (props) => {
  const {
    members,
    onAddMember,
    onUpdateMember,
    onRemoveMember,
    onNext,
    nextDisabled,
    ...rest
  } = props;

  return (
    <Card {...rest}>
      <FlatList
        scrollEnabled={false}
        data={members}
        renderItem={({ item: member }) => (
          <HStack>
            <Input
              flex={1}
              size="md"
              value={member.name}
              onChangeText={(name) => onUpdateMember(member.id, name)}
              placeholder="Member name"
            />
            <Pressable
              alignSelf="stretch"
              justifyContent="center"
              alignItems="center"
              paddingX={1}
              onPress={() => onRemoveMember(member.id)}>
              <MaterialCommunityIcons name="delete" size={25} />
            </Pressable>
          </HStack>
        )}
        ItemSeparatorComponent={<Box height={2} />}
      />
      <HStack alignItems="center" space={3}>
        <Button flex={1} onPress={onAddMember} colorScheme="blue">
          Add member
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

Members.propTypes = {
  members: PropTypes.array.isRequired,
  onAddMember: PropTypes.func.isRequired,
  onUpdateMember: PropTypes.func.isRequired,
  onRemoveMember: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  nextDisabled: PropTypes.bool.isRequired,
};

export default React.memo(Members);
