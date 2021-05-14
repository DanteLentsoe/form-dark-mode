import React from "react";
import {
  Button,
  Flex,
  Heading,
  Input,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
const LoginForm = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.900");
  return (
    <>
      {/* @ts-ignore */}
      <Formik
        initialValues={{
          name: "",
          surname: "",
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("You have add a your name"),
        })}
        validate={(values) => {
          const errors = {};
          return errors;
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => {
          return (
            <>
              <Flex height="100vh" alignItems="center" justifyContent="center">
                <form
                  style={{ width: "auto", height: "auto" }}
                  onSubmit={handleSubmit}
                >
                  <Flex
                    direction="column"
                    background={formBackground}
                    p={12}
                    rounded={6}
                  >
                    <Heading mb={6}>Login In</Heading>
                    <Input
                      value={values.name}
                      id="name"
                      placeholder="Name"
                      variant="filled"
                      mb={3}
                      type="text"
                      onChange={handleChange}
                      required
                    ></Input>
                    <Input
                      value={values.surname}
                      id="surname"
                      placeholder="Surname"
                      variant="filled"
                      mb={3}
                      type="text"
                      onChange={handleChange}
                      required
                    ></Input>
                    <Input
                      value={values.email}
                      id="email"
                      placeholder="Enter Email Address"
                      variant="filled"
                      mb={3}
                      type="email"
                      onChange={handleChange}
                      required
                    ></Input>
                    <Input
                      id="password"
                      placeholder="Enter Password"
                      variant="filled"
                      mb={6}
                      type="password"
                      onChange={handleChange}
                    ></Input>
                    <Button type="submit" mb={6} colorScheme="cyan">
                      Submit
                    </Button>

                    <Button onClick={toggleColorMode}>Toggle Color</Button>
                  </Flex>
                </form>
              </Flex>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default LoginForm;
