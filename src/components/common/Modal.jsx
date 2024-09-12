import styled from "styled-components";
import { Modal } from "@mui/material";
import Lottie from "react-lottie-player";
import githubJson from "../lottie/githubLottie.json";
import closeJson from "../lottie/closeLottie.json";

const HelpModal = ({ openHelp, closeHelpModal }) => {
  return (
    <Modal open={openHelp} onClose={closeHelpModal}>
      <ModalPopup>
        <CloseButton onClick={closeHelpModal}>
          <Lottie
            loop
            animationData={closeJson}
            play
            style={{ width: 40, height: 40 }}
          />
        </CloseButton>
        <ModalHeading>
          <h3>Need Help?</h3>
        </ModalHeading>
        <ModalBody>
          <div className="image">
            <img
              src="https://raw.githubusercontent.com/IBMTechXChange/ConnectX/main/assets/images/logo.png"
              alt="Organization Logo"
            />
          </div>
          <h2>Welcome to SuiteX Help</h2>
          <h4>We’re here to assist you!</h4>
          <p>If you have any questions or need support, visit our GitHub page:</p>
          <div className="links">
            <a
              href="https://github.com/IBMTechXChange"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Lottie
                loop
                animationData={githubJson}
                play
                style={{ width: 50, height: 50 }}
              />
              GitHub
            </a>
          </div>
        </ModalBody>
      </ModalPopup>
    </Modal>
  );
};

const ModalPopup = styled.div`
  top: 50%;
  background-color: #fff;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  position: relative;
  transform: translateY(-50%);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const CloseButton = styled.span`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  color: #5f6368;
`;

const ModalHeading = styled.div`
  text-align: center;
  border-bottom: 1px solid lightgray;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  h2 {
    margin-bottom: 10px;
    color: #333;
    font-size: 1.2rem;
  }

  h4 {
    margin-bottom: 15px;
    color: #666;
    font-size: 1rem;
    letter-spacing: 0.5px;
  }

  p {
    margin-bottom: 20px;
    color: #444;
    font-size: 0.9rem;
    text-align: center;
  }

  .links {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1rem;

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      color: #000;
      text-decoration: none;

      &:hover {
        color: #007bff;
      }
    }
  }
`;

export default HelpModal;