import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8070/api/employees";

class EmployeeService{

    getAllEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employeeId, employee){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' +employeeId, employee);
    }

}

export default new EmployeeService()
