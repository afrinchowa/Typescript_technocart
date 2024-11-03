

// spread operator
// destructuring



// learn spread operator

const bros1: string[]= ['Mir', 'chowa', 'tanvir']
const bros2: string[]= ['Mizan', 'choiti', 'taposi']

bros1.push(...bros2)

//

const mentors1 ={
    typescript:'Mezba',
    redux:'Mir',
    dbms:'Mizan'
}
const mentors2 ={
    Prisma:'Firoz',
    NextJS:'Tonmoy',
    Cloud:'Nahid'
}

const mentorList={
    ...mentors1,
    ...mentors2
}

// learn rest operator

const greetfriends=(...friends:string[])=>{
    // console.log(`Hi ${friend1} ${friend2} ${friend3}`);
friends.forEach((friend:string)=>console.log(`hi ${friend}`))

    greetfriends('abul','babul','tabul','ubul','kabul')
}