import { useState } from "react";
import Header     from "../Header/Header";
import TowerFloor from "../TowerFloor/TowerFloor";
import DateRoom   from "../DateRoom/DataRoom";
import Comments   from "../Comments/Comments";
import './App.scss';



function App() {

  const [tower,setTower] = useState('Башня А');
  const [floor,setFloor] = useState('Этаж 3');
  const [room,setRoom]   = useState('Комната 1');
  const [comm, setComm]  = useState("");
  const [startDate, setStartDate] = useState(new Date());


  const sendData = () => {     
    const data = {tower,floor,room,comm,startDate};
    
    console.log(JSON.stringify(data));
    //функция по отправке данных в консоль и трансформирования в JSON
  }

  const clearForm = () => {

    setTower('Башня А');
    setRoom('Комната 1');
    setFloor("Этаж 3");
    setStartDate(new Date());
    setComm("");
//Функция очистки формы 
}
 
  function openDropDown(dropDown, setDropDown) {
    if (dropDown === 'hidden') {
      setDropDown("visible");
    }else{
      setDropDown('hidden')
    }
    //Функция по открытию дропдаун меню по изменению стейта стилей
  }

  function closeDropDown(dropDown,setDropDown){
    if (dropDown === "visible") {
      setDropDown("hidden");
    }
  }
  //функция по закрытию дропдауна
  

  function setValue(e,setDropDown,setComponent){
    setComponent(e.target.value);
    setDropDown('hidden');
    //функция изменение значения в кнопках
  }


  return (
    <div className="App">
        <Header/>
        
        <TowerFloor close={closeDropDown} dropDown={openDropDown} setDropDown={setValue} 
                      tower={tower} setTower={setTower} 
                      floor={floor} setFloor={setFloor}/>

        <DateRoom close={closeDropDown} dropDown={openDropDown} setDropDown={setValue} 
                  room={room} setRoom={setRoom} 
                startDate={startDate} setStartDate={setStartDate} />

        <Comments comm={comm} setComm={setComm} clearForm={clearForm} sendData={sendData}/>
    </div>
  );
}

export default App;
