import React from 'react';

interface IMessageContext {
	message: string;
	setMessage: React.Dispatch<React.SetStateAction<string>>;
}

const MessageContext = React.createContext<IMessageContext>(
	{} as IMessageContext
);

export default MessageContext;
