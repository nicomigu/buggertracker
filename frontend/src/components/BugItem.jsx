import {useDispatch} from 'react-redux'
import {deleteBug} from '../features/bugs/bugSlice'

function BugItem({bug}) {
  const dispatch = useDispatch();

  return (
    <div className='bug'>
      <div>
        {new Date(bug.createdAt).toLocaleString('en-ca')}
      </div>
      <h2>{bug.title}</h2>
      <h2>{bug.status}</h2>
      <h2>{bug.description}</h2>
      <button onClick={() => dispatch(deleteBug(bug._id))} className="close">X</button>
    </div>
  )
}

export default BugItem