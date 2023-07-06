import React from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  FormControl,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
  VStack,
  Checkbox,
} from "@chakra-ui/react";

const SignUp = (props) => {
  return (
    <Box w='70vh' h='80vh' margin='auto'>
      <Heading as="h2" fontWeight="500" fontSize="25px" letterSpacing="-0.2px">
        Register
      </Heading>
      <Text> Please fill in the information below</Text>

      <br />
      <Center>
        <Stack spacing="4">
          <VStack as="header" spacing="6" mt="8"></VStack>
          <Card w="400px">
            <CardBody>
              <form>
                <Stack spacing="4">
                  <FormControl marginBottom="10px">
                    <Input
                      type="text"
                      placeholder="First Name"
                      w="100%"
                      bg="white"
                      borderColor="#d8dee4"
                      size="lg"
                      padding="10px"
                      borderRadius="30px"
                    />
                  </FormControl>
                  <FormControl marginBottom="10px">
                    <Input
                      type="text"
                      placeholder="Last Name"
                      w="100%"
                      bg="white"
                      borderColor="#d8dee4"
                      size="lg"
                      padding="10px"
                      borderRadius="30px"
                    />
                  </FormControl>
                  <FormControl marginBottom="10px">
                    <Input
                      type="text"
                      placeholder="E-mail"
                      w="100%"
                      bg="white"
                      borderColor="#d8dee4"
                      size="lg"
                      padding="10px"
                      borderRadius="30px"
                    />
                  </FormControl>
                  <FormControl marginBottom="10px">
                    <Input
                      type="password"
                      placeholder="Password"
                      w="100%"
                      bg="white"
                      borderColor="#d8dee4"
                      size="lg"
                      padding="10px"
                      borderRadius="30px"
                    />
                  </FormControl>
                  <label>
                  <input type="checkbox"/>  I have read and I accept the privacy policy
                  </label>
                  

                  <br />
                  <Button
                    className="SignUp"
                    type="submit"
                    bg="#161616"
                    border="none"
                    color="white"
                    width="105%"
                    padding="10px"
                    borderRadius="30px"
                    size="lg"
                    fontSize="15"
                    cursor="pointer"
                    _hover={{
                      bg: 'white',
                      color: 'black',
                     transition: 'background-color 0.3s ease-in-out'
                    }}
                  >
                    Create my Account
                  </Button>
                </Stack>
              </form>
            </CardBody>
          </Card>
        </Stack>
      </Center>
      <Center as="footer" mt="16">
        <HStack spacing="4" pt="2">
          <Button
            onClick={() => props.onFormSwitch('login')}
            border='none'
            bg='white'
            className="fp"
            isExternal
            color="#515151"
           
            fontSize="xs"
          >
            Already registered? Log in!
          </Button>
        </HStack>
      </Center>
    </Box>
  );
};

export default SignUp;