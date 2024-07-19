import { CloseRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { Fade, Modal, Paper, Popper } from "@mui/material";
import React from "react";
import styled from "styled-components";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: top;
  justify-content: center;
  overflow-y: scroll;
  transition: all 0.5s ease;
`;

const Wrapper = styled.div`
  max-width: 600px;
  width: 100%;
  border-radius: 16px;
  height: min-content;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  padding: 30px;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 20%;
  left: 0;
  @media only screen and (max-width: 600px) {
    top: 10%;
    padding: 20px;
  }
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  @media only screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  margin: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;

const Desc = styled.div`
  font-size: 15px;
  font-weight: 400;
  padding: 15px 0;

  color: ${({ theme }) => theme.text_primary};
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const Label = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    margin: 8px 6px;
  }
`;

const Tags = styled.div`
  margin-top: 5px;
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  margin: 4px;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary + 20};
  @media only screen and (max-width: 600px) {
    font-size: 11px;
  }
`;

const Members = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-wrap: wrap;
  margin: 4px 0px;
`;

const Member = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const MemberImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 4px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  @media only screen and (max-width: 600px) {
    width: 32px;
    height: 32px;
  }
`;

const MemberName = styled.div`
  font-size: 16px;
  font-weight: 500;
  width: 200px;
  color: ${({ theme }) => theme.text_primary};
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    width: 175px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 12px 0px;
  gap: 12px;
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary};
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;
  &:hover {
    background-color: ${({ theme }) => theme.primary + 99};
  }
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }

  ${({ disabled, theme }) =>
    disabled == null &&
    `
        background-color: ${theme.bgLight};
        color: ${theme.text_secondary};
        cursor: not-allowed;
        pointer-events: all !important;
    `}
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
  margin: 15px 0;
  border: 0.1px solid #524a61;
`;

const ViewWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IconContainer = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  padding: 5px 8px;
  margin-left: 10px;
  font-weight: 500;
  text-decoration: none;
  font-size: 1.4rem;
  transition: all 0.6s ease-in-out;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  @media screen and (max-width: 850px) {
    font-size: 1.2rem;
    margin-right: 40px;
  }
`;

const LinkedInIcon = styled.a`
  display: inline-block;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Index = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  const [open, setOpen] = React.useState(false);
  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <Container>
        <Wrapper>
          <HeaderWrapper>
            <TitleWrapper>
              <ViewWrapper>
                <Title>{project?.title}</Title>
                <IconContainer onClick={() => setOpen(!open)}>
                  {open ? <FaEyeSlash /> : <FaRegEye />}
                </IconContainer>
              </ViewWrapper>
              <Date>{project.date}</Date>
            </TitleWrapper>
            <CloseRounded
              style={{ cursor: "pointer" }}
              onClick={() => setOpenModal({ state: false, project: null })}
            />
          </HeaderWrapper>

          {open && <Image src={project?.image} />}

          <Tags>
            {project?.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </Tags>
          <Desc>{project?.description}</Desc>
          {project.member && (
            <>
              <Label>Members</Label>
              <Members>
                {project?.member.map((member, index) => (
                  <Member key={index}>
                    <MemberImage src={member.img} />
                    <MemberName>{member.name}</MemberName>
                    <LinkedInIcon href={member.linkedin} target="display">
                      <LinkedIn />
                    </LinkedInIcon>
                  </Member>
                ))}
              </Members>
            </>
          )}
          <ButtonGroup>
            <Button
              disabled={project?.github}
              href={project?.github}
              target="new"
            >
              View Codes
              <GitHubIcon fontSize="small" />
            </Button>
            <Button
              disabled={project?.webapp}
              href={project?.webapp}
              target="new"
            >
              View Live App
              <OpenInNewIcon fontSize="small" />
            </Button>
          </ButtonGroup>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default Index;
