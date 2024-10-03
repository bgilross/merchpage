import FlexContainer from './FlexContainer'
import { FaCartPlus } from 'react-icons/fa'

const Card = ({ item }) => {
  console.log('Card Starting: ', item)
  // if (!item) {
  //   return <div>NO Item.</div>
  // }
  return (
    <FlexContainer className="border bg-black/45 col-span-12 md:col-span-6 lg:col-span-3">
      <div className="truncate w-full">
        <h1 className="text-xl font-bold hover:animate-scroll">{item.title}</h1>

        <div className="flex py-3 w-full justify-center items-center relative">
          <img
            src={item.image}
            className="h-[250px] w-auto rounded-3xl cursor-pointer hover:scale-105 ease-in-out duration-200"
          />
        </div>
        <div className="flex w-full justify-between items-center">
          <h2 className="text-lg">{item.price}</h2>
          <FaCartPlus size={20} className="cursor-pointer" />
        </div>
      </div>
    </FlexContainer>
  )
}
export default Card
