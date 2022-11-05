import sizes from './sizes';

export default {
  Navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '6vh',
    [sizes.down('xs')]: {
      fontSize: '.9rem',
    },
  },

  logo: {
    marginRight: '15px',
    padding: '0 13px',
    fontSize: '22px',
    background: '#eceff1',
    fontFamily: 'Roboto',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '& a': {
      textDecoration: 'none',
      color: '#222',
    },
    [sizes.down('xs')]: {
      display: 'none',
    },
  },

  slider: {
    width: '340px',
    margin: '0 10px',
    display: 'inline-block',

    '& .rc-slider-track': {
      backgroundColor: 'transparent',
    },

    '& .rc-slider-rail': {
      height: '8px',
    },

    '& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:hover, .rc-slider-handle:focus':
      {
        background: 'green',
        outline: 'none',
        border: '2px solid green',
        boxShadow: 'none',
        width: '13px',
        height: '13px',
        marginTop: '-3px',
      },
    [sizes.down('sm')]: {
      width: '150px',
    },
  },

  selectContainer: {
    marginLeft: 'auto',
    marginRight: '1rem',
  },
  selectText: {
    [sizes.down('xs')]: {
      fontSize: '.9rem',
    },
  },
};