import { Button, Flex, Heading } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import React from "react";

import { InputField } from "../components";
import { useRegisterMutation } from "../lib/generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { toErrorMap } from "../utils/toErrorMap";

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  const router = useRouter();
  const [{}, register] = useRegisterMutation();

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
          Register
        </Heading>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values, { setErrors }) => {
            const response = await register({ data: values });
            if (response.data?.register.errors) {
              setErrors(toErrorMap(response.data.register.errors));
            } else if (response.data?.register.user) {
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
                Register
              </Button>
            </Form>
          )}
        </Formik>
      </Flex>
    </Flex>
  );
};

export default withUrqlClient(createUrqlClient)(Register);
