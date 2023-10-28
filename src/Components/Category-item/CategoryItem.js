import './Category.scss'

const CategoryItem = ({ category }) => {
    const { imageUrl, title } = category
    return (
        <div>
            
            <div className="category-container">
                <div
                    className="background-image"
                    style={{
                        backgroundImage: `Url(${imageUrl})`
                    }} />
                <div className="category-body-container">
                    <h2>{title}</h2>
                    <p>Shop Now!</p>

                </div>
            </div>

        </div>
    )
}

export default CategoryItem
