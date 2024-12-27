import { createSignal, onMount } from "solid-js";

let renderCount = 1;

export default function Counter() {
  console.log("Counter component call");
  const [count, setCount] = createSignal(0);

  onMount(() => {
    console.log("Counter mounted");
  });

  return (
    <div>
      <button onClick={() => setCount(count() + 1)}>
        SolidJS counter: {count()} (render: {renderCount++})
      </button>
    </div>
  );
}
