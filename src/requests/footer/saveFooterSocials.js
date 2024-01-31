import axios from 'axios';

const saveFooterSocials = async (social) => {
  const checkFields = () => {
    if (!social.title || !social.link) {
      return false;
    } else {
      return true;
    }
  };

  if (checkFields()) {
    const res = await axios.get(`http://localhost:8000/footer/socials`);
    const socials = await res.data.socials;

    console.log(socials);

    var socialFound =
      socials && socials.length ? socials.find((item) => item.title === social.title) : false;

    if (!socialFound) {
      socials.push(social);

      try {
        console.log(socials);
        await axios.patch(`http://localhost:8000/footer/socials`, { socials });
      } catch (error) {
        throw new Error(error.message);
      }
    } else {
      alert(`Item ${social.title} already exists.`);
    }
  } else {
    alert('All fields must be filled.');
  }
};

export default saveFooterSocials;
