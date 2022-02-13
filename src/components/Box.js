import React from "react"
export default function Box(props){
    const[imgURL,setImgUrl]=React.useState("https://i.pinimg.com/originals/f5/05/24/f50524ee5f161f437400aaf215c9e12f.jpg")
    const[clicked,setClicked]=React.useState(false)
    function addImage(){
        if(!clicked && !props.win){
        if(props.Player.Player1){
        setImgUrl("https://i.ibb.co/SRtfXmP/X.png")
        props.changeActive()
        props.saveEntry("Player1",props.index)
       
        }
        else{
            setImgUrl("https://coffee-dictionary.com/wp-content/uploads/blu/e_c/irc/le_/for/_di/abe/tes/-20/170/119/05-/588/04a/e2a/7c2/4/Blue_circle_for_diabetes-2017011905-58804ae2a7c24.svg") 
             props.changeActive()
             props.saveEntry("Player2",props.index)
        }
        setClicked(true)
    }
    else{
        return
    }
    }

        return(
        <div className="grid-item"  onClick={addImage}>
         <img className="X-img" src={imgURL} />
          </div>
    )
}