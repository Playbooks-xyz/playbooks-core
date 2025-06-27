import ReactEmoji from 'react-emoji-render';

const Emoji = ({ unicode, children }) => <ReactEmoji>{unicode || children}</ReactEmoji>;

export { Emoji };

// Docs
// https://www.npmjs.com/package/react-emoji-render
