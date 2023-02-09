import { AccountCircle } from "@mui/icons-material";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import Image from "next/image";


const SingeChart = ({chat}) => {
  const {id, name, lastMessage, profilepicture, lastSeen} = chat
  return (
    <div>
        <Profile>
        {profilepicture? <ProfImage src={profilepicture} alt='problem with pic' height={50} width={50} /> : <AccountCircle />}

        <Chat>
          <h5>{name}</h5>
        </Chat>

        </Profile>
    </div>
  )
}

SingeChart.propTypes = {
  chat: PropTypes.object.isRequired,
    
  }

export default SingeChart

const ProfImage = styled(Image)``;


const Profile = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
`;

const Chat = styled.div``;

const ChatInfo = styled.div``;