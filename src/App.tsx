import { Button } from "./component/button";
import { useState } from "react";
import { Dialog } from "./component/dialog";
import { TextInput } from "./component/input";
import { TextArea } from "./component/textarea";

function App() {
  // const buttonref = useRef<HTMLButtonElement>(null);
  // console.log(buttonref);
  // const result = (
  //   <div className="flex items-center justify-center my-2">
  //     <Button size="xs" variant="primary" shape="none">
  //       primary
  //     </Button>
  //     <Button
  //       size="sm"
  //       variant="secondary"
  //       shape="round"
  //       onClick={() => {
  //         console.log(buttonref);
  //         buttonref.current?.focus();
  //       }}
  //     >
  //       secondary
  //     </Button>
  //     <Button size="md" variant="white" shape="circle">
  //       white
  //     </Button>
  //     <Button size="lg" variant="default" shape="round">
  //       default
  //     </Button>
  //     <Button size="xl" variant="primary" ref={buttonref}>
  //       button
  //     </Button>
  //   </div>
  // );
  // console.log(result);
  // return result;
  const [open, setOpen] = useState(false);
  return (
    <div className="px-14 py-12 w-full max-w-xl h-full m-auto ">
      <div className="flex items-center justify-between mb-2">
        <h1 className="mx-2">Reports</h1>
        <Button variant="primary" shape="circle" onClick={() => setOpen(true)}>
          New Report
        </Button>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <TextInput label="Date" type="date"></TextInput>
        <TextInput label="Customer Name"></TextInput>
        <TextInput label="Description of Work"></TextInput>
        <TextArea label="Actios Performed"></TextArea>
        <button onClick={() => setOpen(false)}>Close</button>
      </Dialog>
    </div>
  );
}

export default App;
