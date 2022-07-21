import tw from 'twin.macro'
// import Footer from './Footer'
import Navbar from './Navbar/index'

const Container = tw.main`container`

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <Container>{children}</Container>
            {/* <Footer /> */}
        </>
    )
}
