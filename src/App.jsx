import { useEffect, useState } from "react";
import top100Films from "./assets/data";
import Heading from "./components/heading";
import Input from "./components/input";
import Result from "./components/result";

function App() {
  const [label, setLabel] = useState("");
  const [results, setResults] = useState([]);

  // regular search
  const searchItems = (searchTerm) => {
    if (!searchTerm) return;

    const regex = /\s+/g;

    const normalizeTerm = searchTerm.toLowerCase().replace(regex, "");

    const output = top100Films.filter((film) =>
      film.label.toLowerCase().replace(regex, "").includes(normalizeTerm)
    );

    setResults(output);
  };

  useEffect(() => {
    searchItems(label);
  }, [label]);

  return (
    <main>
      {/* form */}
      <Heading label={"Search Form"} />

      {/* input boxes */}
      <Input
        type={"text"}
        placeholder={"Enter Name"}
        name={"Name"}
        value={label}
        setter={setLabel}
      />

      {/* results */}
      <Heading label={"Search Results"} />

      <section style={{ height: 400, overflow: "scroll" }}>
        {results.map(({ label, year }) => (
          <Result name={label} year={year} key={label + year} />
        ))}
      </section>
    </main>
  );
}

export default App;
