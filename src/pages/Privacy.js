import React from 'react';
import styled from '@emotion/styled';
import { theme, commonStyles } from '../styles/theme';

const Privacy = () => {
  return (
    <Container>
      <Header>
        <Title>개인정보처리방침</Title>
        <Subtitle>오늘의 한끼 개인정보처리방침</Subtitle>
      </Header>

      <Section>
        <SectionTitle>1. 수집하는 개인정보 항목</SectionTitle>
        <Content>
          <List>
            <ListItem>
              가. 위치정보
              <SubList>
                - 앱 사용 시 사용자의 현재 위치 정보
                - 위치 정보는 일시적으로만 사용되며 저장되지 않습니다
              </SubList>
            </ListItem>
            <ListItem>
              나. 광고 관련 정보
              <SubList>
                - Google AdMob을 통해 수집되는 광고 식별자 및 관련 정보
                - 자세한 내용은 Google AdMob의 개인정보처리방침을 참고해 주세요
              </SubList>
            </ListItem>
          </List>
        </Content>
      </Section>

      <Section>
        <SectionTitle>2. 개인정보의 수집 및 이용목적</SectionTitle>
        <Content>
          <List>
            <ListItem>
              가. 위치정보
              <SubList>
                - 사용자 주변의 맛집 정보 제공
              </SubList>
            </ListItem>
            <ListItem>
              나. 광고 관련 정보
              <SubList>
                - 맞춤형 광고 제공
                - 광고 성과 측정
              </SubList>
            </ListItem>
          </List>
        </Content>
      </Section>

      <Section>
        <SectionTitle>3. 개인정보의 보유 및 이용기간</SectionTitle>
        <Content>
          <List>
            <ListItem>
              가. 위치정보: 앱 사용 중에만 일시적으로 이용되며, 별도로 저장하지 않습니다.
            </ListItem>
            <ListItem>
              나. 광고 관련 정보: Google AdMob의 정책에 따라 처리됩니다.
            </ListItem>
          </List>
        </Content>
      </Section>

      <Section>
        <SectionTitle>4. 이용자의 권리</SectionTitle>
        <Content>
          <List>
            <ListItem>
              가. 위치정보 수집 거부
              <SubList>
                - 기기의 설정에서 위치 정보 제공을 거부할 수 있습니다
                - 위치 정보 제공을 거부할 경우 일부 서비스 이용이 제한될 수 있습니다
              </SubList>
            </ListItem>
            <ListItem>
              나. 광고 개인화 거부
              <SubList>
                - 기기의 설정에서 광고 개인화를 거부할 수 있습니다
                - 이 경우 맞춤형 광고가 제공되지 않을 수 있습니다
              </SubList>
            </ListItem>
          </List>
        </Content>
      </Section>

      <Section>
        <SectionTitle>5. 개인정보보호 책임자</SectionTitle>
        <Content>
          <ContactInfo>
            이름: 안준철<br />
            이메일: jcahn@foodtoday.com
          </ContactInfo>
        </Content>
      </Section>
    </Container>
  );
};

const Container = styled.div({
  ...commonStyles.container,
  padding: '40px 20px',
});

const Header = styled.header({
  textAlign: 'center',
  marginBottom: '60px',
});

const Title = styled.h1({
  fontSize: '36px',
  fontWeight: 'bold',
  color: theme.colors.text,
  marginBottom: '16px',
});

const Subtitle = styled.p({
  fontSize: '18px',
  color: theme.colors.gray,
});

const Section = styled.section({
  marginBottom: '40px',
  background: 'white',
  borderRadius: '12px',
  padding: '32px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
});

const SectionTitle = styled.h2({
  fontSize: '24px',
  fontWeight: '600',
  color: theme.colors.text,
  marginBottom: '20px',
});

const Content = styled.div({
  fontSize: '16px',
  lineHeight: '1.6',
  color: theme.colors.text,
});

const List = styled.ul({
  listStyle: 'none',
  padding: 0,
});

const ListItem = styled.li({
  marginBottom: '20px',
  '&:last-child': {
    marginBottom: 0,
  },
});

const SubList = styled.div({
  marginTop: '8px',
  paddingLeft: '20px',
  color: theme.colors.gray,
  '& > *': {
    marginBottom: '4px',
  },
});

const ContactInfo = styled.div({
  padding: '16px',
  background: theme.colors.lightGray,
  borderRadius: '8px',
  lineHeight: '1.8',
});

export default Privacy; 