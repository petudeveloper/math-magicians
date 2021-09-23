import PropTypes from 'prop-types';

const CalculatorButton = ({
  label, className, index, buttonClick,
}) => (
  <button
    type="button"
    id={`${{ className }}-${{ index }}`}
    className={className}
    onClick={buttonClick}
  >
    {label}
  </button>
);

CalculatorButton.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  buttonClick: PropTypes.func.isRequired,
};

export default CalculatorButton;
