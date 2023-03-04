import { useSelector } from 'react-redux';

// Components
import Button from '../components/Button';
import Card from '../components/Card';
import Layout from '../components/Layout';

function Employees() {
  const employeesState = useSelector(state => state.employees.employees);

  return (
    <Layout
      className='flex flex-col gap-4'
      href='/nuevo_empleado'
      linkIcon='➕'
      linkText='nuevo'
      linkTitle='nuevo empleado'
      title='lista de empleados'
    >
      {
        employeesState.length > 0 ?
          <div className='grid grid-cols-3 grid-rows-2 gap-1'>
            {
              employeesState.map((employee, index) =>
                <Card
                  href={`/info_empleado/${employee.EMPLOYEE_ID}`}
                  key={index}
                  title={employee.LAST_NAME + ', ' + employee.FIRST_NAME}
                />
              )
            }
          </div> :
          <div>
            <p className='text-center text-5xl'>no tienes empleados 😢</p>
          </div>
      }

      <div className='flex items-center justify-between'>
        <div className='flex gap-2'>
          <Button title='pagina anterior' icon='◀'>
            pagina anterior
          </Button>

          <Button title='siguiente pagina' icon='▶'>
            siguiente pagina
          </Button>
        </div>

        <p>pagina 0/0</p>

        <p>total de empleados {employeesState.length}</p>
      </div>
    </Layout>
  );
}

export default Employees;
