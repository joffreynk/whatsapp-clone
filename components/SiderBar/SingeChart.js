import { AccountCircle } from "@mui/icons-material";
import styled from "styled-components";
import Image from "next/image";


const SingeChart = (user) => {
  return (
    <Chat >
        <Profile>
        {user.profilePicture? <ProfImage src={user.profilePicture} alt='problem with pic' height={50} width={50} /> : AccountCircle}
        </Profile>
        <ChatInfo>

        </ChatInfo>
    </Chat>
  )
}

export default SingeChart

const ProfImage = styled(Image)`
`;


const Profile = styled.div`

`;

const Chat = styled.div`

`;

const ChatInfo = styled.div`

`;