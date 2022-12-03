import { Button } from "./component/button";
import { useRef } from "react";

function App() {
  const buttonref = useRef<HTMLButtonElement>(null);
  console.log(buttonref);
  const result = (
    <div className="flex items-center justify-center my-2">
      <Button size="xs" variant="primary" shape="none">
        primary
      </Button>
      <Button
        size="sm"
        variant="secondary"
        shape="round"
        onClick={() => {
          console.log(buttonref);
          buttonref.current?.focus();
        }}
      >
        secondary
      </Button>
      <Button size="md" variant="white" shape="circle">
        white
      </Button>
      <Button size="lg" variant="default" shape="round">
        default
      </Button>
      <Button size="xl" variant="primary" ref={buttonref}>
        button
      </Button>
    </div>
  );
  console.log(result);
  return result;
}

export default App;
