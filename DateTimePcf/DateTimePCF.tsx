import * as React from 'react';
import { Label, DatePicker, DayOfWeek } from '@fluentui/react';

export type DateValueProps=
{
  value: Date | undefined;
}

const DateTimePCF = (props: any) => {

const [selectedDate, setSelectedDate] = React.useState<Date  | undefined>(props.value);

  const onSelectDate = (date: Date |null  | undefined): void => {
      setSelectedDate(date || undefined);
  };

  return (
      <div>
          <DatePicker
              firstDayOfWeek={DayOfWeek.Sunday}
              placeholder="Select a date..."
              ariaLabel="Select a date"
              value={selectedDate}
              onSelectDate={onSelectDate}
          />
          {selectedDate && <div>Selected Date: {selectedDate.toLocaleDateString()}</div>}
      </div>
  );
};

export default DateTimePCF;