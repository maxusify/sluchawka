import { Flex, Heading, Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { NextPage } from "next";
import router from "next/router";
import React from "react";
import { InputField } from "../../components";
import { useChangePasswordMutation } from "../../lib/generated/graphql";

const ForgotPassword: NextPage<{ token: string }> = ({ token }) => {
  const [, changePassword] = useChangePasswordMutation();
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
            if (response.data?.changePassword.user) {
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
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </Flex>
    </Flex>
  );
};

ForgotPassword.getInitialProps = ({ query }) => {
  return {
    token: query.token as string,
  };
};

export default ForgotPassword;
