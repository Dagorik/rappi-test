import { useEffect, useState } from 'react';
import UserModal from './UserModal';
import UserTable from './UserTable';
import Finder from './Finder';

const KEY = 'USER_FINDER';

// eslint-disable-next-line react/prop-types
function DataTable({ users }) {
    const [selectedUser, setSelectedUser] = useState();
    const [showModal, setShowModal] = useState(false);
    const [serch, setSearch] = useState(() => {
      return localStorage.getItem(KEY) || ''
    });
    const [usersfiltered, setUserFiltered] = useState([]);
  
    const handleModal = () => {
      setShowModal(!showModal);
    }
  
  
    const handleSelecetuser = (user) => {
      setSelectedUser(user);
      setShowModal(true);
    }
    
    useEffect(() => {
      if (users && users.length > 0) {
        setUserFiltered(users)
      }
    }, [users])

    useEffect(() => {
      const onSearch = (_text) => {
        const text = _text.toUpperCase();
        const filteredUsers = users.filter(({ name, company: { name: companyName } }) => {
          return name.toUpperCase().search(text) > -1 || companyName.toUpperCase().search(text) > -1
        });
        setUserFiltered(filteredUsers)        
      };
      localStorage.setItem(KEY, serch);
      const handler = setTimeout(() => {
        onSearch(serch)
      }, 500)
      return () => {
        clearTimeout(handler)
      }
    }, [serch, users])

    return (
      <>
        <Finder value={serch} onChange={(txt) => setSearch(txt)} />
        <UserTable users={usersfiltered} selectUser={handleSelecetuser} />
        <UserModal user={selectedUser} show={showModal} handleModal={handleModal} />
      </>
    )
}

export default DataTable;