import {Button, Title} from '../components';
import {Paragraph} from '../components';
import {Tag} from '../components';


export default function Home(): JSX.Element {
	return (
		<div>
			<Title tag='h1'>Lox</Title>
			<Button appearance='primary' arrow='down'>Кнопка</Button>
			<Button appearance='ghost' arrow='right'>Кнопка</Button>
			<Paragraph textSize='large'>
				Lorem ipsum ip lorem ipsum
			</Paragraph>
			<Paragraph>
				Lorem ipsum ip lorem ipsum
			</Paragraph>
			<Paragraph textSize='small'>
				Lorem ipsum ip lorem ipsum
			</Paragraph>

			<Tag color={'ghost'}>Ghost</Tag>
			<Tag color={'green'}>Ghost</Tag>
			<Tag color={'red'}>Ghost</Tag>
		</div>
	);
}
