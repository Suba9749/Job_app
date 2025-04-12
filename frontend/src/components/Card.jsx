import { Box, Button, Heading, HStack,Input,Modal,Text, useDisclosure, VStack,ModalOverlay ,ModalContent,ModalHeader, ModalCloseButton, ModalBody, ModalFooter} from "@chakra-ui/react";
import { useJob } from "../job/job";
import { useState } from "react";



const Card=({job})=>{

    const [updateJobs, setUpdateJob] = useState(job);

    const { isOpen, onOpen, onClose }=useDisclosure();

    const {deleteJob,updateJob}=useJob();

   const handelDelete=async(id)=>{
    const res=await deleteJob(id);
    if(res.success){
        alert(res.message);
    }else{
        alert("Something went wrong");
    }
   };

   const handleUpdate=async(id,updatedJob)=>{
    const res=await updateJob(id,updatedJob);  
    onClose();  
    if(res.success){
        alert(res.message);
    }
    else{
        alert("Something went wrong");
    }
    }

    return (
       <Box 
       shadow={"md"}
       rounded={"lg"}   
       p={6}
       _hover={{
        shadow:"lg",
        transform:"scale(1.02)",
        transition:"all 0.2s ease-in-out",
       }}>
       <Box fontSize={"2xl"} fontWeight={"bold"} mb={2}>
        <Heading as={"h3"} size={"md"} mb={2}>
            {job.company}

        </Heading>
        <Text fontSize={"lg"} color={"gray.500"}>
            {job.role}  
            </Text>
        <Text fontSize={"sm"} color={"gray.400"} mb={2}>
            {job.status}
        </Text>
        <Text fontSize={"sm"} color={"gray.400"} mb={2}>
            {job.date}
        </Text>
        <Text fontSize={"sm"} color={"gray.400"} mb={2}>
            {job.link}
        </Text>
        <HStack spacing={2} mt={4}>
            <Button colorScheme={"blue"} onClick={onOpen} >Edit</Button>
            <Button colorScheme={"red"} onClick={()=>handelDelete(job._id)}>Delete</Button> 
        </HStack>
        

        </Box>
        <Modal isOpen={isOpen} onClose={onClose} >
           <ModalOverlay>
           
                <ModalContent>
                    <ModalHeader>Edit Job</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                    <VStack spacing={4}>    
                        <Input placeholder="Company" defaultValue={job.company}
                        onChange={(e)=>setUpdateJob({...updateJobs,company:e.target.value})} />  
                        <Input placeholder="Role" defaultValue={job.role} 
                        onChange={(e)=>setUpdateJob({...updateJobs,role:e.target.value})}/>
                        <Input placeholder="Status" defaultValue={job.status}
                         onChange={(e)=>setUpdateJob({...updateJobs,status:e.target.value})} />
                        <Input placeholder="Date" defaultValue={job.date} 
                         onChange={(e)=>setUpdateJob({...updateJobs,date:e.target.value})}/>
                        <Input placeholder="Link" defaultValue={job.link}
                         onChange={(e)=>setUpdateJob({...updateJobs,link:e.target.value})} />
                    </VStack>
                    </ModalBody>
                    <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={()=>handleUpdate(job._id,updateJobs)}>
             Update
            </Button>
            <Button variant='ghost' onClick={onClose}>Cancel</Button>
          </ModalFooter>
                    
                        <Input/>
                </ModalContent>
           </ModalOverlay>
        </Modal>

       </Box>
    );
}

export default Card;
