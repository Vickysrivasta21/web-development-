import React from 'react'
import Script from 'next/script'

const page = () => {
  return (
    <div>
      <Script>{`alert("WELCOME TO CONTACTS")`}</Script>
      i am contact
    </div>
  )
}

export default page

export const metadata = {
  title: " contact us- Facebook-connect woth the world",
  description: "contact we connect loved ones",
};