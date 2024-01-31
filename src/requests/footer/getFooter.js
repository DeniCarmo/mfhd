import axios from 'axios';

const getFooter = async () => {
  try {
    const res = await axios.get(`http://localhost:8000/footer`);
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getFooter;
