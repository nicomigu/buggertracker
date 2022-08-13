import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {createBug} from '../features/bugs/bugSlice'

function BugForm() {
  const [formData, setFormData] = useState({
    title: '',
    status: 'new',
    description: ''
  })
  const {title, status, description} = formData;

  const dispatch = useDispatch()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const bugData = {
      title,
      status,
      description
    }

    dispatch(createBug(bugData))
    //setTitle('')
  }
  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor='title'>Bug Title</label>
          <input type='text' name='title' id='title' value={title}
          onChange={onChange}></input>
        </div>
        <div className="form-group">
          <label htmlFor='description'>Description</label>
          <input type='text' name='description' id='description' value={description}
          onChange={onChange}></input>
        </div>
        <div className="form-group">
          <button className="btn btn-block" type='submit'>Submit new issue</button>
        </div>
      </form>
    </section>
  )
}

export default BugForm