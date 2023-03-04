import { useDispatch, useSelector } from 'react-redux';
import { deleteEmployee } from '../features/employees/employeesSlice';
import { useParams, useNavigate } from 'react-router-dom';

// Components
import Layout from '../components/Layout';
import Button from '../components/Button';
import ButtonLink from '../components/ButtonLink';

function InfoEmployee() {
    const dispatch = useDispatch();

    const params = useParams();
    const navigate = useNavigate();

    const employee = useSelector(
        state => state.employees.employees.find(e => e.EMPLOYEE_ID === parseInt(params.id))
    );

    const handleDeleteEmployee = (id) => {
        dispatch(deleteEmployee(id));
        navigate('/empleados');
    }

    return (
        <Layout
            href='/empleados'
            linkIcon='◀'
            linkText='atras'
            linkTitle='volver a empleados'
            title='informacion del empleado'
        >
            <ul>
                <li className='flex justify-between'>
                    <span>Nombre:</span>
                    <span>{employee.LAST_NAME + ' ' + employee.FIRST_NAME}</span>
                </li>
                <li className='flex justify-between'>
                    <span>Email:</span>
                    <span>{employee.EMAIL}</span>
                </li>
                <li className='flex justify-between'>
                    <span>Numbero telefonico</span>
                    <span>{employee.PHONE_NUMBER || 'no definido'}</span>
                </li>
                <li className='flex justify-between'>
                    <span>Fecha de contrato</span>
                    <span>{employee.HIRE_DATE || 'no definido'}</span>
                </li>
                <li className='flex justify-between'>
                    <span>Salario</span>
                    <span>{employee.SALARY || 'no definido'}</span>
                </li>
                <li className='flex justify-between'>
                    <span>Comision</span>
                    <span>{employee.COMMISSION_PCT || 'no definido'}</span>
                </li>
            </ul>

            <div className="flex gap-2 justify-end">
                <ButtonLink
                    href={`/editar_empleado/${employee.EMPLOYEE_ID}`}
                    icon='🖍'
                >
                    editar
                </ButtonLink>

                <Button
                    icon='🗑'
                    onClick={() => handleDeleteEmployee(employee.EMPLOYEE_ID)}
                    title='eliminar'
                >
                    eliminar
                </Button>
            </div>
        </Layout>
    );
}

export default InfoEmployee;
