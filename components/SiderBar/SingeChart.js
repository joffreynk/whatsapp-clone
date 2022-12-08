import { AccountCircle } from "@mui/icons-material";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import Image from "next/image";


const SingeChart = ({id, name, lastMessage, profilepicture, lastSeen}) => {
  // const {id, name, lastMessage, profilepicture, lastSeen} = chat
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
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    lastMessage: PropTypes.string.isRequired,
    profilepicture: PropTypes.string.isRequired,
    lastSeen: PropTypes.string.isRequired,
  }

export default SingeChart

const ProfImage = styled(Image)``;


const Profile = styled.div``;

const Chat = styled.div``;

const ChatInfo = styled.div``;