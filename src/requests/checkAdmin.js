const checkAdmin = () => {
  const mfhdAccess = localStorage.getItem('mfhdToken');
  const dateNow = new Date().getTime();

  if (new Date(mfhdAccess).getTime() > dateNow) {
    return true;
  } else {
    localStorage.removeItem('mfhdAccess');
    return false;
  }
};

export default checkAdmin;
