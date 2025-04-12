import { Container, VStack,Text, SimpleGrid } from '@chakra-ui/react'
import React, { use, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useJob } from '../job/job';
import Card from '../components/Card';

function Home() {
    const {fetchJobs,jobs}=useJob();


    useEffect(()=>{
        fetchJobs();
    },[fetchJobs]);
    console.log("jobs",jobs);
  return (
    <Container maxW={"container.sm"}>
        <VStack spacing={8}>
            <Text
            fontSize={"4xl"}
            fontWeight={"bold"}
            textAlign={"center"}
            >
                Current Job 
            </Text>

<SimpleGrid
columns={{base:1,md:2 ,lg:3}}
 spacing={4} w={"full"}>
{jobs.map((job)=>(
    <Card key={job._id} job={job}/>
))}
            
</SimpleGrid>


            {jobs.length===0 && (
                <Text
                fontSize={"xl"}
                fontWeight={"bold"}
                textAlign={"center"}
                color={"gray.500"}
                >
                    No jobs found
                    <Link to={"/jobs"}>
                    <Text as={"span"} 
                    color={"blue.400"} fontWeight={"bold"} _hover={{textDecoration:"underline"}}>
                         Create a new job</Text>
                    </Link>
                </Text>
                )}
            
</VStack>
        </Container>
  )
}

export default Home
