/* eslint-disable react/jsx-key */
import Head from 'next/head'
import {Box} from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = ({children}) => (
    <>
        <Head>
            <title>Real Estate</title>
        </Head>
        <Box maxwidth="1280px" m="auto">
            <header>
                <Navbar/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </Box>
    </>
);

export default Layout