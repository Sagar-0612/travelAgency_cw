import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box bg={'black'} color={'white'} p={10}>
        <Box display={['block', 'block', 'flex']}>
          <Box w={["100%","100%","30%"]}>
            <label >Subscribe</label>
            <Input mt={6} color={'black'} placeholder='Enter Your Email' bg={'white'} borderRadius={0} />
            <Button bg={"#e4fc01"} mt={3} w={"100%"} borderRadius={0}>Subscribe</Button>
            <Flex>
              <input type='radio' w={"10%"} />
              <Text ml={3}>By checking this box I am opting in to marketing messages from Earliy majority .</Text>
            </Flex>
          </Box>
          <Box m={'auto'}display={['block', 'flex', 'flex']}textAlign={['center','left','left']}>
            <Box m={5}>
              <Text>COMPANY</Text>
              <Text>About us</Text>
              <Text>Be an.ambassador</Text>
              <Text>Team</Text>
              <Text>Board selector</Text>
            </Box>
            <Box m={5}>
              <Text>COMPANY</Text>
              <Text>About us</Text>
              <Text>Be an.ambassador</Text>
              <Text>Team</Text>
              <Text>Board selector</Text>
            </Box>
            <Box m={5}>
              <Text>COMPANY</Text>
              <Text>About us</Text>
              <Text>Be an.ambassador</Text>
              <Text>Team</Text>
              <Text>Board selector</Text>
            </Box>
            <Box m={5}>
              <Text>COMPANY</Text>
              <Text>About us</Text>
              <Text>Be an.ambassador</Text>
              <Text>Team</Text>
              <Text>Board selector</Text>
            </Box>
          </Box>
        </Box>
      </Box>
  )
}

export default Footer
