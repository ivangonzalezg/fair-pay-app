import React, { useCallback, useState } from "react";
import { ScrollView, Text, VStack } from "native-base";
import Heading from "../../components/heading";
import Members from "./components/members";

const steps = {
  MEMBERS: 0,
  ORDERS: 1,
  CHECKOUT: 2,
};

function HomeScreen() {
  const [step, setStep] = useState(steps.MEMBERS);
  const [members, setMembers] = useState([]);

  const onAddMember = useCallback(() => {
    const _members = [...members];
    _members.push({
      id: String(new Date().getTime()),
      name: "",
    });
    setMembers(_members);
  }, [members]);

  const onRemoveMember = useCallback(
    (id) => {
      let _members = [...members];
      _members = _members.filter((_member) => _member.id !== id);
      setMembers(_members);
    },
    [members],
  );

  const onUpdateMember = useCallback(
    (id, name) => {
      let _members = [...members];
      _members = _members.map((_member) => {
        if (_member.id === id) {
          _member.name = name;
        }
        return _member;
      });
      setMembers(_members);
    },
    [members],
  );

  return (
    <ScrollView>
      <VStack safeArea paddingX={2} paddingY={2}>
        <Text bold fontSize="2xl" textAlign="center" marginBottom={3}>
          FairPay
        </Text>
        <Heading
          label="Members"
          isOpen={step === steps.MEMBERS}
          onPress={() => setStep(steps.MEMBERS)}
        />
        <Members
          visible={step === steps.MEMBERS}
          members={members}
          onAddMember={onAddMember}
          onUpdateMember={onUpdateMember}
          onRemoveMember={onRemoveMember}
          onNext={() => setStep(steps.ORDERS)}
        />
        <Heading
          label="Orders"
          isOpen={step === steps.ORDERS}
          onPress={() => setStep(steps.ORDERS)}
        />
        <Heading
          label="Checkout"
          isOpen={step === steps.CHECKOUT}
          onPress={() => setStep(steps.CHECKOUT)}
        />
      </VStack>
    </ScrollView>
  );
}

export default HomeScreen;
