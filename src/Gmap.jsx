import {React,useEffect} from 'react'

export default function Gmap() {
    useEffect(
        ()=>{
          navigator.geolocation.getCurrentPosition((position)=>{
            console.log(position.coords.latitude)
            console.log(position.coords.longitude)

          })
        }
      )
  return (
       <>
    <address>
      <b>appbuild tech location </b>
    </address>
          
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.7604627098935!2d79.05455967450054!3d21.122113980550672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c078e14fffff%3A0xff2f2978d3dff354!2sAppxbuild!5e0!3m2!1sen!2sin!4v1725777020751!5m2!1sen!2sin" width="800" height="600"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </>
  )
}
