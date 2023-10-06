import Image from 'next/image'
// import Sponsorship from './Components/Sponsorship'
import Sponsor from './Components/Sponsor'
import Message from './Components/Message'
import Sidebar from './Components/Sidebar'
import HomePage from './Components/HomePage'
import Bar from './Components/Bar'
import Button from './Components/Button'
import Sponsorship from './Components/Sponsorship'
import Donation from './Components/Donation'








export default function Home() {
  return (
    <div>
     
     <Sponsorship></Sponsorship>
    {/* <Sponsorship></Sponsorship>
    <Sponsor></Sponsor>
    // <Message></Message>
     <Button></Button> */}
     <Sidebar></Sidebar>
     {/* <HomePage></HomePage> */}
    {/* <Bar/> */}
     {/* <Bar></Bar> */}
     <Message></Message>
     <Donation></Donation>
     
    
    </div>
  )
}
