const Card = ({ user }) => {
  const { firstName, lastName, email, avatar, status } = user;
  return (
    <div className="card-container">
      <img alt={avatar[0].name} src={avatar[0].url} />
      <h2 className="card-username">
        {firstName} {lastName}
      </h2>
      {status ? <p className="status online">Çevrimiçi</p> : <p className="status offline">Çevrimdışı</p>}
      <p>{email}</p>
    </div>
  );
};

export default Card;
