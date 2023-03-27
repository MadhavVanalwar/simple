import { useState } from "react";
import { Container, Row } from "reactstrap";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import SeatBooking from "./pages/SeatBooking";
import SelectSeatType from "./pages/SelectSeatType";
import Confirmation from "./pages/Confirmation";
import TAB_OPTIONS from "./constants/TabOptions";
export default function App() {
  const [tab, setTab] = useState(TAB_OPTIONS.SEAT_TYPE);
  const [seatSelection, setSeatSelection] = useState({});
  function handleTabChange(tab, seatSelection) {
    setTab(tab);
    setSeatSelection(seatSelection);
  }
  const date = new Date().getDate()
  const date1 = new Date().getMonth()
  const date2 = new Date().getFullYear()
  return (
    <>
      <select className="theater">
        <option>Select Theater</option>
        <option>Abhiruchi City Pride</option>
        <option>Fun Time Multiplex</option>
        <option>City Pride - Kothrud</option>
        <option>Laxminarayan Theater</option>
        <option>Alka Talkies</option>
        <option>Neelayam Theater</option>
      </select>
      <p className="date">{date}/{date1+1}/{date2}</p>
      {/* <input className="date" type="date" /> */}
      <select className="time">
        <option>Select Time</option>
        <option>9:30PM - 12AM</option>
        <option>12:30AM - 3AM</option>
        <option>3:30AM - 6AM</option>
        <option>6:30AM - 9AM</option>
        <option>9:30AM - 12PM</option>
      </select>

    <Container className="tic" >
      <Row>
        <h1>Welcome to My Cenema ticket booking system</h1>
      </Row>
      {tab === TAB_OPTIONS.SEAT_TYPE ? (
        <SelectSeatType  className='set' onNext={handleTabChange} />
      ) : null}
      {tab === TAB_OPTIONS.SEAT_SELECTION ? (
        <SeatBooking onNext={handleTabChange} seatSelection={seatSelection} />
      ) : null}
      {tab === TAB_OPTIONS.CONFIRMATION ? (
        <Confirmation setTab={setTab} seatSelection={seatSelection} />
      ) : null}
    </Container>
    </>

  );
}