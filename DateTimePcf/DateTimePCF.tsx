import * as React from "react";
import { Label } from "@fluentui/react";
import { Button, Input, InputProps } from "@fluentui/react-components";
import "./DateTimePCF.css";

export type DateValueProps = {
  yearsValue: number;
  monthsValue: number;
  daysValue: number;
  hoursValue: number;
  minutesValue: number;
  secondsValue: number;
};

export const DateTimePCF = () => {
  const now = new Date();
  const [yearsValue, setYValue] = React.useState(now.getFullYear().toString());
  const [monthsValue, setMValue] = React.useState(
    (now.getMonth() + 1).toString().padStart(2, "0")
  );
  const [daysValue, setDValue] = React.useState(
    now.getDate().toString().padStart(2, "0")
  );
  const [hoursValue, setHValue] = React.useState(
    now.getHours().toString().padStart(2, "0")
  );
  const [minutesValue, setMiValue] = React.useState(
    now.getMinutes().toString().padStart(2, "0")
  );
  const [secondsValue, setSValue] = React.useState(
    now.getSeconds().toString().padStart(2, "0")
  );
  const [formattedDate, setFormattedDate] = React.useState("");

  const onYearChange: InputProps["onChange"] = (ev, data) => {
    if (data.value.length <= 4) {
      setYValue(data.value);
    }
  };

  const onMonthChange: InputProps["onChange"] = (ev, data) => {
    if (data.value.length <= 2) {
      setMValue(data.value);
    }
  };

  const onDayChange: InputProps["onChange"] = (ev, data) => {
    if (data.value.length <= 2) {
      setDValue(data.value);
    }
  };

  const onHourChange: InputProps["onChange"] = (ev, data) => {
    if (data.value.length <= 2) {
      setHValue(data.value);
    }
  };

  const onMinuteChange: InputProps["onChange"] = (ev, data) => {
    if (data.value.length <= 2) {
      setMiValue(data.value);
    }
  };

  const onSecondChange: InputProps["onChange"] = (ev, data) => {
    if (data.value.length <= 2) {
      setSValue(data.value);
    }
  };

  const insertButtonClick = () => {
    const date = `${daysValue}/${monthsValue}/${yearsValue} ${hoursValue}:${minutesValue}:${secondsValue}`;
    setFormattedDate(date);
  };

  const nowButtonClick = () => {
    const now = new Date();
    setYValue(now.getFullYear().toString());
    setMValue((now.getMonth() + 1).toString().padStart(2, "0"));
    setDValue(now.getDate().toString().padStart(2, "0"));
    setHValue(now.getHours().toString().padStart(2, "0"));
    setMiValue(now.getMinutes().toString().padStart(2, "0"));
    setSValue(now.getSeconds().toString().padStart(2, "0"));
  };

  return (
    <div className="container noSpinner full-width">
      <div className="root">
        <Label>Data caricamento:</Label>
        <div>
          <Input
            value={daysValue}
            onChange={onDayChange}
            type="number"
            className="input"
          />
          /
          <Input
            value={monthsValue}
            onChange={onMonthChange}
            type="number"
            className="input"
          />
          /
          <Input
            value={yearsValue}
            onChange={onYearChange}
            type="number"
            className="input"
          />
          <br></br>
          <Input
            value={hoursValue}
            onChange={onHourChange}
            type="number"
            className="input"
          />
          :
          <Input
            value={minutesValue}
            onChange={onMinuteChange}
            type="number"
            className="input"
          />
          :
          <Input
            value={secondsValue}
            onChange={onSecondChange}
            type="number"
            className="input"
          />
        </div>
        <div className="wrapper">
          <Button onClick={insertButtonClick}>
            Inserisci
          </Button>
          <Button onClick={nowButtonClick}>
            Ora
          </Button>
        </div>
        {formattedDate && (
          <div>
            <p>{formattedDate}</p>
          </div>
        )}
      </div>
    </div>
  );
};
