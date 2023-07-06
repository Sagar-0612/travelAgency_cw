import { Box, Button, Flex, Img, Input, Spacer, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Logo from "../Photos/Home_page/1.png"
import { GiHamburgerMenu } from 'react-icons/gi';
const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <Flex bg={'black'} color={'white'} fontWeight={500} fontSize={"13px"}>
      <Box display={['block', 'block', 'none']} my={'auto'} fontSize={'20px'} mx={'10px'}><GiHamburgerMenu /></Box>
      <Box w={["100%", "100%", "15%"]}><Img m={'auto'} src={Logo} /></Box>
      <Spacer />
      <Flex display={['none', 'none', 'flex']}>
        <Text m={'auto'}>DECKS</Text>
        <Text px={5} m={'auto'}>SKEATEBOARD</Text>
        <Text m={'auto'}>WHEEL</Text>
        <Text px={5} m={'auto'}>SPARE PARTS</Text>
      </Flex>
      <Spacer />
      <Flex display={['none', 'none', 'flex']} m={'auto'}>
        {
          toggle ? <Text m={'auto'} onClick={() => setToggle(false)}>SEARCH</Text> : <Flex>
            <Input color={'black'} w={'70%'} h={'4vh'} bg={'white'} placeholder={"Search SkeateBoard"} borderRadius={0} />
            <Button borderRadius={0} h={"4vh"} w={'20%'} onClick={() => setToggle(true)}>Search</Button>
          </Flex>
        }
        <Text m={'auto'} px={5}>WISHLIST</Text>
      </Flex>
      <Text m={'auto'} px={5}>BAG</Text>
    </Flex>
  )
}

export default Navbar
