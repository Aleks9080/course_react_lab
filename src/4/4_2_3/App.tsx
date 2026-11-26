// 4_2_3 Scrolling an image carouse
/*
Эта карусель изображений имеет кнопку "Next", которая переключает активное изображение. Заставьте галерею прокручиваться горизонтально до активного изображения по щелчку. Для этого нужно вызвать scrollIntoView() на DOM-узле активного изображения:
  
  node.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'center',
  });
*/
import { useState, useRef, useEffect } from 'react';

export default function CatFriends() {
  const [index, setIndex] = useState(0);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const isInitial = useRef(true);

  useEffect(() => {
    while (imageRefs.current.length < catList.length) {
      imageRefs.current.push(null);
    }
  }, []);

  function handleNext() {
    if (index < catList.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  // Прокрутить только что ставшее активным изображение в центр области просмотра
  useEffect(() => {
    if (isInitial.current) {
      isInitial.current = false;
      return;
    }
    const node = imageRefs.current[index];
    if (node) {
      node.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [index]);

  return (
    <>
      <nav>
        <button onClick={handleNext}>
          Next
        </button>
      </nav>
      <div>
        <ul>
          {catList.map((cat, i) => (
            <li key={cat.id}>
              <img
                ref={el => {
                  imageRefs.current[i] = el;
                }}
                className={
                  index === i ?
                    'active' :
                    ''
                }
                src={cat.imageUrl}
                alt={'Cat #' + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

type PlaceType = {
  id: number;
  imageUrl: string;
}

const catList: PlaceType[] = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: `cat${i}.jpg`
  });
}
