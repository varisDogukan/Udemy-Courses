import sizes from './sizes';

export default {
  Palette: {
    height: '100vh',
    overflow: 'hidden',
    paddingBottom: '0.8rem',
  },
  colors: {
    height: '90%',
    overflow: 'hidden',
  },
  goBack: {
    height: '50%',
    width: '20%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.8px',
    opacity: 1,
    background: '#000',
    '& a': {
      color: '#fff',
      width: '100px',
      height: '30px',
      position: 'absolute',
      display: 'inline-block',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      outline: 'none',
      textAlign: 'center',
      background: 'rgba(255, 255, 255, 0.3)',
      webkitBackdropFilter: 'blur(3px)',
      backdropFilter: 'blur(3px)',
      fontFize: '1rem',
      lineHeight: '30px',
      textTransform: 'uppercase',
      border: 'none',
      textDecoration: 'none',
    },
    [sizes.down('md')]: {
      width: '50%',
      height: '20%',
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: '10%',
    },
  },
};
