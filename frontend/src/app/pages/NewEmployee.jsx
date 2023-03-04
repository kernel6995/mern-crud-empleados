import { useDispatch } from 'react-redux';
import { addEmployee } from '../features/employees/employeesSlice';

import { useNavigate } from 'react-router-dom';

// Components
import Layout from '../components/Layout';
import FormEmployee from '../components/FormEmployee';

function NewEmployee() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddEmployee = (data) => {
        dispatch(addEmployee(data));
        navigate('/empleados');
    }

    return (
        <Layout
            href='/empleados'
            linkIcon='◀'
            linkText='atras'
            linkTitle='volver a empleados'
            title='nuevo empleado'
        >
            <FormEmployee onCreate={handleAddEmployee} />
        </Layout>
    );
}

export default NewEmployee;
