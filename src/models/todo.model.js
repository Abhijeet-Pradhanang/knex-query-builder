// let users = [];
const knex = require('../knex.js')

const getUsers = async ()=> {
    const users = await knex({ a: 'users' })
      .join('profile', 'a.id', 'profile.user_id')
      .select('a.id', 'a.name', 'profile.designation as dg')
      .where('a.id', '<', 2);

    return users;
}

// const createUser = async (email,name, address )=> {
//     // const user = await knex.raw(`INSERT INTO users
//     // (user_name,user_address,user_email)
//     // VALUES 
//     // ('${name}','${address}','${email})`);
//     await knex.insert({
//         user_name: name,
//         user_address: address,
//         user_email: email
//     })
//     // return user;
// }

module.exports={getUsers};