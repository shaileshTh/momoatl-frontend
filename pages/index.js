import Head from 'next/head'
import { Button, Alert, Jumbotron, Container} from "reactstrap";
import Layout from "../components/Layout";
import Emoji from "../components/Emoji"

export default function Home() {
  return (
    <>
      <Head>
        <title>Free Delivery Today - momoATL.com</title>
      </Head>
      <Layout/>
      <Container>
      </Container>
      <Jumbotron fluid style = {{marginBottom: '0', backgroundColor: '#bbbcc1', textAlign:'center',backgroundImage: "url('https://goseveth.sirv.com/image3.png')", backgroundSize:'cover'}}>
        <h2 className="display-3" style = {{textShadow: '2px 2px 4px white', fontWeight: '500', marginTop:'5em', fontSize:'40px',}}>Nepali Momos</h2>
        <p className="lead" style = {{fontSize: '30px', fontWeight:'500', textShadow: '2px 2px 4px white',}}>(Dumplings) Handmade in Atlanta</p>
          <Button className="btn btn-dark btn-lg active" style = {{marginBottom:'0'}}>
          <Emoji symbol="🚚" label="dumpling"/>{' '}Click for Free Delivery!
          </Button>
      </Jumbotron>
      <footer style = {{background:'lightgrey', height:'100px'}}></footer>

    </>
  )
}
