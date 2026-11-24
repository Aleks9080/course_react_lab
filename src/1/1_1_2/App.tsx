// 1_1_2 Fix the return statement
/* 
  Исправьте ошибку в операторе return
*/

export default function Profile() {
  // JSX возвращаем обёрнутым в скобки; без return; компонент не отрисовывался бы
  return (
    <img src="KatsukoSaruhashi.jpg" alt="Katsuko Saruhashi" />
  );
}
