import { useState } from "react";
import { Button} from "react-bootstrap";
import { addRating,removeRating } from "../menu/menuSlice";
import { useDispatch } from "react-redux";

const SideNavbar = (props) => {
    const dispatch = useDispatch();
    //console.log(id)
    const [toggle,setToggle] = useState(false)

    const toggleHandler = () =>{
        setToggle(!toggle);
        toggle ? dispatch(removeRating(props.id)) : dispatch(addRating(props.id))
    }

    return (
            <Button variant="light"
                    className="mt-4"
                    style={{cursor:"pointer"}}
                    onClick={toggleHandler}>
                <img src={ toggle ? require("../../icons/yellowstar.png") : 
                                    require("../../icons/starblack.png")} 
                        alt="star"/>
            </Button> 
      );
}
 
export default SideNavbar;
