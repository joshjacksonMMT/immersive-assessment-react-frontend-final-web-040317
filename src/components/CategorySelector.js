import React from 'react'

//Components
import CategoryField from './CategoryField'

//Data
import categories from '../categories'

const CategorySelector = (props) => 
{
  const categoryFields = categories.map(
    (category, i) =>
    {
      const checked = category === props.activeCategory

      return (
        <CategoryField key={i} checked={checked} category={category} changeCategory={props.changeCategory} />
      );
    }
  )

  return (
    <div className="sixteen wide column">
      <div className="ui form">
        <div className="inline fields">
          {categoryFields}
        </div>
      </div>
    </div>
  )
}

export default CategorySelector
