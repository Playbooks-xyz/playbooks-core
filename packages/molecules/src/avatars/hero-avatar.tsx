import { Avatar, AvatarBody, AvatarImg, AvatarText } from '@playbooks/ui/avatars';
import { LinkWrapper } from '@playbooks/ui/links';

export const HeroAvatar = ({ thumbnail, title, subtitle, href }) => (
	<LinkWrapper group='group' href={href} display='inline-block'>
		<Avatar display='flex-start'>
			<AvatarImg size='xs' src={thumbnail} alt={`${title} photo`} />
			<AvatarBody>
				<AvatarText
					fontFamily='font-accent'
					hover='group-hover:underline'
					textDecoration='uppercase'
					tracking='tracking-widest'>
					{title}
				</AvatarText>
			</AvatarBody>
		</Avatar>
	</LinkWrapper>
);
