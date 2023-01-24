import Card from "../Card/Card.js";

const CardList = ({ users }) => (
  <div className="card-list">
    {users.map((user) => {
      return <Card key={user.id} user={user} />;
    })}
  </div>
);

export default CardList;
