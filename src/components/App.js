import Card from "./Card";
import contacts from '../contact';
import Avatar from "./Avatar";

function App() {
  return ( 
      <div>
        <h1 className="heading">My Contacts</h1>
        <Avatar img='https://media.licdn.com/dms/image/D4D03AQEbogRbTpPBpg/profile-displayphoto-shrink_200_200/0/1694187086111?e=2147483647&v=beta&t=WBIzvYD2PESBTLSywJjjMv29eBL_MNUNrtdJYTyOVzM' />
        <Card
          name={contacts[0].name}
          img= {contacts[0].imgURL}
          tel={contacts[0].phone}
          email={contacts[0].email} />
        <Card
           name={contacts[1].name}
          img= {contacts[1].imgURL}
          tel={contacts[1].phone}
          email={contacts[1].email} />
        <Card
          name={contacts[2].name}
          img= {contacts[2].imgURL}
          tel={contacts[2].phone}
          email={contacts[2].email} />
      </div>
  );
}

export default App;
