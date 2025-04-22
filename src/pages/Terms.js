import React from 'react';
import styled from '@emotion/styled';
import { theme, commonStyles } from '../styles/theme';

const Terms = () => {
  return (
    <Container>
      <Header>
        <Title>이용약관</Title>
        <Subtitle>오늘의 한끼 서비스 이용약관</Subtitle>
      </Header>

      <Section>
        <SectionTitle>제 1 조 (목적)</SectionTitle>
        <Content>
          이 약관은 오늘의 한끼 앱(이하 "앱")의 이용과 관련하여 필요한 사항을 규정함을 목적으로 합니다.
        </Content>
      </Section>

      <Section>
        <SectionTitle>제 2 조 (위치정보의 수집 및 이용)</SectionTitle>
        <Content>
          <List>
            <ListItem>
              1. 앱은 사용자의 위치 정보를 수집하여 주변 맛집 검색 서비스를 제공합니다.
            </ListItem>
            <ListItem>
              2. 위치 정보는 앱 사용 시에만 일시적으로 활용되며, 별도로 저장되거나 서버에 전송되지 않습니다.
            </ListItem>
            <ListItem>
              3. 사용자는 기기의 설정에서 언제든지 위치 정보 제공을 거부할 수 있으며, 이 경우 위치 기반 서비스는 이용할 수 없습니다.
            </ListItem>
          </List>
        </Content>
      </Section>

      <Section>
        <SectionTitle>제 3 조 (광고)</SectionTitle>
        <Content>
          <List>
            <ListItem>
              1. 앱은 무료로 제공되며, 서비스 유지를 위해 광고가 포함될 수 있습니다.
            </ListItem>
            <ListItem>
              2. 광고는 제3자(Google AdMob 등)에 의해 제공될 수 있으며, 해당 광고 제공자의 개인정보 처리방침이 적용될 수 있습니다.
            </ListItem>
          </List>
        </Content>
      </Section>

      <Section>
        <SectionTitle>제 4 조 (면책사항)</SectionTitle>
        <Content>
          <List>
            <ListItem>
              1. 앱에서 제공하는 정보는 참고 사항이며, 실제 매장 정보와 차이가 있을 수 있습니다.
            </ListItem>
            <ListItem>
              2. 개인 개발 프로젝트로 운영되는 본 앱의 특성상, 서비스는 예고 없이 변경되거나 중단될 수 있습니다.
            </ListItem>
          </List>
        </Content>
      </Section>

      <Section>
        <SectionTitle>제 5 조 (문의사항)</SectionTitle>
        <Content>
          서비스 이용 중 문의사항이 있으시면 앱 내 제공된 이메일 주소로 연락해 주시기 바랍니다.
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
  marginBottom: '12px',
  '&:last-child': {
    marginBottom: 0,
  },
});

export default Terms; 