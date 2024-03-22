import Info from './Info.json'
import './cards.css'; 
import Popup from 'reactjs-popup';

const ItemNoC = ({
name,
pronouns,
majorsminors,
semesterInBerkeley,
semesterInNoteworthy,
interests,
bio,
howWasYourDay,
pic})=>{
    return(
        <Popup trigger={
        <button className='butt'>
        <div className="itemNoC">
        <img className="profile" src={pic} alt={"./NW-Logo.png"} />
        <div className='description'>           
            <h4 className='mtext'>{name}</h4>
            <h4 className='mtext'>Promouns : {pronouns}</h4>
            <h4 className='mtext'>Major/Minor : {majorsminors}</h4>
            <h4 className='mtext'>Semester in Berkeley : {semesterInBerkeley}</h4>
            <h4 className='mtext'>Semester in Noteworthy : {semesterInNoteworthy}</h4>
            <h4 className='mtext'>Interests : {interests}</h4>
            <h4 className='mtext'>How Was Your Day? : {howWasYourDay}</h4>
        </div>
        </div>
        </button>} position="center">
    
        
        <div className='pop'>
            <img className="profile" src={pic} alt={"./NW-Logo.png"} />
            <h2>Bio : {bio}</h2>
        </div>
        </Popup>
    );
};

const Card = ()=>{
    const itemList = [];
    const Names = Object.keys(Info);
    for(let i = 0; i < Names.length; i++){
        const name = Names[i];
        const info = Info[name];
        itemList.push(<ItemNoC 
            name={info.name} 
            pronouns={info.pronouns} 
            majorsminors={info.majorsminors}
            semesterInBerkeley={info.semesterInBerkeley}
            semesterInNoteworthy={info.semesterInNoteworthy}
            interests={info.interests}
            bio={info.bio}
            howWasYourDay={info.howWasYourDay}
            pic={info.pic} 
            />)
    }
    return(
        <div className="classM">
            <h1 className="card"> Members </h1>
            <div className='spacing'>
            {itemList}
            </div>
		</div>
    );

};

export default Card