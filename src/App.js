import Header from "./components/header/Header";
import TravelPost from "./components/travelPost/TravelPost";
import data from "./data";
import "./theme/style.css";

function App() {

  let posts = data.map( trip => {
    return <TravelPost 
        trip = {trip}        
    />
  })

  return ( 
    <>
      <Header />
      {posts}
    </>
  )
}

export default App;
