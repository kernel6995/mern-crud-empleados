const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const employeeModel = require('./../schemas/schemaEmployee');

const getEmployees = async (req, res, next) => {
    try {
        const result = await employeeModel.find();

        res.json({ message: "GET EMPLOYEES", employees: result });
    } catch (error) {
        res.status(500).json({ message: "ERROR: GET EMPLOYEES" });
    }
}

const addEmployee = async (req, res, next) => {
    const newEmployee = new employeeModel(
        {
            EMPLOYEE_ID: new ObjectId(),
            FIRST_NAME: req.body.FIRST_NAME,
            LAST_NAME: req.body.LAST_NAME,
            EMAIL: req.body.EMAIL,
            PHONE_NUMBER: req.body.PHONE_NUMBER,
            HIRE_DATE: req.body.HIRE_DATE,
            SALARY: req.body.SALARY,
            COMMISSION_PCT: req.body.COMMISSION_PCT,
        }
    );

    try {
        const resultEmployeeAdded = await newEmployee.save();

        res.json({ message: 'POST EMPLOYEE', employee: resultEmployeeAdded });
    } catch (error) {
        res.status(500).json({ message: 'ERROR: POST EMPLOYEE' });
    }
}

const editEmployee = async (req, res, next) => {
    const id = req.params.idEmployee;
    const modifiedEmployee = req.body;

    try {
        const result = await employeeModel.findByIdAndUpdate(id, modifiedEmployee, { new: true });

        res.json({ message: "UPDATE EMPLOYEE", employeeEdited: result });
    } catch (error) {
        res.status(500).json({ message: "ERROR: UPDATE EMPLOYEE" });
    }
}

const deleteEmployee = async (req, res, next) => {
    const id = req.params.idEmployee;

    try {
        const result = "eliminando empleado BBDD";

        res.json({ message: "DELETE EMPLOYEE", employeeDeleted: result });
    } catch (error) {
        res.status(500).json({ message: "ERROR: DELETE EMPLOYEE" });
    }
}

router.get('/employees', getEmployees);
router.post('/add_employee', addEmployee);
router.put('/edit_employee/:idEmployee', editEmployee);
router.delete('/delete_employee/:idEmployee', deleteEmployee);

module.exports = router;
