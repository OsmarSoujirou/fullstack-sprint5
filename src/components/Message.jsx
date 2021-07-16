import { useContext } from 'react';
import MessageContext from '../contexts/MessageContext';
import styled from 'styled-components';

const StyledMessage = styled.div`
  padding: 20px;
  background-color: #f44336;
  color: white;
  margin-bottom: 15px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  padding: 10px;
  position: fixed;
  right: 10px;
  top: 10px;
  z-index: 9999;
  border-radius: 2px;

  .closebtn {
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
  }

  /* When moving the mouse over the close button */

  .closebtn:hover {
    color: black;
  }
`;

function Message() {
  const { message, setMessage } = useContext(MessageContext);

  return (
    message && (
      <StyledMessage className="alert">
        <span className="closebtn" onClick={() => setMessage('')}>
          &times;
        </span>
        {message}
      </StyledMessage>
    )
  );
}

export default Message;
