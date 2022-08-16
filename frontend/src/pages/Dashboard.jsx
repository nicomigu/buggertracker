import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import  BugForm from '../components/BugForm'
import  BugItem from '../components/BugItem'
import Spinner from '../components/Spinner'
import { getBugs, reset } from '../features/bugs/bugSlice';
import { DataGrid } from '@mui/x-data-grid'
import { Box } from '@mui/material';


function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {user} = useSelector((state) => state.auth)
  const {bugs, isLoading, isError, message} = useSelector((state)=>state.bugs)

  useEffect(() => {
    if(isError){
      console.log(message)
    }
    if(!user){
      navigate('/login')
    }

    dispatch(getBugs())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if(isLoading){
    return <Spinner />
  }

  const columns = [
    {field: 'title', headerName: 'Title'},
    {field: 'status', headerName: 'Status'},
    {field: 'description', headerName:'Description'},
    {field: 'createdAt', headerName: 'Date Created'}
  ]

  const rows = bugs.map((row) => ({
    id: row._id,
    title: row.title,
    status: row.status,
    description: row.description,
    createdAt: row.createdAt
  }))

  return (
    <>
    <section className='heading'>
      <h1>Bug Tickets Dashboard</h1>
    </section>

    <BugForm />

    <section className='content'>
        {bugs.length > 0 ? (
          <Box sx={{ height: 400, width: '100%'}} >
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
            />
          </Box>
        ) : (
          <h3>You have not set any goals</h3>
        )}
      </section>
    
  </> 
  )
}
export default Dashboard