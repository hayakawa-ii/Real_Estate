/* eslint-disable react/jsx-key */
import Link from 'next/Link'
import Image from 'next/Image'
import {Box, Flex, Text, Avatar} from '@chakra-ui/react'
import {FaBed, FaBath} from 'react-icons/fa'
import {BsGridFill} from 'react-icons/bs'
import {GoVerified} from 'react-icons/go'
import millify from 'millify'
import DefaultImage from '../assets/images/house.jpeg'

const Property = ({property: {coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID} }) => (
    <Link href={`/property/${externalID}`} passHref>
        <Flex flexWrap="wrap" p="5" w="420px" paddingTop="0" justifyContent="flex-start" cursor="pointer">
            <Box>
                <Image src={coverPhoto ? coverPhoto.url : DefaultImage} width={400} height={250} alt="house"/>
                <Box w="full">
                    <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
                            <Flex alignItems="center">
                            <Box paddingRight="3" color="green.400">{isVerified && <GoVerified/>}</Box>
                            <Text fontWeight="bold" fontSize="lg">RM {millify(price * 1.14)}{rentFrequency && `/${rentFrequency.substring(0,1)}`}</Text>
                            </Flex>
                            <Box>
                                <Avatar size="sm" src={agency?.logo?.url}/>
                            </Box>
                        <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.500">
                        {rooms} <FaBed/> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
                        </Flex>
                    </Flex>
                    <Text fontSize="lg">{title.length > 30 ? `${title.substring(0,30)}...` : title}
                        </Text>
                </Box>
            </Box>
        </Flex>
    </Link>
);

export default Property;