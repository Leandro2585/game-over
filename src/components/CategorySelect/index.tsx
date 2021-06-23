import { ScrollView } from 'react-native'
import { Category } from '../'
import { useCategory } from '../../contexts/CategoryContext'
import { categories } from '../../utils/Categories'
import { Styles } from './style'

export const CategorySelect: React.FC = () => {
  const { currentCategorySelected, selectCategory } = useCategory()

  return (
    <ScrollView 
      horizontal
      style={Styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => {
        <Category 
          key={category.id}
          title={category.title} 
          icon={category.icon}
          onPress={() => selectCategory(category.id)}
          checked={category.id === currentCategorySelected} 
        />
      })}
    </ScrollView>
      
  )
}