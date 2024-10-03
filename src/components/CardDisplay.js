import FlexContainer from './FlexContainer'
import Card from './Card'
import axios from 'axios'
import { useState, useEffect } from 'react'

const CardDisplay = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    setLoading(true)
    try {
      const response = await axios.get('https://fakestoreapi.com/products')
      setData(response.data)
      console.log(response.data)
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    console.log(data)
  }, [data])

  if (loading) {
    return <div>LOADING</div>
  }
  return (
    <FlexContainer className="w-full gap-4 grid grid-cols-12">
      {/* <Card />
      <Card />
      <Card />
      <Card /> */}
      {data.map((item, i) => (
        <Card key={i} item={item} />
      ))}
    </FlexContainer>
  )
}
export default CardDisplay
