import React from "react";
import styled from "styled-components";
import { FaExternalLinkAlt } from "react-icons/fa";
import { achievements, Descriptions } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 960px) {
    width: 700px;
    font-size: 15px;
    margin: 0 auto;
  }

  @media (max-width: 640px) {
    width: 90%;
    font-size: 13px;
    margin: 0px auto;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #524a61;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 30px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 20px;
  }
  @media (max-width: 370px) {
    max-width: 90%;
    padding: 10px 15px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 30px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 25px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  position: relative;
  border: 1px solid ${({ theme }) => theme.text_primary + 30};
  border-radius: 12px;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  filter: brightness(1.1);
  // border: 1px solid ${({ theme }) => theme.primary + 90};
  border: 0.1px solid #524a61;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`;

const Image = styled.img`
  height: 40px;
  border-radius: 10px;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Role = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const SkillComponent = ({ item }) => {
  return (
    <SkillItem>
      <Image src={item.image} />
      <Body>
        <Role>{item.title}</Role>
        <Date>{item.date}</Date>
      </Body>

      {item.link && (
        <a
          style={{
            textDecoration: "none",
            position: "absolute",
            top: "2.7rem",
            right: "0.4rem",
          }}
        >
          <FaExternalLinkAlt style={{ marginLeft: "6px" }} size={16} />
        </a>
      )}
    </SkillItem>
  );
};

const Achievements = () => {
  return (
    <Container id="achievements">
      <Wrapper>
        <Title>Achievements</Title>
        <Desc>{Descriptions.achievement}</Desc>

        <SkillsContainer>
          {achievements.map((achievement, index) => (
            <Skill key={index}>
              <SkillTitle>{achievement.title}</SkillTitle>
              <SkillList>
                {achievement.badges.map((item, ind) => (
                  <>
                    {item?.link ? (
                      <a
                        style={{ textDecoration: "none" }}
                        href={item.link}
                        target="new"
                      >
                        <SkillComponent key={ind} item={item} />
                      </a>
                    ) : (
                      <SkillComponent key={ind} item={item} />
                    )}
                  </>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Achievements;
