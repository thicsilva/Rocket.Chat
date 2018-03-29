import { RoomTypeConfig } from 'meteor/rocketchat:lib';

class TokenPassRoomType extends RoomTypeConfig {
	constructor() {
		super({
			identifier: 'tokenpass',
			order: 1
		});

		this.customTemplate = 'tokenChannelsList';
	}

	condition() {
		const user = RocketChat.models.Users.findOne({ _id: Meteor.userId() }, { fields: { 'services.tokenpass': 1 } });
		const hasTokenpass = !!(user && user.services && user.services.tokenpass);

		return hasTokenpass;
	}
}

RocketChat.roomTypes.add(new TokenPassRoomType());
