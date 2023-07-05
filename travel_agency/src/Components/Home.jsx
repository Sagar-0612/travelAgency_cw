import { AspectRatio, Box, Button, Flex, Img, Input, Link, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import Logo from "../Photos/Home_page/1.png"
import { GiHamburgerMenu } from 'react-icons/gi';
import Img1 from "../Photos/Home_page/2.jpg"
const Home = () => {
  return (
    <>
      <Flex bg={'black'} color={'white'} fontWeight={500} fontSize={"13px"}>
        <Box display={['block', 'block', 'none']} my={'auto'} fontSize={'20px'} mx={'10px'}><GiHamburgerMenu /></Box>
        <Box w={["100%", "100%", "15%"]}><Img m={'auto'} src={Logo} /></Box>
        <Spacer />
        <Flex display={['none', 'none', 'flex']}>
          <Text m={'auto'}>SURFSCATES</Text>
          <Text px={5} m={'auto'}>EXTRAS</Text>
          <Text m={'auto'}>CLOTHES AND ACCESSORIES</Text>
          <Text px={5} m={'auto'}>SALE</Text>
        </Flex>
        <Spacer />
        <Flex display={['none', 'none', 'flex']}>
          <Text m={'auto'}>SEARCH</Text>
          <Text m={'auto'} px={5}>WISHLIST</Text>
        </Flex>
        <Text m={'auto'} px={5}>BAG</Text>
      </Flex>

      <Box bg={"#e6e6e6"}>


        <Box bgImg={[Img1, Img1, 'none']} backgroundRepeat="no-repeat" backgroundPosition="center" bgSize="90%">
          <Text mb={'-30px'} textAlign={'center'} fontSize={['10vh', '20vh', '30vh']} fontWeight={800}>CARVER</Text>
          <Text fontSize={'20px'} w={"80%"} textAlign={'right'}>Sinse 1997</Text>
          <Box textAlign={'center'} >
            <Box mt={'60px'} display={'flex'} justifyContent={'space-around'}>
              <Box display={['none', 'none', 'block']} w={'15%'} m={5}><img src={Img1} /></Box>
              <Box mb={["30vh", "30vh", 0]}>
                <h5>Make waves</h5>
                <Text fontSize={'40px'} fontWeight={600}>
                  NEW COLLECTION
                  <br />
                  SUMMER
                  <br />
                  twenty 22
                  <br />
                  CURATED BY
                  <br />
                  CARVER
                </Text>
                <Link>GO SHOPPING</Link>
              </Box>
              <Box display={['none', 'none', 'block']} w={'20%'} m={5}><img src={Img1} /></Box>
            </Box>
          </Box>
        </Box>

        <Box my={"10vh"} mx={"5vh"}>
          <AspectRatio maxW='900px' ratio={1} m={'auto'}>
            <iframe
              title='naruto'
              src='https://www.youtube.com/embed/QhBnZ6NPOY0'
              allowFullScreen
            />
          </AspectRatio>
        </Box>


        <Box textAlign={['center', 'center', 'left']} >
          <Box mt={'60px'} display={'flex'}>
            <Box display={['none', 'none', 'block']} w={'100%'} m={5}><img src={Img1} /></Box>
            <Box textAlign={['center', 'center', 'left']}>
              <Box fontSize={'40px'} fontWeight={400}><h2>ABOUT CARVER</h2></Box>
              <Text fontSize={'20px'} w={['80%', '80%', '100%']} m={'auto'}>
                It all started one quiet summer in Venice,California in 1995.Greg flak and Neil Carner had been surfing all winter, and were pumped to surf the warner waters of the Breakwater during the long days of summer, but it was as flat as a puddle. Not even a longboard ripple to justify getting wet.
              </Text>
              <Link>VIEW MORE</Link>
            </Box>
            <Box display={['none', 'none', 'block']} w={'50%'} m={'auto'} mx={10}><img src={Img1} /></Box>
          </Box>
          <Box m={'auto'} display={['block', 'block', 'none']} w={'60%'} ><img src={Img1} /></Box>
        </Box>



        <Box textAlign={['center', 'center', 'right']} >
          <Box mt={'60px'} display={'flex'}>
            <Box display={['none', 'none', 'block']} w={'50%'} m={5}><img src={Img1} /></Box>
            <Box textAlign={['center', 'center', 'right']}>
              <Box fontSize={'40px'} fontWeight={400}><h2>FOLLOW US <br /> IN INSTAGRAM</h2></Box>
              <Text fontSize={'20px'} w={['80%', '80%', '100%']} m={'auto'} >
                It all started one quiet summer in Venice,California in 1995.Greg flak and Neil Carner had been surfing all winter, and were pumped to surf the warner waters of the Breakwater during the long days of summer, but it was as flat as a puddle. Not even a longboard ripple to justify getting wet.
              </Text>
              <Link>VIEW MORE</Link>
            </Box>
            <Box display={['none', 'none', 'block']} w={'100%'} m={'auto'} mx={10}><img src={Img1} /></Box>
          </Box>
          <Box m={'auto'} display={['block', 'block', 'none']} w={'60%'} ><img src={Img1} /></Box>
        </Box>


      </Box>


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
    </>
  )
}

export default Home
