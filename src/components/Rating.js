import { useState } from "react";

export function Rating() {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>Please rate the article</h3>
      <p>Rating: {count} </p>
      <button onClick={plus}> +1👍</button>
      <button onClick={minus}>-1👎</button>
    </>
  );
}
