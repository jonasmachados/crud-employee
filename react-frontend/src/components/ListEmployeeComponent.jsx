import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';


class ListEmployeeComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);

    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data });
        });
    }

    addEmployee() {
        this.props.history.push('/add-employee');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>

                <Link to="/add-employee">
                        <button className="btn btn-primary">Add Employee</button>
                    </Link>
                <br></br>

                <div className="row">
                    <table className=" table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.emailId}</td>
                                        </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;