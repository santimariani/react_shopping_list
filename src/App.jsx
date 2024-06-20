import { useState } from 'react'

import ShoppingForm from './components/ShoppingForm';
import ShoppingList from './components/ShoppingList';


function App() {
  const [shoppingListItems, setShoppingListItems] = useState({})

  return (
    <>
      <h1>Time to go Shopping</h1>
      <ShoppingForm generateList={setShoppingListItems}/>
      <ShoppingList items={shoppingListItems}/>
    </>
  )
}

export default App
