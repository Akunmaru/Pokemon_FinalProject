import DataTable from '../components/DataTable'
import Background from "../static/images/magikarp.jpg"

function Dashboard() {
  return (
    <div>
      <DataTable />
      <div style={{ backgroundImage: `url(${Background})`}}
      className="flex flex-row justify-center mx-auto bg-cover bg-fixed">
        <div className="flex place-items-center h-screen">
        </div>
      </div>
    </div>
  )
}

export default Dashboard