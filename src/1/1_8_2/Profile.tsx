import Panel from './Panel.js';
import { getImageUrl } from './utils.js';

export default function Profile({ person }: { person: { imageId: string; name: string } }) {
  return (
    <Panel>
      <Header person={person} />
      <Avatar person={person} />
    </Panel>
  );
}

function Header({ person }: { person: { name: string } }) {
  return <h1>{person.name}</h1>;
}

function Avatar({ person }: { person: { imageId: string; name: string } }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={50}
      height={50}
    />
  );
}
