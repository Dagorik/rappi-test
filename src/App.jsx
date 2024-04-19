import './App.css'
import useUsers from './hooks/useUsers'
import DataTable from './components/DataTable';

function App() {
  const { isLoading, error, users } = useUsers();


  if (isLoading) return <h1>Loaading...</h1>
  if (error) return <h1>Error...</h1>
  return (
    <>
      <DataTable users={users} />
    </>
  )
}

export default App
