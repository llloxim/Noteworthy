import Info from './Info.json'
import './cards.css'; 

const ItemNoC = ({
name,
bio,
pic,
semester,
sem,
major,
intrests})=>{
    return(
        <div className="itemNoC">
            <img className="profile" src={pic} alt={"./NW-Logo.png"} />
            <div className='description'>           
                <h4 className='mtext'>{name}</h4>
			    <h4 className='mtext'>{bio}</h4>
                <h4 className='mtext'>{semester}</h4>
                <h4 className='mtext'>{sem}</h4>
                <h4 className='mtext'>{major}</h4>
                <h4 className='mtext'>{intrests}</h4>
            </div>
		</div>
    );
};

const Card = ()=>{
    const itemList = [];
    const Names = Object.keys(Info);
    for(let i = 0; i < Names.length; i++){
        const name = Names[i];
        const info = Info[name];
        itemList.push(<ItemNoC 
            name={name} 
            bio={info.Bio} 
            pic={info.Pic}
            semester={info.Semester}
            sem={info.Sem}
            major={info.Major}
            intrests={info.Intrests}
            />)
    }
    return(
        <div className="classM">
            <h1 className="card"> Card </h1>
            <div className='spacing'>
            {itemList}
            </div>
		</div>
    );

};

export default Card