import React, { useState } from "react";
import { BpkCode } from "@skyscanner/backpack-web/bpk-component-code";
import BpkButton from "@skyscanner/backpack-web/bpk-component-button";
import BpkText from "@skyscanner/backpack-web/bpk-component-text";
import BpkCalendar from "@skyscanner/backpack-web/bpk-component-calendar";
import format from "date-fns/format";

import { cssModules } from "@skyscanner/backpack-web/bpk-react-utils";

import STYLES from "./App.scss";

const getClassName = cssModules(STYLES);
const formatDateFull = (date) => format(date, "EEEE, do MMMM yyyy");
const formatMonth = (date) => format(date, "MMMM yyyy");
const daysOfWeek = [
  {
    name: "Sunday",
    nameAbbr: "Sun",
    index: 0,
    isWeekend: true,
  },
  {
    name: 'Monday',
    nameAbbr: 'Mon',
    index: 1,
    isWeekend: false,
  },
  {
    name: 'Tuesday',
    nameAbbr: 'Tues',
    index: 2,
    isWeekend: false,
  },
  {
    name: 'Wednesday',
    nameAbbr: 'Wed',
    index: 3,
    isWeekend: false,
  },
  {
    name: 'Thursday',
    nameAbbr: 'Thur',
    index: 4,
    isWeekend: false,
  },
  {
    name: 'Friday',
    nameAbbr: 'Fri',
    index: 5,
    isWeekend: false,
  },
  {
    name: 'Saturday',
    nameAbbr: 'Sat',
    index: 6,
    isWeekend: true,
  },
];



const App = () => {
  const [selectionConfiguration, setSelectionConfiguration] = useState({
    type: CALENDAR_SELECTION_TYPE.single,
    date: null,
  });

  const handleDateSelect = (date) => {
    setSelectionConfiguration({
      ...selectionConfiguration,
      date: date,
    });
  };

  return (
    <div className={getClassName("App")}>
      <header className={getClassName("App__header")}>
        <div className={getClassName("App__header-inner")}>
          <BpkText
            tagName="h1"
            textStyle="xxl"
            className={getClassName("App__heading")}>
            Flight Schedule
          </BpkText>
        </div>
      </header>

      <main className={getClassName("App__main")}>
        <BpkCalendar
          daysOfWeek={daysOfWeek}
          formatDateFull={formatDateFull}
          formatMonth={formatMonth}
          {...selectionConfiguration}
          onDateSelect={handleDateSelect}
        />

        <BpkButton onClick={() => alert("It works!")}>Click me</BpkButton>
      </main>
    </div>
  );
};

export default App;
