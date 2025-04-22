import './App.css'
import Home from './components/Home'
import Counter from './components/Lab 6/q1/Counter'
import TodoList from './components/Lab 6/q2/TodoList'
import NavigationMenu, { About, Contact } from './components/Lab 6/q3/NavigationMenu'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home as NavigationMenuHome } from './components/Lab 6/q3/NavigationMenu'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/Lab-6/question-1',
      element: <Counter />
    },
    {
      path: '/Lab-6/question-2',
      element: <TodoList />
    },
    {
      path: '/Lab-6/question-3',
      element: <NavigationMenu><NavigationMenuHome /></NavigationMenu>
    },
    {
      path: '/Lab-6/question-3/about',
      element: <NavigationMenu><About /></NavigationMenu>
    },
    {
      path: '/Lab-6/question-3/contact',
      element: <NavigationMenu><Contact /></NavigationMenu>
    },
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
