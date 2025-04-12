import React from 'react'
import { Button, Container, Flex,HStack,Link,Text, Tooltip} from '@chakra-ui/react'
import { FaPlus } from "react-icons/fa";

function Navbar() {
  
  return <Container maxW={"1140px"} px={4}>
    <Flex
    h={"60px"}
    alignItems={"center"}
    justifyContent={"space-between"}
    boxShadow={"md"}
    flexDir={
        {
            base:"column",
            sm:"row"
        }}
    >
        <Text
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'
        fontSize='6xl'
        fontWeight='extrabold'
        >
        <Link to={"/"}>Jobify</Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
            <Tooltip label={"Create a Job"} placement={"bottom"} hasArrow arrowSize={10}>
            <Link to={"/create"}>
            <Button >
            <FaPlus />
            </Button>
            </Link>

            </Tooltip>
        </HStack>
    </Flex>
  </Container>
}

export default Navbar
