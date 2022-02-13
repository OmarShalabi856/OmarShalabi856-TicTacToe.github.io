import React from "react"
import Plate from "./components/Plate.js"
import Box from "./components/Box"
import "./App.css"


export default function App(){
    const[Active,setActive]=React.useState({Player1:true, Player2:false})
    const[Entries,setEntries]=React.useState({0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8"})
    const tempBoxes=[]
    const[Win,setWin]=React.useState(false)
    React.useEffect(()=>{if(Entries[0]===Entries[1] &&  Entries[0 ]===Entries[2] || Entries[3]===Entries[4] &&  Entries[4 ]===Entries[5] || 
        Entries[6]===Entries[7] &&  Entries[7 ]===Entries[8] || Entries[0]===Entries[3] &&  Entries[3 ]===Entries[6] ||
        Entries[1]===Entries[4] &&  Entries[4 ]===Entries[7] || Entries[2]===Entries[5] &&  Entries[5 ]===Entries[8] ||
        Entries[0]===Entries[4] &&  Entries[4 ]===Entries[8] ||  Entries[2]===Entries[4] &&  Entries[4 ]===Entries[6]  ){
          setWin(true)
       }},[Entries])
    function change(){
setActive({Player1:!(Active.Player1),Player2:!(Active.Player2)})
    }
    
    function entryPlayer(entry,index){
        setEntries(prevState=>({...prevState,[index]:entry}))
    }
    for(let i=0;i<9;i++){
       tempBoxes[i]=
            <Box 
            Player={Active}
            changeActive={change}
            saveEntry={entryPlayer}
            index={i}
            win={Win}
            
            />
    }
    const Player=Active.Player1?"Player 2":"Player 1";
    
    return(
        <div>
            <h1 className="Head">Tic-Tac-Toe</h1>
           <Plate
           PlateDivs={tempBoxes}
           />
          {Win && <h1 className="Head2">{Player} Wins!</h1>}
        </div>
    )
}