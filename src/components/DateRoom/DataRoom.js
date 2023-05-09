import './DateRoom.scss';
import {AiOutlineCaretDown} from 'react-icons/ai';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//Использую компонент дата-пикер из библиотеки
const DateRoom = ({close,dropDown,setDropDown,room,setRoom,startDate,setStartDate}) => {

    const [showRoom,setShowRoom] = useState('hidden');
 
    const rooms = [];

    for (let i = 0; i < 10; i++) {
      rooms.push(i + 1);
    }

    //Массив с комнатами для заполнения дропдауна

    window.addEventListener('click',(e)=>{
        
        if(e.target !== document.querySelector('.Choose_Button_Room')){
            close(showRoom,setShowRoom);
        }
    })
    //Закрытие дропдауна при нажатии на пустую область (решение колхозное,делалось на скорую руку)
    


    return(
        <div>
             <div className='Main_Wrapper'>
            <div className='Date_Selector'>
                <div className="Choose_Selector">
                    <span className='Chose_Date'>Выбор даты</span>
                    <span className='Chose_Room'>Выбор переговорной</span>
                </div>


                <div className="Options_Item_DateRoom">
                    <div className="Select_Container_Date">
                        <DatePicker className='Choose_Button_Date' selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>

                    <div className="Select_Container_Room">
                        <button onClick={() => dropDown(showRoom,setShowRoom)} className='Choose_Button_Room'>{room}<AiOutlineCaretDown/></button>
                            <div className="Dropdown_Rooms" style={{visibility:showRoom}}>
                                    {
                                        rooms.map(i =>  <button className='Button_Li_Room' key={i} onClick={(e)=> setDropDown(e,setShowRoom,setRoom)} value={`Комната ${i}`} >{`Комната ${i}`}</button>)
                                    }
                            </div>
                    </div>   
                </div>
            </div>
        </div>
        </div>
    )

}




export default DateRoom;