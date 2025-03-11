import {ButtonRounded } from "../buttons/Buttons"

function Header() {
    return(
        <div
        className="flex flex-row gap-4 p-2 justify-end border-b-[1px] border-b-white border-solid"
        >
            <ButtonRounded 
            lable="Login"/>
        </div>
    )
}

export default Header