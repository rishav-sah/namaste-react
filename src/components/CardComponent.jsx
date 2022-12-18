
const CardComponent = ({ userInfo }) => {
  const { email, phone, website, name } = userInfo;
  return (
    <div className="card-component">
      <ul>
        <li>{email}</li>
        <li>{phone}</li>
        <li>{website}</li>
        <li>{name}</li>
      </ul>
    </div>
  );
};

export default CardComponent;