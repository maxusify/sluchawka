import {
  Flex,
  Heading,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { NextPage } from "next";
import { withUrqlClient } from "next-urql";
import router from "next/router";
import React from "react";
import { InputField } from "../../components";
import { useChangePasswordMutation } from "../../lib/generated/graphql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { toErrorMap } from "../../utils/toErrorMap";

const ForgotPassword: NextPage<{ token: string }> = ({ token }) => {
  const [, changePassword] = useChangePasswordMutation();

  const [tokenError, setTokenError] = React.useState("");

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
        w="md"
        p={10}
        shadow="2xl"
        borderRadius={10}
        bg="white"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
      >
        <Heading size="lg" mb="5">
          Password recover
        </Heading>
        <Formik
          initialValues={{ newPassword: "" }}
          onSubmit={async (values, { setErrors }) => {
            const response = await changePassword({
              data: {
                token,
                newPassword: values.newPassword,
              },
            });
            if (response.data?.changePassword.errors) {
              const errorMap = toErrorMap(response.data.changePassword.errors);
              if ("token" in errorMap) {
                setTokenError(errorMap.token);
              }
              setErrors(errorMap);
            } else {
              router.push("/");
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField
                name="password"
                placeholder="password"
                label="New password"
                type="password"
              />
              <Button
                type="submit"
                mt="5"
                colorScheme="cyan"
                variant="outline"
                isLoading={isSubmitting}
              >
                Save
              </Button>
            </Form>
          )}
        </Formik>
      </Flex>
      <Alert status="error" hidden={!tokenError ? true : false}>
        <AlertIcon />
        <AlertTitle>Oops...</AlertTitle>
        <AlertDescription>
          Your password recovery token may be invalid.
        </AlertDescription>
      </Alert>
    </Flex>
  );
};

ForgotPassword.getInitialProps = ({ query }) => {
  return {
    token: query.token as string,
  };
};

export default withUrqlClient(createUrqlClient, { ssr: false })(ForgotPassword);
