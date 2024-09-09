import { useEffect, useId, useRef, useState } from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";
import { arSA } from "date-fns/locale";
import { format, isValid, parse } from "date-fns";

// eslint-disable-next-line react/prop-types
const DatePicker = ({ onDateSelect }) => {
  const defaultClassNames = getDefaultClassNames();

  const inputId = useId();

  const calenderRef = useRef();

  // Hold the month in state to control the calendar when the input changes
  const [month, setMonth] = useState(new Date());

  const [selectedDate, setSelectedDate] = useState();
  const [inputValue, setInputValue] = useState("");

  const [openCalender, setOpenCalender] = useState(false);

  const handleClickOutside = (event) => {
    if (calenderRef.current && !calenderRef.current.contains(event.target)) {
      setOpenCalender(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOpenCalender = () => {
    setOpenCalender((prev) => {
      return !prev;
    });
  };

  const handleDayPickerSelect = (date) => {
    if (!date) {
      setInputValue("");
      setSelectedDate(undefined);
    } else {
      setSelectedDate(date);
      setMonth(date);
      const formattedDate = format(date, "dd-MM-yyy");
      setInputValue(formattedDate);
      onDateSelect(formattedDate);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // keep the input value in sync

    const parsedDate = parse(e.target.value, "dd-MM-yyyy", new Date());

    if (isValid(parsedDate)) {
      setSelectedDate(parsedDate);
      setMonth(parsedDate);
      onDateSelect(parsedDate);
    } else {
      setSelectedDate(undefined);
      onDateSelect(undefined);
    }
  };

  const handleCancel = () => {
    setInputValue("");
    setOpenCalender(false);
    onDateSelect(undefined);
  };

  const CustomFooter = () => (
    <div className="flex items-center justify-center gap-2 p-2 font-gehili">
      <button
        className="w-6/12 px-3 py-2 text-white rounded bg-primary-color hover:bg-opacity-90 "
        onClick={() => setOpenCalender(false)}
      >
        تأكيد
      </button>
      <button
        className="w-6/12 px-3 py-2 text-white rounded bg-slate-700 hover:bg-opacity-90"
        onClick={handleCancel}
      >
        إلغاء
      </button>
    </div>
  );

  return (
    <div className="relative">
      <input
        id={inputId}
        type="text"
        className="w-full p-3 mt-1 text-sm bg-white border-2 rounded-md shadow-md outline-none text-primary-color border-primary-color english-numerals"
        value={inputValue}
        onChange={handleInputChange}
        onClick={handleOpenCalender}
        autoComplete="off"
      />

      {openCalender && (
        <div
          className="absolute top-0 p-1 bg-gray-200 rounded-sm shadow-lg english-numerals "
          ref={calenderRef}
        >
          <DayPicker
            month={month}
            onMonthChange={setMonth}
            dir="rtl"
            locale={arSA}
            mode="single"
            weekStartsOn={6}
            fixedWeeks
            captionLayout="dropdown"
            selected={selectedDate}
            onSelect={handleDayPickerSelect}
            classNames={{
              today: `border-primary-color`,
              selected: `bg-primary-color border-slate-800 text-white rounded-full`,
              chevron: `${defaultClassNames.chevron} fill-primary-color`,
            }}
          />
          <CustomFooter />
        </div>
      )}
    </div>
  );
};

export default DatePicker;
