import React from 'react'
import { ClipLoader } from 'react-spinners'




const Spinner = ({ loading }) => {
    const overRide = {
        display: "block",
        margin: "100px auto"
    }
  return (
    <ClipLoader color='#4338ca' loading={loading} cssOverride={overRide} size={150} />
  )
}

export default Spinner
