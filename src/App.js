import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div style={{ marginLeft: "30" }}>
      <p>native date input:</p>
      <input aria-label="Date" type="date" />

      <p>react-datepicker:</p>

      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        showYearDropdown
        maxDate={new Date()}
      />
    </div>
  );
}

export default App;
