import axios from 'axios';

const saveFooterSection = async (section) => {
  const checkFields = () => {
    section.items.forEach((item) => {
      if (!item.title || !item.link) {
        console.log(item);
        return false;
      }
      return true;
    });
  };

  if (checkFields) {
    const res = await axios.get(`http://localhost:8000/footer/sections`);
    const sections = await res.data.sections;

    console.log(sections);

    const sectionFound =
      sections && sections.length ? sections.find((item) => item.title === section.title) : false;

    if (!sectionFound) {
      sections.push(section);

      try {
        console.log(sections);
        await axios.patch(`http://localhost:8000/footer/sections`, { sections });
      } catch (error) {
        throw new Error(error.message);
      }
    } else {
      alert(`Section ${section.title} already exists.`);
    }
  } else {
    alert('All fields must be filled.');
  }
};

export default saveFooterSection;
