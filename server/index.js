const express = require ('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const {mongoose} = require('./database');

//configuraciones
app.set('port',process.env.PORT || 3000);

//middlewares - modulos
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}));
//routes
app.use('/api/employee', require('./routes/employee.routes'));
//starting the server
app.listen(app.get('port') ,() =>{
console.log('server on port ',app.get('port'));
});