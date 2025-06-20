import { Avatar, AvatarBody, AvatarImg, AvatarText } from '@playbooks/ui/avatars';

export const StaticAvatar = ({ thumbnail, title, href }) => (
	<Avatar display='flex-start'>
		<AvatarImg size='xs' src={thumbnail} alt={`${title} photo`} />
		<AvatarBody>
			<AvatarText fontSize='text-sm' hover='group-hover:underline'>
				{title}
			</AvatarText>
		</AvatarBody>
	</Avatar>
);
