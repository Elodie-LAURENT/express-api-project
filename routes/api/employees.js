const express = require('express');
const router = express.Router();

//retreive all employee
app.get('/api/employees', (req, res) => {
    res.json(employees);
})

//retreive single employee
app.get('/api/employees/:name', (req, res) => {
    const checkExists = employees.some(employee => employee.name === req.params.name);
    if(checkExists) {
    res.json(employees.filter(employee => employee.name === req.params.name));
    }else {
        //400 status bad  request
        res.status(400).json({msg: `Employee ${req.params.name} doesn't exist`});
    }
})

//create employee

app.post ('/api/employees', (req, res) => {
    const newEmployee = {
        name: req.body.name,
        email: req.body.email,
        age: Math.round(Math.random() * (100 - 18) + 18),
        added: `${moment().format()}`
    }

    if(!newEmployee.name || !newEmployee.email) {
        res.status(400).json({msg: 'Please include both a name and an email! Thanks!'})
    }

    employees.push(newEmployee);
    res.json(employees);
})