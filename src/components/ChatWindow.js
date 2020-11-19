import React from 'react';

export default function ChatWindow(props) {
	const conversationMapped = props.conversation.map((el, i) => {
		return <h4 key={i}>{el}</h4>
	});

	return (
		<div
			id="chat-window">
			{conversationMapped}
		</div>
	);
}