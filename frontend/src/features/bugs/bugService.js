import axios from 'axios';
const API_URL = '/api/bugs/'

//Create new bug
const createBug = async (bugData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}` 
    }
  }

  //const bug = qs.stringify(bugData);
  const response = await axios.post(API_URL, bugData, config);

  return response.data;
}

//get Bugs
const getBugs = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}` 
    }
  }

  //const bug = qs.stringify(bugData);
  const response = await axios.get(API_URL, config);

  return response.data;
}


//DElete Bug
const deleteBug = async (bugId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}` 
    }
  }

  //const bug = qs.stringify(bugData);
  const response = await axios.delete(API_URL + bugId,config);

  return response.data;
}

const bugService = {
  createBug,
  getBugs,
  deleteBug
}

export default bugService;