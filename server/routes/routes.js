import { Router } from 'express';
import { insert_employee_details ,fetch_employee_details,fetch_employee_details_with_id} from '../controllers/employeecontroller.js';

const router = Router();

router.post('/add_employee', insert_employee_details);
router.get('/fetch_employees', fetch_employee_details);
router.post('/fetch_employee_details_with_id', fetch_employee_details_with_id);

export default router;
