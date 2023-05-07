import React, {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBed, faCalendarDays, faClose, faPerson} from "@fortawesome/free-solid-svg-icons"
import {DateRange} from 'react-date-range'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {format} from 'date-fns'

import './HeaderSearch.scss'

const HeaderSearch = () => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState(
    {
      adult: 2,
      children: 2,
      room: 1
    });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const handleCounter = (type, value) => {
    setOptions((prevState) => {
      return {
        ...prevState,
        [type]: prevState[type] + value
      }
    });
  }

  return (
    <div className="header-search">
      <div className="header-search-item">
        <FontAwesomeIcon icon={faBed} className="header-icon"/>
        <input
          type="text"
          className="header-search-input"
          placeholder="Where are you going?"
        />
      </div>
      <div className="header-search-item">
        <FontAwesomeIcon icon={faCalendarDays} className="header-icon"/>
        <span
          onClick={() => setOpenCalendar(!openCalendar)}
          className="header-search-text">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
          {
            openCalendar &&
            <button className="header-close-btn">
              <FontAwesomeIcon icon={faClose} className="header-icon"/>
            </button>
          }
        </span>

        {openCalendar && <DateRange
          editableDateInputs={true}
          onChange={item => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          className="header-search-calendar"
        />
        }
      </div>
      <div className="header-search-item">
        <FontAwesomeIcon icon={faPerson} className="header-icon"/>
        <span onClick={() => setOpenOptions((prevState) => prevState === false)} className="header-search-text">
          {`${options.adult} adults · ${options.children} children · ${options.room} room`}
          {
            openOptions &&
            <button className="header-close-btn">
              <FontAwesomeIcon icon={faClose} className="header-icon"/>
            </button>
          }
        </span>
        {openOptions && <div className="options">
          <div className="options-item">
            <span className="options-text">Adults</span>
            <div className="options-counter">
              <button disabled={options.adult <= 1} className="options-counter-btn"
                      onClick={() => handleCounter("adult", -1)}>-
              </button>
              <span className="options-counter-text">{options.adult}</span>
              <button disabled={options.adult >= 4} className="options-counter-btn"
                      onClick={() => handleCounter("adult", 1)}>+
              </button>
            </div>
          </div>
          <div className="options-item">
            <span className="options-text">Children</span>
            <div className="options-counter">
              <button disabled={options.children <= 0} className="options-counter-btn"
                      onClick={() => handleCounter("children", -1)}>-
              </button>
              <span className="options-counter-text">{options.children}</span>
              <button disabled={options.children >= 5} className="options-counter-btn"
                      onClick={() => handleCounter("children", 1)}>+
              </button>
            </div>
          </div>
          <div className="options-item">
            <span className="options-text">Rooms</span>
            <div className="options-counter">
              <button disabled={options.room <= 1} className="options-counter-btn"
                      onClick={() => handleCounter("room", -1)}>-
              </button>
              <span className="options-counter-text">{options.room}</span>
              <button disabled={options.room >= 4} className="options-counter-btn"
                      onClick={() => handleCounter("room", 1)}>+
              </button>
            </div>
          </div>
        </div>}
      </div>
      <div className="header-search-item">
        <button type="button">Search</button>
      </div>
    </div>
  );
};

export default HeaderSearch;
