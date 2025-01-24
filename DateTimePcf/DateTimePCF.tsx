import * as React from "react";
import { Label } from "@fluentui/react";
import { Button, Input, InputProps } from "@fluentui/react-components";
import "./DateTimePCF.css";

export type DateValueProps = {
  initialDate: Date;
  onDateTimeChange: (newDateTime: string) => void;
};

export const DateTimePCF: React.FC<DateValueProps> = ({ initialDate, onDateTimeChange }) => {
  const [yearsValue, setYValue] = React.useState(initialDate.getFullYear().toString());
  const [monthsValue, setMValue] = React.useState((initialDate.getMonth() + 1).toString().padStart(2, "0"));
  const [daysValue, setDValue] = React.useState(initialDate.getDate().toString().padStart(2, "0"));
  const [hoursValue, setHValue] = React.useState(initialDate.getHours().toString().padStart(2, "0"));
  const [minutesValue, setMiValue] = React.useState(initialDate.getMinutes().toString().padStart(2, "0"));
  const [secondsValue, setSValue] = React.useState(initialDate.getSeconds().toString().padStart(2, "0"));


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

  // const insertButtonClick = () => {
  //   const date = `${daysValue}/${monthsValue}/${yearsValue} ${hoursValue}:${minutesValue}:${secondsValue}`;
  //   // setFormattedDate(date);
  // };

  const nowButtonClick = () => {
    const now = new Date();
    setYValue(now.getFullYear().toString());
    setMValue((now.getMonth() + 1).toString().padStart(2, "0"));
    setDValue(now.getDate().toString().padStart(2, "0"));
    setHValue(now.getHours().toString().padStart(2, "0"));
    setMiValue(now.getMinutes().toString().padStart(2, "0"));
    setSValue(now.getSeconds().toString().padStart(2, "0"));
    updateDateTime();
  };

  const updateDateTime = () => {
    const dateTime = `${yearsValue}-${monthsValue}-${daysValue}T${hoursValue}:${minutesValue}:${secondsValue}`;
    onDateTimeChange(dateTime);
  };

  React.useEffect(() => {
    updateDateTime();
  }, [yearsValue, monthsValue, daysValue, hoursValue, minutesValue, secondsValue]);

  return (
    <div className="container noSpinner">
      <div className="root">
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
          {/*<Button onClick={insertButtonClick}>
            Insert
          </Button>*/}
          <Button onClick={nowButtonClick}>
            Now
          </Button>
        </div>
      {/*  {formattedDate && (
          <div>
            <p>{formattedDate}</p>
          </div>
        )}*/}
      </div>
    </div>
  );
};
