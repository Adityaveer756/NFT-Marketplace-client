import React from 'react'
import Form from '../components/Form'

const CollectionDetails = () => {

  const text_fields = ['Collection Name', 'Artist Name', 'Floor Price']   
  return (
    <>
      <Form formHeading='NFT Collection Details' imageField_a='Collection Logo'
            imageField_b='Banner Image' textFields={text_fields}/>
    </>
  )
}

export default CollectionDetails
