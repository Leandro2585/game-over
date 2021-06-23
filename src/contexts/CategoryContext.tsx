import { createContext, useContext, useState } from 'react'

type CategoryContextProps = {
  currentCategorySelected: string;
  selectCategory(categoryId: string): void;
}

const CategoryContext = createContext<CategoryContextProps>({} as CategoryContextProps)

const CategoryProvider: React.FC = ({ children }) => {
  const [currentCategorySelected, setCurrentCategorySelected] = useState('1')
  
  function selectCategory(categoryId: string) {
    setCurrentCategorySelected(categoryId)
  }
  return (
    <CategoryContext.Provider value={{ currentCategorySelected, selectCategory }}>
      {children}
    </CategoryContext.Provider>
  )
}

function useCategory(): CategoryContextProps {
  const context = useContext(CategoryContext)
  return context
}

export { CategoryProvider, useCategory }