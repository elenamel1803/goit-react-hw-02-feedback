import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
          {/* {option.charAt(0).toUpperCase() + option.slice(1)} */}
        </Button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
