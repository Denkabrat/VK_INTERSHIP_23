import {AiOutlineCaretDown} from 'react-icons/ai';
import { useState } from 'react';
import './TowerFloor.scss';

const TowerFloor = ({close,dropDown,setDropDown,tower,setTower,floor,setFloor}) => {

    const [showTower,setShowTower] = useState('hidden');
    const [showFloor,setShowFloor] = useState('hidden');
    
    const floors = [];

    for (let i = 2; i < 27; i++) {
      floors.push(i + 1);
      
    }
    //Массив с этажами для заполнения дропдауна

    window.addEventListener('click',(e)=>{
        
        if(e.target !== document.querySelector('.Choose_Button')){
            close(showTower,setShowTower);
        }if(e.target !== document.querySelector('.Choose_Button2')){
            close(showFloor,setShowFloor);
        }
  
    })

    //Закрытие дропдауна при нажатии на пустую область (решение колхозное,делалось на скорую руку)


    return(
        <div className='Main_Selector'>
            <div className='Tower_Selector'>
                <div className="Choose_Item">
                    <span className='Chose_Tower'>Выбор башни</span>
                    <span className='Chose_Floor'>Выбор этажа</span>
                </div>


                <div className="Options_Item">
                    <div className="Select_Container">
                        <button onClick={() => dropDown(showTower,setShowTower)}  className='Choose_Button'>{tower}<AiOutlineCaretDown/></button>
                        <div className="Dropdown_Tower" style={{visibility:showTower}}>
                                <button onClick={(e)=> setDropDown(e,setShowTower,setTower)} className='Button_Li' value='Башня А'>Башня А</button>
                                <button onClick={(e)=> setDropDown(e,setShowTower,setTower)} className='Button_Li' value='Башня Б'>Башня Б</button>
                         </div>
                    </div>

                    <div className="Select_Container2">
                        <button onClick={() => dropDown(showFloor,setShowFloor)} className='Choose_Button2'>{floor}<AiOutlineCaretDown/></button>
                            <div className="Dropdown_Floor" style={{visibility:showFloor}}>
                                    {
                                        floors.map(i => <button key={i} onClick={(e)=> setDropDown(e,setShowFloor,setFloor)} value={`Этаж ${i}`} className='Button_Li'>{`Этаж ${i}`}</button>
                                        )
                                    }
                            </div>
                    </div>   
                </div>
            </div>
        </div>
    )
}

export default TowerFloor;