import MeinHeader from './MeinHeader'
import MeinNav from './MeinNav'
import MeinCategories from './MeinCategories'
import MeinDishList from './dishes/MeinDishList'
const Mein = () => {
  return (
    <div>
      <MeinNav />
      <MeinHeader />
      <MeinCategories />
      <MeinDishList />
    </div>
  )
}

export default Mein
