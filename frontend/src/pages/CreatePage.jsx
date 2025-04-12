import { Box, Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useJob } from '../job/job';

function CreatePage() {
    const [newJob,setNewJob]=useState({
        company:"",
         role:"",
         status:"applied",
         date:"",
         link:""
    });

    const {createJob}=useJob();

    const handelAddJob=async()=>{
       const {success,message} =await createJob(newJob)
        console.log("success",success);
        console.log("message",message);
    };
  return (
    <Container maxW={"container.sm"}>
        <VStack
        spacing={8}
        >
            <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
                create a new job
            </Heading>
            <Box w={'full'} shadow={"md"} p={6} rounded={"lg"}></Box>
        </VStack>
        <VStack spacing={4} mb={4}>
            <Input
            placeholder='Company Name'
            value={newJob.company}
            onChange={(e)=>setNewJob({...newJob,company:e.target.value})}
            />
        </VStack>
        <VStack spacing={4}mb={4}>
            <Input
            placeholder='Role'
            value={newJob.role}
            onChange={(e)=>setNewJob({...newJob,role:e.target.value})}
            />
        </VStack> 
        <VStack spacing={4} mb={4}>
            <Input
            placeholder='Status'
            value={newJob.status}
            onChange={(e)=>setNewJob({...newJob,status:e.target.value})}
            />
        </VStack>
        <VStack spacing={4}mb={4}>
            <Input
            placeholder='Date'
            value={newJob.date}
            onChange={(e)=>setNewJob({...newJob,date:e.target.value})}
            />  
            </VStack>
        <VStack spacing={4}mb={4}>
            <Input
            placeholder="link"
            value={newJob.link}
            onChange={(e)=>setNewJob({...newJob,link:e.target.value})}  
            ></Input>
            <Button colorScheme={"teal"} width={"full"} onClick={handelAddJob}>
                Create Job  </Button>
            </VStack>
  
    </Container>
  )
}

export default CreatePage
