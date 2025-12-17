import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("Add");
  const [results, setResults] = useState([]);

  const performAction = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      alert("Please enter valid numbers");
      return;
    }

    let result;
    switch (operation) {
      case "Add":
        result = n1 + n2;
        break;
      case "Subtract":
        result = n1 - n2;
        break;
      case "Multiply":
        result = n1 * n2;
        break;
      default:
        result = "Invalid operation";
    }

    setResults([...results, `${n1} ${operation} ${n2} = ${result}`]);
  };

  return (
    <div>
      <h2>Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="Add">Add</option>
        <option value="Subtract">Subtract</option>
        <option value="Multiply">Multiply</option>
      </select>
      <button onClick={performAction}>Perform Action</button>

      <div>
        <h3>Results:</h3>
        <ul>
          {results.map((res, index) => (
            <li key={index}>{res}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Calculator;