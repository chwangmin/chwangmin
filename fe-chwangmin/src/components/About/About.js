import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/chwangmin.png"
            alt="chwangmin"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            안녕하세요! 제 이름은 <strong>최광민</strong>입니다. 충북대학교를 졸업하고, 부트캠프와 스터디를 통해 운영체제, 알고리즘, 개발에 대한 깊은 학습을 진행하고 있습니다.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            Spring boot로 다양한 프로젝트를 진행한 경험이 있습니다. 성능을 개선하는 것을 좋아합니다. Redis를 활용하여 캐싱하여 성능을 개선하고 모니터링하여 성능을 측정합니다. 트랜잭션에서 레이싱 컨디션의 동시성문제를 분산락을 통해 해결할 수 있습니다. Spring security를 활용하여 filter에서 인증, 인가처리를 진행합니다.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              인프라에도 자신있습니다. AWS, Oracle server를 활용하여 VPC, ELB, EC2, RDS, S3를 활용하여 서버를 구축할 수 있습니다. 최근에는 서버 유지비용을 줄이기 위해 sff, miniPC를 직접 구입하여 공유기를 통해 NAT 네트워크 망을 구축하여 서버를 구동하고 있습니다.
              <div className="tagline2">
                저의 기술 스택은 다음과 같습니다:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
