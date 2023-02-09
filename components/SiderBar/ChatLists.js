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
    }
  ];

  return (mychats.length && mychats.map((chat) =>  <SingeChart key={chat.id} chat={chat} /> ))
}

export default ChatLists
