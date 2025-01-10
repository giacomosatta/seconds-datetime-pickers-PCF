import * as React from 'react';
import { Label, DatePicker, DayOfWeek, makeStyles } from '@fluentui/react';
import { Input, InputProps, useId } from '@fluentui/react-components';

export type DateValueProps=
{
  yearsValue: number;
  monthsValue: number;
  daysValue: number;
  hoursValue: number;
  minutesValue: number;
  secondsValue: number;

}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    // Use 2px gap below the label (per the design system)
    gap: "2px",
    // Prevent the example from taking the full width of the page (optional)
    maxWidth: "400px",
  },
});

export const DateTimePCF = (props: any) => {
  const inputId = useId("input");

  const [yearsValue, setYValue] = React.useState("initial value");
  const [monthsValue, setMValue] = React.useState("initial value");
  const [daysValue, setDValue] = React.useState("initial value");
  const [hoursValue, setHValue] = React.useState("initial value");
  const [minutesValue, setMiValue] = React.useState("initial value");
  const [secondsValue, setSValue] = React.useState("initial value");


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

  return (
    <div>
      <Label htmlFor={inputId}>
        inserisci la data
      </Label>
      <div>
        <Input value={yearsValue} onChange={onYearChange} id={inputId} type='number' />
        <Input value={monthsValue} onChange={onMonthChange} id={inputId} type='number' />
        <Input value={daysValue} onChange={onDayChange} id={inputId} type='number' />
        <Input value={hoursValue} onChange={onHourChange} id={inputId} type='number' />
        <Input value={minutesValue} onChange={onMinuteChange} id={inputId} type='number' />
        <Input value={secondsValue} onChange={onSecondChange} id={inputId} type='number' />
      </div>
      {/* Inserire pulsante che calcola l'ora e la mostra a schermo */}
    </div>
  );
};