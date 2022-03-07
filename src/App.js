import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

let attrLocks = {charisma: false, intelligence: false, willpower: false, strength: false, agility: false, fortitude: false };

function App() {
  const [levelValue, setLevel] = useState(1);
  const [raceValue, setRace] = useState('Celtor');
  const [charismaValue, setCharisma] = useState(1);
  const [intelligenceValue, setIntelligence] = useState(1);
  const [willpowerValue, setWillpower] = useState(1);
  const [agilityValue, setAgility] = useState(1);
  const [strengthValue, setStrength] = useState(1);
  const [fortitudeValue, setFortitude] = useState(1);
  const [lightWeaponValue, setLightWeapon] = useState(0);
  const [mediumWeaponValue, setMediumWeapon] = useState(0);
  const [heavyWeaponValue, setHeavyWeapon] = useState(0);
  const [primaryAttunementValue, setPrimaryAttunement] = useState(10);
  const [primaryAttunement, setPrimaryAttunementName] = useState('none');
  const [secondaryAttunement, setSecondaryAttunementName] = useState('none');
  const [secondaryAttunementValue, setSecondaryAttunement] = useState(0);
  const [tertiaryAttunementValue, setTertiaryAttunement] = useState(0);
  const [tertiaryAttunement, setTertiaryAttunementName] = useState('none');

  let prevRace;

function clean() {
    setCharisma(1)
    setIntelligence(1)
    setWillpower(1)
    setAgility(1)
    setStrength(1)
    setFortitude(1)
    attrLocks = {charisma: false, intelligence: false, willpower: false, strength: false, agility: false, fortitude: false }
}
function controlSetRace() {
      
  switch(raceValue) {
    case 'Vesperian':
      
      clean()
      setWillpower(2)
      attrLocks.willpower = true
      setFortitude(2)
      attrLocks.fortitude = true;
      break
    case 'Capra':
      clean()
      setIntelligence(2)
      attrLocks.intelligence= true;
      setWillpower(2)
      attrLocks.willpower = true
      break
    case 'Canor':
      clean()
      setCharisma(2)
      attrLocks.charisma = true
      setStrength(2)
      attrLocks.strength = true
      
      break
    case 'Felinor':
      clean()
      setCharisma(2)
      attrLocks.charisma = true
      setAgility(2)
      attrLocks.agility = true
      
      break
    case 'Ganymede':
      clean()
      setIntelligence(2)
      attrLocks.intelligence= true;
      setWillpower(2)
      attrLocks.willpower = true
      break
    case 'Khan':
      clean()
      setAgility(2)
      attrLocks.agility = true
      setStrength(2)
      attrLocks.strength = true;
      break
    case 'Celtor':
      clean()
      setCharisma(2);
      attrLocks.charisma = true;
      setIntelligence(2);
      attrLocks.intelligence= true;
      break
    case 'Etrean':
      clean()
      setIntelligence(2)
      attrLocks.intelligence= true;
      setAgility(2)
      attrLocks.agility = true

      break
    case 'Gremor':
      clean()
      setStrength(2)
      attrLocks.strength = true;
      setFortitude(2)
      attrLocks.fortitude = true;
      break
    case 'Adret':
      clean()
      setCharisma(2)
      attrLocks.charisma = true
      setWillpower(2)
      attrLocks.willpower = true
    
      break
    default:
   

}


}

function raceChange(r) {
  clean()
  prevRace = raceValue
  setRace(r.target.value);

  controlSetRace(r);
  
  
  
  
  
  
  
}
function primaryAttunementChange(A) {
  
 
  setPrimaryAttunementName(A.target.value);

  
  
  
  
  
  
  
  
}
function secondaryAttunementChange(A) {
  
 
  setSecondaryAttunementName(A.target.value);

  
  
  
  
  
  
  
  
}
function tertiaryAttunementChange(A) {
  
 
  setTertiaryAttunementName(A.target.value);

  
  
  
  
  
  
  
  
}


function blur(a, attr) {
  
  switch (attr) {
    case 'charisma':
     
        if(a.target.value < 2 && a.target.value !== '' && attrLocks.charisma === true){
          setCharisma(2)
        }
      
      
      
      break;
    case 'intelligence':
      
        if(a.target.value < 2 && a.target.value !== '' && attrLocks.intelligence === true){
          setIntelligence(2)
        } 
     
      
      
      break;
    case 'willpower':
      
        if(a.target.value < 2 && a.target.value !== '' && attrLocks.willpower === true){
          setWillpower(2) 
        } 
      
      
      
      break;
    case 'strength':
      
        if(a.target.value < 2 && a.target.value !== '' && attrLocks.strength === true){
          setStrength(2)
        } 
     
     
      
      break;
    case 'agility':
      
        if(a.target.value < 2 && a.target.value !== '' && attrLocks.agility === true){
          setAgility(2)
        }
      
      
      
      break;
    case 'fortitude':
      
        if(a.target.value < 2 && a.target.value !== '' && attrLocks.fortitude === true){
          setFortitude(2)
        } 
      
      
      break;
      
      
    default:
      break;
  }
  
}

function attrChange(a, attr) {
  const numRegex = '^[0-9]*$'
  switch (attr) {
    case 'charisma':
      if(a.target.value.match(numRegex)){
        
          setCharisma(a.target.value)
        
      
      
      }
      break;
    case 'intelligence':
      if(a.target.value.match(numRegex)){
      
          setIntelligence(a.target.value)
        
     
      
      }
      break;
    case 'willpower':
      if(a.target.value.match(numRegex)){
       
          setWillpower(a.target.value)
        
      
      
      }
      break;
    case 'strength':
      if(a.target.value.match(numRegex)){
     
          setStrength(a.target.value)
        
     
     
      }
      break;
    case 'agility':
      if(a.target.value.match(numRegex)){
        
          setAgility(a.target.value)
        
      
      
      }
      break;
    case 'fortitude':
      if(a.target.value.match(numRegex)){
      
          setFortitude(a.target.value)
        
      
      
      }
      break;
      case 'primary attunement':
      if(a.target.value.match(numRegex)){
       
          setPrimaryAttunement(a.target.value)
        
      
      
      }
      break;
      case 'secondary attunement':
        if(a.target.value.match(numRegex)){
         
            setSecondaryAttunement(a.target.value)
          
        
        
        }
        break;
        case 'tertiary attunement':
          if(a.target.value.match(numRegex)){
           
              setTertiaryAttunement(a.target.value)
            
          
          
          }
          break;
      case 'light weapon':
      if(a.target.value.match(numRegex)){
     
          setLightWeapon(a.target.value)
        
      
      
      }
      break;
      case 'medium weapon':
      if(a.target.value.match(numRegex)){
     
          setMediumWeapon(a.target.value)
        
      
      
      }
      break;
      case 'heavy weapon':
      if(a.target.value.match(numRegex)){
     
          setHeavyWeapon(a.target.value)
        
      
      
      }
      break;
    default:
      break;
  }
  
}

useEffect(() => {
  if(prevRace !== raceValue) {
    clean()
     controlSetRace()
     
  }
  

 
 
  
 
  
 
   
 }, [raceValue, prevRace]);


    return (
    <div className="App">
      <div class='main'> 

      <div class='col Input'>



        
  
        
       
         
       
        
<div class='MainInputs'> 


        
        <div> 
        <div class='select attr'> 
        <form>
        <label>Race</label> <br/>
        <select class='Race'
        
        type="text"
        value={raceValue}
        onChange={
          (r) => raceChange(r)}
          > 
        <option value="Vesperian">Vesperian</option>
        <option value="Capra">Capra</option>
        <option value="Canor">Canor</option>
        <option value="Felinor">Felinor</option>
        <option value="Ganymede">Ganymede</option>
        <option value="Khan">Khan</option>
        <option value="Celtor">Celtor</option>
        <option value="Etrean">Etrean</option>
        <option value="Gremor">Gremor</option>
        <option value="Adret">Adret</option>
                      
        </select>
        </form>
        </div>
        <div class='attr'> 
        
         
        <form>
        <label>Charisma</label> <br/>
        <input
        
        type="text"
        value={charismaValue}
        
        onChange={(a) => attrChange(a, 'charisma')}
        onBlur={(a) => blur(a, 'charisma')}
        
        />
        </form>
        
        </div>

        

        <div class='attr'>  
        


        <form>
        <label>Intelligence</label> <br/>
        <input
        
        type="text"
        value={intelligenceValue}
        
        onChange={(a) => attrChange(a, 'intelligence')}
        onBlur={(a) => blur(a, 'intelligence')}
        />
        </form>
        </div>




        <div class='attr'> 
        

        <form>
        <label>Willpower</label> <br/>
        <input
        
        type="text"
        value={willpowerValue}
        onChange={(a) => attrChange(a, 'willpower')}
        onBlur={(a) => blur(a, 'willpower')}
        />
        </form>
        </div>




        <div class='attr'> 
        

        <form>
        <label>Agility</label> <br/>
        <input
        
        type="text"
        value={agilityValue}
        onChange={(a) => attrChange(a, 'agility')}
        onBlur={(a) => blur(a, 'agility')}
        />
        </form>
        </div>




        <div class='attr'>  
        


        <form>
        <label>Strength</label> <br/>
        <input
        
        type="text"
        value={strengthValue}
        onChange={(a) => attrChange(a, 'strength')}
        onBlur={(a) => blur(a, 'strength')}
        />
        </form>
        </div>
        


        <div class='attr'> 
        


        <form>
        <label>Fortitude</label> <br/>
        <input
        
        type="text"
        value={fortitudeValue}
        onChange={(a) => attrChange(a, 'fortitude')}
        onBlur={(a) => blur(a, 'fortitude')}
        />
        </form>

        </div>

        </div>
    

        
       
        
    
        
       
        



        <div> 
        <div class='attr'> 
        <form>
        <label>Level</label> <br/>
        <input
        
        type="text"
        value={levelValue}
        onChange={(l) => setLevel(l.target.value)}
        
        />
        </form>
        </div>
        <div class='attr'> 
       


       <form>
       <label>{primaryAttunement !== 'none' ? primaryAttunement : 'Primary Attunement'}</label> <br/>
       <input
       
       type="text"
       value={primaryAttunementValue}
       onChange={(a) => attrChange(a, 'primary attunement')}
       />
       <select
        value={primaryAttunement}
        onChange={
          (A) => primaryAttunementChange(A)}
          > 
        
        <option value="none" selected="selected">Select Attunement</option>
         <option value='Flamecharm'>Flamecharm</option>
         <option value='Frostdraw'>Frostdraw</option>
         <option value='Thundercall'>Thundercall</option>
         <option value='Galebreathe'>Galebreathe</option>
         <option value='Shadowcast'>Shadowcast</option>
       </select>
       </form>
       </div>
       <div class='attr'> 
      


       <form>
       <label>{secondaryAttunement !== 'none' ? secondaryAttunement : 'Secondary Attunement'}</label> <br/>
       <input
       
       type="text"
       value={secondaryAttunementValue}
       onChange={(a) => attrChange(a, 'secondary attunement')}
       />
       <select
        value={secondaryAttunement}
        onChange={
          (A) => secondaryAttunementChange(A)}
          > 
       
       <option value="none" selected="selected">Select Attunement</option>
       <option value='Frostdraw'>Frostdraw</option>
       <option value='Flamecharm'>Flamecharm</option>
         <option value='Thundercall'>Thundercall</option>
         <option value='Galebreathe'>Galebreathe</option>
         <option value='Shadowcast'>Shadowcast</option>
       </select>
       </form>
       </div>
       <div class='attr'> 
      


       <form>
       <label>{tertiaryAttunement !== 'none' ? tertiaryAttunement : 'Tertiary Attunement'}</label> <br/>
       <input
       
       type="text"
       value={tertiaryAttunementValue}
       onChange={(a) => attrChange(a, 'tertiary attunement')}
       />
       <select
        value={tertiaryAttunement}
        onChange={
          (A) => tertiaryAttunementChange(A)}
          > 
       
       <option value="none" selected="selected">Select Attunement</option>
       <option value='Frostdraw'>Frostdraw</option>
       <option value='Flamecharm'>Flamecharm</option>
         <option value='Thundercall'>Thundercall</option>
         <option value='Galebreathe'>Galebreathe</option>
         <option value='Shadowcast'>Shadowcast</option>
       </select>
       </form>
       </div>

       <div class='attr'> 
       
       
       <form>
       <label>Light Weapons</label> <br/> 
       <input
       
       type="text"
       value={lightWeaponValue}
       onChange={(a) => attrChange(a, 'light weapon')}
       />
       </form>
       
       </div>
       <div class='attr'> 
       
       
       <form>
       <label>Medium Weapons</label> <br/> 
       <input
       
       type="text"
       value={mediumWeaponValue}
       onChange={(a) => attrChange(a, 'medium weapon')}
       />
       </form>
       
       </div>
       <div class='attr'> 
       
       
       <form>
       <label>Heavy Weapons</label> <br/> 
       <input
       
       type="text"
       value={heavyWeaponValue}
       onChange={(a) => attrChange(a, 'heavy weapon')}
       />
       </form>
       
       </div>
        
        
        </div>




        </div>
       
        
        











       
        </div>

      <div class='col Talents'>
        Talents 
       </div>

      <div class='col points'>
      <p>   Remaining Points {
            (levelValue * 5 + 25 )
             - (Number(lightWeaponValue)
              + Number(mediumWeaponValue)
               + Number(heavyWeaponValue)
                + Number(primaryAttunementValue)
                 + Number(secondaryAttunementValue)
                  + Number(tertiaryAttunementValue)
                   +  Number(charismaValue)
                    + Number(intelligenceValue)
                     + Number(willpowerValue)
                      + Number(agilityValue)
                       + Number(strengthValue)
                        + Number(fortitudeValue))
        }
  </p>
        <div class='Display'>
        <p>Charisma:     {charismaValue} </p>
  <p>Intelligence:    {intelligenceValue} </p>
  <p>Willpower: {willpowerValue} </p>
  <p>Strength: {strengthValue} </p>
  <p>Agility: {agilityValue} </p>
  <p>Fortitude:   {fortitudeValue} </p>
  <p>Light Weapons:     {lightWeaponValue} </p>
  <p>Medium Weapons:   {mediumWeaponValue} </p>
  <p>Heavy Weapons:   {heavyWeaponValue} </p>


           </div>

           <div class='AttunementDisplay'>
           <p class='AttunementDisplayItem'>{primaryAttunement !== 'none' ? primaryAttunement : 'Primary Attunement'}: {primaryAttunementValue} </p>
           <p class='AttunementDisplayItem'>{secondaryAttunement !== 'none' ? secondaryAttunement : 'Secondary Attunement'}: {secondaryAttunementValue} </p>
           <p class='AttunementDisplayItem'>{tertiaryAttunement !== 'none' ? tertiaryAttunement : 'Tertiary Attunement'}: {tertiaryAttunementValue} </p>
           </div>





      </div>
  
  
  
      </div>
     
  
    </div>
    
  );
}

export default App;
