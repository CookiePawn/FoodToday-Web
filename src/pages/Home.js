import React from 'react';
import styled from '@emotion/styled';
import { theme, commonStyles } from '../styles/theme';

const Home = () => {
    return (
        <Container>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', marginBottom: '20px', borderRadius: '20px', overflow: 'hidden' }}>
                <img src="/images/display.png" alt="앱 소개" style={{ width: '100%', height: '500px' }} />
            </div>

            <Section>
                <SectionTitle>앱 소개</SectionTitle>
                <AppIntroGrid>
                    <AppIntroItem>
                        <PhoneFrame>
                            <StatusBar>
                            </StatusBar>
                            <AppScreenshot src="/images/load.jpg" alt="위치 권한 화면" />
                            <PhoneDynamicIsland />
                        </PhoneFrame>
                        <AppIntroContent>
                            <AppIntroTitle>위치 기반 서비스</AppIntroTitle>
                            <AppIntroDescription>
                                사용자의 현재 위치를 기반으로 주변의 맛집을 찾아드립니다
                            </AppIntroDescription>
                        </AppIntroContent>
                    </AppIntroItem>
                    <AppIntroItem>
                        <PhoneFrame>
                            <StatusBar>
                            </StatusBar>
                            <AppScreenshot src="/images/find.jpg" alt="맛집 상세 화면" />
                            <PhoneDynamicIsland />
                        </PhoneFrame>
                        <AppIntroContent>
                            <AppIntroTitle>카테고리 기반 맛집 추천</AppIntroTitle>
                            <AppIntroDescription>
                                사용자의 위치와 메뉴 카테고리를 기반으로 맛집을 추천합니다
                            </AppIntroDescription>
                        </AppIntroContent>
                    </AppIntroItem>
                    <AppIntroItem>
                        <PhoneFrame>
                            <StatusBar>
                            </StatusBar>
                            <AppScreenshot src="/images/result.jpg" alt="지도 화면" />
                            <PhoneDynamicIsland />
                        </PhoneFrame>
                        <AppIntroContent>
                            <AppIntroTitle>추천 음식점 보기</AppIntroTitle>
                            <AppIntroDescription>
                                추천 음식점의 정보와 지도보기를 통해 쉽게 찾아갈 수 있습니다
                            </AppIntroDescription>
                        </AppIntroContent>
                    </AppIntroItem>
                </AppIntroGrid>
            </Section>
        </Container>
    );
};

const Container = styled.div({
    ...commonStyles.container,
});

const Hero = styled.div({
    height: '500px',
    background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`,
    borderRadius: '20px',
    marginTop: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
});

const HeroContent = styled.div({
    padding: '20px',
});

const Title = styled.h1({
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '16px',
});

const Subtitle = styled.p({
    fontSize: '20px',
    marginBottom: '32px',
});

const SearchButton = styled.button({
    ...commonStyles.button,
    fontSize: '18px',
    padding: '16px 48px',
    backgroundColor: 'white',
    color: theme.colors.primary,
    '&:hover': {
        backgroundColor: theme.colors.lightGray,
    },
});

const Section = styled.section({
    margin: '80px 0',
});

const SectionTitle = styled.h2({
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '40px',
    color: theme.colors.text,
    textAlign: 'center',
});

const AppIntroGrid = styled.div({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '40px',
});

const AppIntroItem = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    background: 'white',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
});

const PhoneFrame = styled.div({
    position: 'relative',
    width: '280px',
    height: '580px',
    background: '#ffffff',
    borderRadius: '40px',
    border: '12px solid #1a1a1a',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    margin: '0 auto 24px',
});

const StatusBar = styled.div({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '44px',
    background: '#ffffff',
    zIndex: 2,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 16px',
});

const StatusBarTime = styled.div({
    fontSize: '14px',
    fontWeight: '600',
});

const StatusBarIcons = styled.div({
    display: 'flex',
    gap: '4px',
    fontSize: '14px',
});

const PhoneNotch = styled.div({
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '120px',
    height: '24px',
    background: '#1a1a1a',
    borderBottomLeftRadius: '16px',
    borderBottomRightRadius: '16px',
    zIndex: 3,
});

const PhoneDynamicIsland = styled.div({
    position: 'absolute',
    top: '8px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100px',
    height: '26px',
    background: '#1a1a1a',
    borderRadius: '20px',
    zIndex: 4,
});

const AppScreenshot = styled.img({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
});

const AppIntroContent = styled.div({
    maxWidth: '280px',
});

const AppIntroTitle = styled.h3({
    fontSize: '22px',
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: '12px',
});

const AppIntroDescription = styled.p({
    fontSize: '16px',
    color: theme.colors.gray,
    lineHeight: '1.6',
});

const RestaurantGrid = styled.div({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '24px',
});

const RestaurantCard = styled.div({
    background: 'white',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.2s',
    cursor: 'pointer',
    '&:hover': {
        transform: 'translateY(-4px)',
    },
});

const RestaurantImage = styled.img({
    width: '100%',
    height: '200px',
    objectFit: 'cover',
});

const RestaurantInfo = styled.div({
    padding: '20px',
});

const RestaurantName = styled.h3({
    fontSize: '20px',
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: '8px',
});

const RestaurantCategory = styled.p({
    fontSize: '14px',
    color: theme.colors.gray,
    marginBottom: '8px',
});

const RestaurantAddress = styled.p({
    fontSize: '14px',
    color: theme.colors.gray,
    lineHeight: '1.4',
});

export default Home; 