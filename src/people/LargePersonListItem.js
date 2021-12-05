const LargePersonListItem = ({ person }) => {
  const { name, age, hairColor, hobbies } = person;
  return (
    <>
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Color: {hairColor}</p>
    </>
  );
};

export default LargePersonListItem;
