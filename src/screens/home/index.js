import React, { useState } from "react";
import { ScrollView, Text, VStack } from "native-base";
import Heading from "../../components/heading";

const steps = {
  MEMBERS: 0,
  ORDERS: 1,
  CHECKOUT: 2,
};

function HomeScreen() {
  const [step, setStep] = useState(steps.MEMBERS);

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
