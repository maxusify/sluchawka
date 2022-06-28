import React from "react";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { InputField } from "../../components";
import { useForgotPasswordMutation } from "../../lib/generated/graphql";
import { toErrorMap } from "../../utils/toErrorMap";
import { useRouter } from "next/router";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { withUrqlClient } from "next-urql";

interface loginProps {}

const ForgotPasswordIndex: React.FC<loginProps> = ({}) => {
  const router = useRouter();
  const [, forgotPassword] = useForgotPasswordMutation();
  const [complete, setComplete] = React.useState(false);

  return (
    <Flex
      h="100vh"
      w="100vw"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      bg="gray.100"
    >
      <Flex
        w="sm"
        py={10}
        shadow="2xl"
        borderRadius={10}
        bg="white"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
      >
        <Heading size="xl" color="#E23E57" mb="5" fontFamily="Pacifico">
          Forgot password
        </Heading>
        <Formik
          initialValues={{ email: "" }}
          onSubmit={async (values) => {
            await forgotPassword({ data: values });
            setComplete(true);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Flex flexDir="column" w="100%">
                <InputField
                  name="email"
                  placeholder="johndoe@example.com"
                  label="E-Mail Address of your account"
                  type="email"
                />
                <Button
                  type="submit"
                  mt="5"
                  colorScheme="red"
                  variant="solid"
                  isLoading={isSubmitting}
                >
                  Recover password
                </Button>
              </Flex>
            </Form>
          )}
        </Formik>
      </Flex>
      <Alert
        status="success"
        position="fixed"
        top={0}
        hidden={!complete ? true : false}
      >
        <AlertIcon />
        We sent you an email. Continue there. Good luck!
      </Alert>
    </Flex>
  );
};

export default withUrqlClient(createUrqlClient)(ForgotPasswordIndex);
