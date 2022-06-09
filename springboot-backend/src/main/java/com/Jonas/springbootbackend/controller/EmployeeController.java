package com.Jonas.springbootbackend.controller;

import com.Jonas.springbootbackend.model.Employee;
import com.Jonas.springbootbackend.repository.EmployeeRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    // get all employees
    @GetMapping("/employees")
    public List< Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }
}
