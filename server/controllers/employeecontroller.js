import connection from '../config/db.js';

export async function insert_employee_details(req, res) {
    const data = req.body;
    const query = `
        INSERT INTO cb_in_employee 
        (employee_name, phone_number, email_id, designation, role, salary, 
         address_street, address_locality, address_state, address_city, 
         address_district, address_pincode, degree, passed_out_year, pan, 
         account_number, ifsc_code, bank_branch, bank_name)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    
    const values = [
        data.name, 
        data.phoneNumber, 
        data.mailId, 
        data.designation, 
        data.role, 
        data.salary, 
        data.street, 
        data.locality, 
        data.state, 
        data.city, 
        data.district, 
        data.pincode, 
        data.degree, 
        data.passedOutYear, 
        data.pan, 
        data.accountNumber, 
        data.ifscCode, 
        data.bankBranch, 
        data.bankName
    ];

    try {
        const [result] = await connection.execute(query, values);
        res.status(201).json({ message: 'Employee details inserted successfully', employeeId: result.insertId });
    } catch (error) {
        console.error('Error inserting employee details:', error);
        res.status(500).json({ error: 'An error occurred while inserting employee details' });
    }
}

export async function fetch_employee_details(req, res) {
    try {
        const [rows, fields] = await connection.query(
            'SELECT id, employee_name, phone_number, email_id, designation, salary , status FROM cb_in_employee'
        );
        res.json(rows);
    } catch (error) {
        console.error('Error retrieving employee details:', error);
        res.status(500).json({ error: 'An error occurred while retrieving employee details' });
    }
}

export async function fetch_employee_details_with_id(req, res) {
    const employee_id = req.body.employee_id;
    try {
        const [rows, fields] = await connection.query(
            'SELECT * FROM cb_in_employee WHERE id = ' + employee_id
        );
        res.json(rows);
    } catch (error) {
        console.error('Error retrieving employee details:', error);
        res.status(500).json({ error: 'An error occurred while retrieving employee details' });
    }
}

