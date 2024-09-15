import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: none;
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.text_black};
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.8s ease-in-out;
`;
const Card = styled.div`
  width: 350px;
  height: 450px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  border: 0.1px solid #524a61;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.04);
    filter: brightness(1.2);
  }
  &:hover ${Button} {
    display: block;
  }

  @media only screen and (max-width: 400px) {
    width: 90%;
    height: auto;
    margin: 0px auto;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 160px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 5px;
  border: 0.1px solid #524a61;
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 2px 8px;
  border-radius: 10px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  margin-top: 8px;
  font-size: 15px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const Wrapper = styled.div`
  padding: 5px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Avatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.card};
`;

const ProjectCards = ({ project, setOpenModal }) => {
  return (
    <Card onClick={() => setOpenModal({ state: true, project: project })}>
      <Image src={project.image} />
      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Wrapper>
          <TitleWrapper>
            <Title>{project.title}</Title>
            <Date>{project.date}</Date>
          </TitleWrapper>
          <Members>
            {project.member?.map((member, index) => (
              <Avatar key={index} src={member.img} />
            ))}
          </Members>
        </Wrapper>
        <Description>{project.description}</Description>
      </Details>
    </Card>
  );
};

export default ProjectCards;
