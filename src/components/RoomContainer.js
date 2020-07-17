import React from 'react';
import { withRoomConsumer } from '../context';
import Loading from './Loading';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';

function RoomContainer({ context }) {
	const { loading, sortedRooms, rooms } = context;
	if (loading) {
		return <Loading />;
	}
	return (
		<>
			<RoomFilter rooms={rooms} />
			<RoomList rooms={sortedRooms} />
		</>
	);
}

export default withRoomConsumer(RoomContainer);

// export default function RoomContainer() {
// 	return (
// 		<RoomConsumer>
// 			{(value) => {
// 				const { loading, sortedRooms, rooms } = value;
// 				if (loading) {
// 					return <Loading />;
// 				}
// 				return (
// 					<div>
// 						Hello from room container
// 						<RoomFilter rooms={rooms} />
// 						<RoomList rooms={sortedRooms} />
// 					</div>
// 				);
// 			}}
// 		</RoomConsumer>
// 	);
// }
