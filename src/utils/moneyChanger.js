const changer = (value) => {
  const result = value.toString();
  return result.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export default changer;
