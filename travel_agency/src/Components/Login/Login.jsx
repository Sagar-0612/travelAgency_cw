import React, { useState } from 'react';
import { Box, Heading, Text, Center, Flex, HStack, FormControl, Input, Button, Stack, VStack, Card, CardBody, Link } from '@chakra-ui/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




const Login = (props) => {

  const history = useNavigate();
  const [emailid, setEmailid] = useState('');
  const [pass, setPass] = useState('');
  const [err, setErr] = useState('');

  const handleEmailChange = (e) => {
    setEmailid(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPass(e.target.value);
  };

  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('*Email is required'),
    password: Yup.string().required('*Password is required')
  });

  // Define initial form values
  const initialValues = {
    email: '',
    password: ''
  };

  // Handle form submission
  const handleSubmit = async  (e, { setSubmitting }) => {

    e.preventDefault();
    setErr('');

    try {
      const response = await axios.post(`http://localhost:3000/users`, { emailid, pass });
      // Assuming the API responds with a success message
      if (response.data.success) {
        history.push('/dashboard'); // Redirect to the dashboard on successful login
      } else {
        setErr(response.data.message);
      }
    }
    catch (error) {
      setErr('An error occurred. Please try again.');
    }
  };
    // Perform login logic here
    

    

  return (
    <Box  w='65vh' h='80vh' margin='auto'>
      <Heading as="h2" fontWeight="500" fontSize="25px" letterSpacing="-0.2px">
        Login
      </Heading>
      <Text>Please enter your e-mail and password</Text>
      <br />
      <Center>
        <Flex>
          <HStack spacing="20">
            {/* Icons or images for social login buttons */}
          </HStack>
        </Flex>
      </Center>
      <br />
      <br />
      <Center>
        <Stack spacing="4">
          <VStack as="header" spacing="6" mt="8"></VStack>
          <Card w="400px">
            <CardBody>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <Stack spacing="4">
                      <FormControl marginBottom="10px">
                        <Field
                          type="text"
                          name="email"
                          value={emailid}
                          onChange={handleEmailChange}
                          placeholder="Enter your Email"
                          as={Input}
                          w="100%"
                          bg="white"
                          borderColor="#d8dee4"
                          size="lg"
                          padding="10px"
                          borderRadius="15px"
                        />
                        
                        <ErrorMessage name="email" component="div" color="#515151" />
                      </FormControl>
                      <FormControl marginBottom="10px">
                        <Field
                          type="password"
                          name="password"
                          value={pass}
                          onChange={handlePasswordChange}
                          placeholder="Enter your Password"
                          as={Input}
                          w="100%"
                          bg="white"
                          borderColor="#d8dee4"
                          size="lg"
                          padding="10px"
                          borderRadius="15px"
                        />
                        <ErrorMessage name="password" component="div" color="#515151" />
                      </FormControl>
                      <HStack justifyContent="end">
                        <Button
                          className="fp"
                          as="a"
                          href="#"
                          variant="link"
                          size="xs"
                          fontWeight="500"
                          fontSize="15"
                          display="flex"
                          alignItems="end"
                          color="#515151"
                        >
                          Forgot password?
                        </Button>
                      </HStack>
                      <br />
                      <Button
                      margin='auto'
                        className="login"
                        type="submit"
                        bg="#161616"
                        color="white"
                        width="70%"
                        padding="10px"
                        borderRadius="15px"
                        size="lg"
                        fontSize="15"
                        cursor="pointer"
                        isLoading={isSubmitting}
                        _hover={{
                          bg: 'white',
                          color: 'black',
                         transition: 'background-color 0.3s ease-in-out'
                        }}
                      >
                        Log in
                      </Button>
                    </Stack>
                  </Form>
                )}
              </Formik>
            </CardBody>
          </Card>
          <br />

          
        </Stack>
      </Center>
      <Center as="footer" mt="16">
        <HStack spacing="4" pt="2">
          <Button onClick={() => props.onFormSwitch('register')} border='none' bg='white' className="fp" isExternal color="#515151" fontSize="xs">
            Don’t have an account?
          </Button>
        </HStack>
      </Center>
    </Box>
  );
};

export default Login;