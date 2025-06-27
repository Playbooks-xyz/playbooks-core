import EmojiPicker, { Emoji } from 'emoji-picker-react';

const EmojiWrapper = ({ unified }) => <Emoji unified={unified} />;

const EmojiPickerWrapper = ({ open, theme, reactions = [], customEmojis = [], onClick }) => {
	return (
		<EmojiPicker
			open={open}
			theme={theme}
			// reactions={reactions}
			onReactionClick={onClick}
			customEmojis={customEmojis}
			onEmojiClick={onClick}
			skinTonesDisabled
			reactionsDefaultOpen
		/>
	);
};

export { EmojiWrapper, EmojiPickerWrapper };

// Docs
// https://www.npmjs.com/package/emoji-picker-react
