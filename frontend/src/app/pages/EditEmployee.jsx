import { useDispatch, useSelector } from 'react-redux';
import { editEmployee } from '../features/employees/employeesSlice';

import { useNavigate, useParams } from 'react-router-dom';

// Components
import Layout from '../components/Layout';
import FormEmployee from '../components/FormEmployee';

function EditEmployee() {
    const dispatch = useDispatch();

    const params = useParams();
    const navigate = useNavigate();

    const employeeToEdit = useSelector(state => state.employees.employees.find(e => e.EMPLOYEE_ID === parseInt(params.id)));

    const handleEditEmployee = (data) => {
        dispatch(editEmployee({ ...employeeToEdit, ...data }));
        navigate('/empleados');
    }

    return (
        <Layout
            href='/empleados'
            linkIcon='◀'
            linkText='atras'
            linkTitle='volver a empleados'
            title='editar empleado'
        >
            <FormEmployee employeeData={employeeToEdit} onEdit={handleEditEmployee} />
        </Layout>
    );
}

export default EditEmployee;
