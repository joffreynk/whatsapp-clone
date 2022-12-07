import SingeChart from "./SingeChart"

const ChatLists = () => {
  let mychats = [
    {
      id: 1,
      name: 'John',
      lastMessage: 'Hey There, How are you?',
      profilepicture: '',
      lastSeen: '',
    },
    {
      id: 2,
      name: 'Gloria',
      lastMessage: 'Hey There, How are you?',
      profilepicture: '',
      lastSeen: '',
    },
    {
      id: 3,
      name: 'Joffrey',
      lastMessage: 'Hey There, How are you?',
      profilepicture: '',
      lastSeen: '',
    },
    {
      id: 4,
      name: 'Jess',
      lastMessage: 'Hey Thhere, How are you?',
      profilepicture: '',
      lastSeen: '',
    },
    {
      id: 5,
      name: 'Danica',
      lastMessage: 'Hey Thhere, How are you?',
      profilepicture: '',
      lastSeen: '',
    },
  ];


  return (
    <div>
      {console.log(mychats.id)}
      {mychats.map((chat) => <SingeChart key={chat.id} user={mychats} /> )}
      <p>Hello</p>
    </div>
  )
}

export default ChatLists
