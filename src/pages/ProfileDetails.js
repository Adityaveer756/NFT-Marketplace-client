import React, { useEffect, useState } from 'react'
import Form from '../components/Form'

const ProfileDetails = () => {
  
  const text_fields = ['username']
  
  return (
    <>
      <Form formHeading='Profile details' imageField_a='Profile Image' imageField_b='Banner Image'
            textFields={text_fields} />
    </>
  )
}

export default ProfileDetails
