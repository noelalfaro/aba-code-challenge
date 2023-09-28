import React, { useState, useEffect } from "react";

const ReservationForm = () => {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("10:00");
  const [people, setPeople] = useState("2"); // Default to 2 people
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Set the default values for placeholders
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setDate(formattedDate);
  }, []);

  const handleStepChange = () => {
    if (step === 1 && date && time && people) {
      setStep(2);
    } else if (step === 2 && name && phone && email) {
      setStep(3);
    }
  };

  // Generate an array of the next 14 days for date options
  const getNext14Days = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      dates.push({ value: formattedDate, label: formattedDate });
    }
    return dates;
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted :");
  };

  return (
    <>
      <div className="reservation-container">
        <h2 style={{ margin: "0" }}>Make a reservation</h2>
        {step === 1 && (
          <div className="reservation-form">
            <form onSubmit={handleSubmit}>
              <select
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              >
                {getNext14Days().map((dateOption) => (
                  <option key={dateOption.value} value={dateOption.value}>
                    {dateOption.label}
                  </option>
                ))}
              </select>

              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              >
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="13:00">01:00 PM</option>
                <option value="14:00">02:00 PM</option>
                <option value="15:00">03:00 PM</option>
                <option value="16:00">04:00 PM</option>
                <option value="17:00">05:00 PM</option>
                <option value="18:00">06:00 PM</option>
                <option value="19:00">07:00 PM</option>
                <option value="20:00">08:00 PM</option>
                <option value="21:00">09:00 PM</option>
                <option value="22:00">10:00 PM</option>
                <option value="23:00">11:00 PM</option>
                <option value="00:00">12:00 AM</option>
              </select>

              <select
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                required
              >
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4-6">4-6 People</option>
                <option value="6-8">6-8 People</option>
                <option value="8+">8+ People</option>
              </select>
              <button type="button" onClick={handleStepChange}>
                Find a table
              </button>
            </form>
          </div>
        )}
        {step === 2 && (
          <div className="reservation-form">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="tel"
                value={phone}
                placeholder="Phone Number"
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <input
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="button" onClick={handleStepChange}>
                Submit Reservation
              </button>
            </form>
          </div>
        )}
        {step === 3 && (
          <div className="reservation-container">
            <h2>Reservation Successful</h2>
            <p>Thank you for making a reservation with us!</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ReservationForm;
