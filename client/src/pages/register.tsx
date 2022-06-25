import React from "react";
import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  return (
    <Flex
      h="100vh"
      w="100vw"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      bg="gray.100"
    >
      <Flex w="2xl" p={10} shadow="2xl" borderRadius={10} bg="white">
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(value) => {
            console.log(value);
          }}
        >
          {({ values, handleChange }) => (
            <Form>
              <FormControl>
                <FormLabel htmlFor="email">Adres e-mail</FormLabel>
                <Input
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="johndoe@example.com"
                />
                {/* <FormErrorMessage>{form.errors.name}</FormErrorMessage> */}
              </FormControl>
            </Form>
          )}
        </Formik>
      </Flex>
    </Flex>
  );
};

export default Register;
