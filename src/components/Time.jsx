import { Suspense } from "solid-js";
import { createSignal, onMount, createResource } from "solid-js";
import { isServer } from "solid-js/web";

let renderCount = 1;

async function getCurrentTime() {
  console.log("getCurrentTime call");
  // Simulating a server delay
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return new Date().toLocaleTimeString();
}

function TimeDisplay() {
  const [time] = createResource(getCurrentTime);
  return (
    <div>
      Current time is: {time()} (isServer: {isServer.toString()})
    </div>
  );
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
