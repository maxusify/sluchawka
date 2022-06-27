import React from "react";
import { Button, Flex, Heading } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { InputField } from "../components";
import { useLoginMutation } from "../lib/generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import { useRouter } from "next/router";
import { createUrqlClient } from "../utils/createUrqlClient";
import { withUrqlClient } from "next-urql";

interface loginProps {}

const Login: React.FC<loginProps> = ({}) => {
  const router = useRouter();
  const [{}, login] = useLoginMutation();

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
          Sign-in
        </Heading>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values, { setErrors }) => {
            const response = await login({ data: values });
            if (response.data?.login.errors) {
              setErrors(toErrorMap(response.data.login.errors));
            } else if (response.data?.login.user) {
              router.push("/");
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField
                name="email"
                placeholder="johndoe@example.com"
                label="E-Mail Address"
                type="email"
              />
              <InputField
                name="password"
                placeholder="password"
                label="Password"
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

export default withUrqlClient(createUrqlClient)(Login);
