import React from 'react'
import { BiAddToQueue } from 'react-icons/bi'

type PropsType = {}

export const QueueBtn = () => {
	return (
		<button className="btn queue">
			<span>Queue</span>
			<BiAddToQueue />
		</button>
	)
}
