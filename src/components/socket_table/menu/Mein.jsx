import MeinHeader from './MeinHeader'
import MeinNav from './MeinNav'
import MeinCategories from './MeinCategories'
import MeinBody from './MeinBody'
import DishModal from '../modals/DishModal'
const Mein = () => {
  return (
    <div>
      <MeinNav />
      <MeinHeader />
      <MeinCategories />
      <MeinBody />
      <DishModal />
    </div>
  )
}

export default Mein
