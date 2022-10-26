import React, { useState } from "react";
import "./dropdown.scss";
import chevroneImage from "../../assets/images/chevron-down.png"

export interface DropdownProps {
    selected?: string,
    options: string[],
    setSelected:(option: string) => void
}

const Dropdown = (props : DropdownProps) => {
    const [isActive, setActive] = useState<boolean>(false);
    return (
        <div className="dropdown">
            <div className="dropdown__btn" onClick={()=> setActive(!isActive)}>
                {props.selected ? props.selected : "Выбери тест" }
                <img src={chevroneImage} alt="" className={isActive ? "dropdown__chevrone -rotate" : "dropdown__chevrone"}/>
                </div>
            {isActive && 
            <div className="dropdown__content">
                 {props.options.map((option) =>
                    <div className="dropdown__item" onClick={() => {
                        props.setSelected(option);
                        setActive(!isActive);
                    }}>{option} </div>)
                }
            </div>
            }
        </div>  
    );
};

export default Dropdown;
