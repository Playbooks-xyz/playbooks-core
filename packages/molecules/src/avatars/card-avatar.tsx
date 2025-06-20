import { Avatar, AvatarBody, AvatarImg, AvatarText } from '@playbooks/ui/avatars';

const CardAvatar = ({ thumbnail, title, href }) => (
	<Avatar display='flex-start' width='w-auto'>
		<AvatarImg size='xs' src={thumbnail} alt={`${title} photo`} />
		<AvatarBody>
			<AvatarText hover='group-hover:underline' leading=''>
				{title}
			</AvatarText>
		</AvatarBody>
	</Avatar>
);

export { CardAvatar };
