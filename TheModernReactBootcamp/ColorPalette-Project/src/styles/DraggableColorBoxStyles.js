import chroma from 'chroma-js';
import sizes from './sizes';

const styles = {
  root: {
    height: '25%',
    width: '20%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.8px',
    '&:hover svg': {
      color: '#ddd',
      transform: 'scale(1.2)',
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: '20%',
    },
    [sizes.down('md')]: {
      width: '50%',
      height: '10%',
    },
    [sizes.down('sm')]: {
      width: '100%',
      height: '5%',
    },
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    padding: '10px',
    left: '0',
    bottom: '0',
    color: props => (chroma(props.color).luminance() <= 0.25 ? '#fff' : '#222'),
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  deleteIcon: {
    transition: 'all .3s ease-in-out',
  },
};

export default styles;
