const knex=require('../knex');
const Profile = require('../models/todo.model');

const index=async(req,res)=>{
  // const response = await knex({ a: 'users' })
  //   .select('email', 'id')
  //   .where('email', 'like', '%gurzu%')
  //   .andWhere('id', '<', 2)
    // .orWhere()

    // .select({
    //   aName: 'a.name',
    // });

  const response = await Profile.getUsers();
  // console.log(response);

  res.send(response);
}

const create=async(req,res)=>{
  const response = await knex('profile').insert({
    ...req.body,
  });

  res.send(response);
}

const edit=async(req,res)=>{
  console.log(req);
  const responsne = await knex('profile')
    .where({id: 4})
    .update({
      designation: 'SSE',
      user_id: 5,
    })

  res.sendStatus(200);
}

const destroy=async(req,res)=>{
  const response = await knex('profile')
    .where('profile.designation', 'like', '%ASE%')
    .delete()

  res.sendStatus(200);
}

module.exports={
  index,create,edit,destroy
}
