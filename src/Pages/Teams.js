import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Box, Heading, HStack } from '@chakra-ui/react';
import { Stack, VStack } from '@chakra-ui/react';
import { GridItem, Grid, Image, Text, Flex, Link } from '@chakra-ui/react';
import Nav from '../components/navbar';
import Head from '../components/heading';
import BuildTogether from '../components/ buildTogether';
import WhatDoWeDo from '../components/whatDoWeDo';
import Links from '../components/links';
import Teams from '../components/teambox';
import Teamnav from '../components/footerofteams';
import Bottomteam from '../components/bottomnav_teamspage';





const TeamNavMember = (props) => {
  //hover state
  const [hover, setHover] = useState(false);
  return (
    <Box
      pos="relative"
      w={props.isSelected ? '150px' : '100px'}
      h={props.isSelected ? '150px' : '100px'}
      borderRadius="50%"
      overflow="hidden"
      //onHover
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image src={props.image} w="100%" h="100%" objectFit="cover" />
      {hover && (
        <Box
          pos="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="rgba(0,0,0,0.5)"
          display="flex"
        >
          <Text 
            color="white"
            m="auto"
            p={2}
            fontSize="1.2rem"
            textAlign="center"
            >
            {props.name}
          </Text>
        </Box>
      )}
    </Box>
  );
}


const TeamNav = (props) => {
  // available pos must be in odd numbers
  const posArray = props.posArray;
  const selectedPos = props.selectedPos;
  const setSelectedPos = props.setSelectedPos;
  const setPosArray = props.setPosArray;
  // selectedPos will always be in the center and bigger than the other positions


  const handleClicked = (index) => {
    // if the selectedPos is clicked, do nothing
    if (index === selectedPos) return;
    // if the selectedPos is not clicked, set the selectedPos to the clicked index
    
    const temp = [...posArray];
    //get element at index and put it in the center
    const selectedElement = temp.splice(index, 1);
    temp.splice(temp.length/2, 0, selectedElement[0]);
    setSelectedPos(Math.ceil(temp.length-1)/2);
    //set the new array
    setPosArray(temp);
  }

  return (
    <HStack 
    spacing={5}
    p={5}
    
    >
      {posArray.map((it, index) => (
        <Box onClick={() => handleClicked(index)}>
          <TeamNavMember
            image={it.image}
            name={it.name}
            isSelected={index === selectedPos}
          />
        </Box>
      ))}
    </HStack>
  );
}

function Teampage() {
  const [selectedPos, setSelectedPos] = useState(0);
  const [posArray, setPosArray] = useState([
    {
      image: '/13.png',
      name: 'UI/UX Designer',
    },
    {
      image: '/14.png',
      name: 'Frontend Developer',
    },
    {
      image: '/15.png',
      name: 'Backend Developer',
    },
    {
      image: '/16.png',
      name: 'ML Engineer',
    },
    {
      image: '/17.png',
      name: 'Tech Writer',
    }
  ])

  return (
    <ChakraProvider>
      <>
        <Box bgColor={'#111111'} height={'100%'} m={0}>
          <Nav />
          <Head />
          <Flex justify={'center'} align={'center'}>
            <Box
              justifySelf={'center'}
              alignContent={'center'}
              bgPosition={'center'}
              alignItems={'center'}
              width={950}
              height={400}
              p={10}
              borderRadius={15}
              bg="linear-gradient(93.17deg, rgba(131, 129, 129, 0.2) 0%, rgba(255, 255, 255, 0.2) 97.37%)"
            >
              <Text
                fontSize={'2xl'}
                fontWeight={'bold'}
                color={'white'}
                ml={4}
                
                textAlign={'center'}
              >
                {posArray[selectedPos].name}
              </Text>
              <Image
                src={posArray[selectedPos].image}
                position="relative"
                ml={4}
                mb={3}
                width={'25%'}
                size={'auto'}
                mt={7}
              />
              

            </Box>
          </Flex>

          <Flex align={'center'} justify="center">
            <VStack>
              <Box>
                <Box textAlign={'center'} alignItems="center" color={'white'}>
                  <Text mb={'0.61%'} fontSize={30} mt={5}>
                    Core Team
                  </Text>

                  <Image
                    src="/Line 3.png"
                    ml={'auto'}
                    mr={'auto'}
                    align="center"
                  />
                </Box>
              </Box>

              <Box
                mt={4}
                alignContent="center"
                position={'relative'}
                w="100%"
                
                ml={50}
              >
               
                <TeamNav
                  posArray={posArray}
                  selectedPos={selectedPos}
                  setSelectedPos={setSelectedPos}
                  setPosArray={setPosArray}
                />

              </Box>
            </VStack>
          </Flex>
        </Box>
      </>
    </ChakraProvider>
  );
}

export default Teampage;
