import { Button, Flex, Heading } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { InputField } from "../components";
import { useLoginMutation } from "../lib/generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { toErrorMap } from "../utils/toErrorMap";

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
              <Flex flexDir="column" w="100%">
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
                <Flex justifyContent="flex-end" fontSize="sm">
                  <Link href="/forgot-password">
                    <a>Forgot password?</a>
                  </Link>
                </Flex>
                <Button
                  type="submit"
                  mt="5"
                  colorScheme="red"
                  variant="solid"
                  isLoading={isSubmitting}
                >
                  Login
                </Button>
              </Flex>
            </Form>
          )}
        </Formik>
      </Flex>
    </Flex>
  );
};

export default withUrqlClient(createUrqlClient)(Login);
