import PropTypes from "prop-types";

const Title = ({ emoji, no, content }) => {
  return (
    <div className="flex items-end">
      <span className="text-green text-lg mr-1">{no}.</span>

      <p className="text-4xl text-white font-medium">
        {emoji} {content}
      </p>
    </div>
  );
};

Title.propTypes = {
  emoji: PropTypes.symbol,
  no: PropTypes.string,
  content: PropTypes.string,
};

export default Title;
