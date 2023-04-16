import Layout from "@/components/Layout";
import NavBar from "../components/NavBar";
import "../styles/globals.css"
/**
 * global 적용
 */
export default function App({Component, pageProps}) {
    return (
    <Layout>
        <Component {...pageProps}/>
        <style jsx global>{`
            a {
                color : white;
            }
        `}</style>
    </Layout>
    );
}