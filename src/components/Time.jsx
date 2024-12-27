import { createAsync } from "@solidjs/router";
import { Suspense } from "solid-js";
import { createSignal, onMount } from "solid-js";

let renderCount = 1;

async function getCurrentTime() {
  // Simulating a server delay
  console.log("getCurrentTime call");
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return `${new Date().toLocaleTimeString()}`;
}

function TimeDisplay() {
  const time = createAsync(
    () => {
      return getCurrentTime();
    },
    { deferStream: true }
  );
  return <div>{time()}</div>;
}

export default function Time() {
  console.log("Time component call");
  const [count, setCount] = createSignal(0);

  onMount(() => {
    console.log("Time mounted");
  });

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <TimeDisplay />
      </Suspense>
      <button onClick={() => setCount(count() + 1)}>
        SolidJS counter: {count()} (render: {renderCount++})
      </button>
    </div>
  );
}
