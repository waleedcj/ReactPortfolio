import { useEffect, useState } from 'react'
import 'animate.css'
import WOW from 'wowjs'
import Alert from '@mui/material/Alert'

const Popup = () => {
  //setShowModal(notification)

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init()
  }, [
    new WOW.WOW({
      live: false,
    }).init(),
  ])
  const [showModal, setShowModal] = useState()
  //setShowModal("Scroll to ZoomIn & Out");
  //   useEffect(() => {
  //     setTimeout(() => setShowModal(true), 6000)
  //     // setTimeout(() => setShowModal(true), 6000)
  //   }, [])
  //console.log(showModal)
  return <div></div>
}

export default Popup
