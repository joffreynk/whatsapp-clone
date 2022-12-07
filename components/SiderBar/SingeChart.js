import { AccountCircle } from "@mui/icons-material";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import Image from "next/image";


const SingeChart = ({id, name, lastMessage, profilepicture, lastSeen}) => {
  return (
    <Chat >
        <Profile>
        {profilepicture? <ProfImage src={profilepicture} alt='problem with pic' height={50} width={50} /> : AccountCircle}
        </Profile>
        <ChatInfo>

        </ChatInfo>
    </Chat>
  )
}

SingeChart.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    lastMessage: PropTypes.string,
    profilepicture: PropTypes.string,
    lastSeen: PropTypes.string,
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