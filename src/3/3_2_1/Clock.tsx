import { useState } from 'react';

export default function Clock(props: { time: string, color: string }) {
  // Используем props.color напрямую, а не инициализируем состояние один раз,
  // иначе при смене пропса цвет не обновится
  return (
    <h1 style={{ color: props.color }}>
      {props.time}
    </h1>
  );
}
