import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8070/api/employees";

class EmployeeService{

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

}

export default new EmployeeService()
