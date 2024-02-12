import "./App.css";

const tahoe_peaks = [
  { name: "Freel", elevation: 10891 },
  { name: "Monument", elevation: 10067 },
];

function List({ data, renderItem, renderEmpyt }) {
  return !data.length ? (
    renderEmpyt
  ) : (
    <ul>
      {data.map((item) => (
        <li key={item.name}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <List
      data={tahoe_peaks}
      renderEmpyt={<p>This is Empty</p>}
      renderItem={(item) => (
        <>
          {item.name} - {item.elevation}
        </>
      )}
    />
  );
}

export default App;
