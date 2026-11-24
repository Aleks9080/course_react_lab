// 1_5_1 Extract a component
/* 
Компонент Gallery содержит очень похожую разметку для двух профилей. Извлеките из него компонент Profile, чтобы уменьшить дублирование кода. Для этого нужно будет определить props для компонента Profile.
*/

import { getImageUrl } from "./util";

function Profile({
  name,
  profession,
  awards,
  discovered,
  imageId,
}: {
  name: string;
  profession: string;
  awards: string;
  discovered: string;
  imageId: string;
}) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b> {profession}
        </li>
        <li>
          <b>Awards: </b> {awards}
        </li>
        <li>
          <b>Discovered: </b> {discovered}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        imageId="Maria"
        profession="physicist and chemist"
        awards="4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
        discovered="polonium (chemical element)"
      />
      <Profile
        name="Katsuko Saruhashi"
        imageId="KatsukoSaruhashi"
        profession="geochemist"
        awards="2 (Miyake Prize for geochemistry, Tanaka Prize)"
        discovered="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}
