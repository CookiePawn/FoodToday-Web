export const theme = {
  colors: {
    primary: '#FF9064',
    secondary: '#FFB088',
    background: '#FFFFFF',
    text: '#333333',
    lightGray: '#F5F5F5',
    gray: '#999999',
  },
  fonts: {
    main: "'Noto Sans KR', sans-serif",
  },
  sizes: {
    maxWidth: '1200px',
  },
};

export const commonStyles = {
  container: {
    maxWidth: theme.sizes.maxWidth,
    margin: '0 auto',
    padding: '0 20px',
  },
  button: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '12px 24px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    '&:hover': {
      backgroundColor: theme.colors.secondary,
    },
  },
}; 