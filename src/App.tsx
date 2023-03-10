import { Strapion } from "@strapion/core";
import contentManagerPlugin from "@strapion/content-manager";

function App() {
  return (
    <Strapion
      strapiUrl="http://localhost:1337"
      plugins={[contentManagerPlugin({ groups: [] })]}
    />
  );
}

export default App;
