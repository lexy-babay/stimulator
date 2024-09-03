import React, { useEffect, useState } from 'react'
import Animal from './Animal';

function Zoo() {
  const   initialAnimals= {
        monkeys: Array(5).fill({type: '🐒', health: '100', status: 'alive'}),
        giraffe: Array(5).fill({type: '🦒', health: '100', status: 'alive'}),
        elephant: Array(5).fill({type: '🐘', health: '100', status: 'alive'}),
    };

        const [animals, setAnimals] = useState(initialAnimals);
        const [time, setTime] = useState(0);


        const passTime = () => {
            setTime (prevTime => prevTime + 1);
            setAnimals(prevAnimals => { 
                const updatedAnimals = {...prevAnimals};

                for  (const type in updatedAnimals) {
                  updatedAnimals[type] = updatedAnimals[type].map(animal => {
                    if (animal.status === 'dead') return animal;

                    const randomDamage = Math.random()*20;
                    const  newHealth = animal.health - (animal.health * randomDamage) / 100;



                    let newStatus = 'alive';
                    if (animal.type === '🐒' && newHealth < 30) newStatus = 'dead';
                    if (animal.type === '🦒' && newHealth < 50) newStatus = 'dead';
                    if (animal.type === '🐘'){
                        if (newHealth< 70){
                            if(animal.health < 70) newStatus = 'dead';
                            else newStatus  = 'cannot walk'
                        }
                    }

                   return {...animal, health: newHealth, status: newStatus};

                  });
                    
                }
                return updatedAnimals;

            });
        };

        const FeedAnimals = ()=> {
            setAnimals(prevAnimals => {
                const updatedAnimals = {...prevAnimals};
            
                for (const type in updatedAnimals) {
                   const healthIncrease = Math.random()*(25 -10) +10;
                   updatedAnimals[type] = updatedAnimals[type].map(animal => {

                    if(animal.status === 'dead') return animal;
                    const newHealth = animal.health + (animal.health * healthIncrease)/100;
                    return {...animal, health: newHealth, status: newStatus};
                   });
                    
                }
                return updatedAnimals;
            });
        };

        useEffect (()=>{
            const intervalid = setInterval(passTime, 3000);
            return () => clearInterval(intervalid);
        },[]);

  return (
    <div className=' p-8'>
        <div className=' text-[25px] text-center font-bold text-[red]'>ZOO SIMULATOR</div>
        <div className=' text-center text-[20px]'> {time}hours</div>
        <div className=' flex justify-around'>
            <button onClick={passTime} className='  bg-red-500 h-[6vh] w-[10vw] text-[15px] hover:bg-yellow-300'>PassTime</button>
            <button onClick={FeedAnimals} className='  bg-red-500 h-[6vh] w-[10vw] text-[15px] hover:bg-yellow-300'>FeedAnimals</button>
        </div>
        <div className=' grid grid-cols-3 gap-4 '>{Object.values(animals).flat().map((animal, index) => (
            <Animal key={index} type={animal.type} status={animal.status} health={animal.health} />
        ))}</div>
    </div>
  )
}

export default Zoo