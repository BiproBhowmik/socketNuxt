/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import Ws from 'App/Services/Ws'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})


// User CRUD routs

Route.get('/showAllUsers', 'UsersController.show') //Show all User
Route.get('/getSingleUser/:id', 'UsersController.getSingleUser')
Route.post('/checkToLogin', 'UsersController.checkToLogin')
Route.post('/updateEmailUsername', 'UsersController.updateEmailUsername')
Route.post('/storeUser', 'UsersController.store')
// Route.post('/updateIncomeCategoryTypeName', 'UsersController.updateTypeName')

// Route.post('/increseIncomeAmount', 'UsersController.increseIncomeAmount')
Route.get('/getUser', 'UsersController.getUser')
Route.get('/logout', 'UsersController.logout')

Route.post('/createSession', 'UsersController.createSession')
Route.get('/getSession', 'UsersController.getSession')

// User CRUD routs

Route.post('/storeChat', 'ChatsController.store')
Route.post('/showChat', 'ChatsController.show')


Route.get('/test', () => {
  Ws.io.emit('getMessage', "{ username: 'Bipro' }")
  Ws.io.emit('message')
  return Ws.io.emit('getMessage', "{ username: 'Bipro' }")
})

