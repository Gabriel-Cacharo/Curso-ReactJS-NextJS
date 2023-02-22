import P from 'prop-types';

export const Button = ({ text, onButtonClick, disabled }) => {
  return (
    <button disabled={disabled} onClick={onButtonClick} style={{ fontSize: '40px' }}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: P.string.isRequired,
  onButtonClick: P.func,
  disabled: P.bool,
};
