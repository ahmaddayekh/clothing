import CategoryItem from '../Category-item/CategoryItem';
import "./Directory.scss"

const Directory = ({categories}) => (
    
    <div className="directory-container">

      {categories.map((category) => (
        <CategoryItem key = {category.id} category={category}/>
      ))}

    </div>
)

export default Directory