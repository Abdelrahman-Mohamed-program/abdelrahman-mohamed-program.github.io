import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { FaBook, FaShoppingCart, FaUsers } from "react-icons/fa";
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);
function AdminDashboard () {
    const [stats, setStats] = useState(() => {
        const stored = localStorage.getItem('dashboardStats');
        return stored ? JSON.parse(stored) : { totalBooks: 40, totalUsers: 60, totalOrders: 60 };
      });
    //chart data
    const data = {
        labels: ['Books', 'Users', 'Orders'],
        datasets: [
          {
            label: 'Totals',
            data: [stats.totalBooks, stats.totalUsers, stats.totalOrders],
            backgroundColor: [
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)'
            ],
            borderColor: '#fff',
            borderWidth: 2
          }
        ]
      };
      
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      };

    const booksRef = useRef();
    const usersRef = useRef();
    const ordersRef = useRef();
    const{user}=useContext(AuthContext)
    const [maintenance,setMaintenance]=useState(false)
    const [color,setColor]=useState("primary")
    

    // saves the state change in local sotarge
    useEffect(() => {
        localStorage.setItem('dashboardStats', JSON.stringify(stats));
      }, [stats]);

      //update the Maintenance UI
   const changeMaintenance=()=>{
        maintenance?setMaintenance(false):setMaintenance(true)

        maintenance?setColor("primary"):setColor("danger")
    }
    return (<>
<header className="text-center bg-dark text-white my-3 fs-1 py-2">
    Welocme admin Mr.{user.username}
    <br />
    <button className= {`btn btn-${color}`}  onClick={changeMaintenance}>Maintenance Mode : {maintenance?"ON":"OFF"} </button>
</header> 

<div className="container" style={{ paddingBottom: '80px' }}>
<div className="row justify-content-center">
  <div className="col-12 col-sm-6 col-lg-4">
    <div className="card p-4 my-3 shadow-sm mx-2">
      <h1 className="text-center fs-2 mb-3 bg-secondary text-white py-1">
      <FaBook size={40} className="mb-2" /> Total books: {stats.totalBooks}
      </h1>
      {maintenance &&  
      <div className="input-group mt-3">
      <input 
        ref={booksRef}
        type="number"
        className="form-control"
        placeholder="Enter new count"
        aria-label="New count"
      />
      <button type="submit" className="btn btn-primary d-block mx-auto" onClick={()=>{setStats({...stats,totalBooks:booksRef.current.value})}} style={{ width: "5rem" }}>
          Update
        </button>
    </div>
      }
    </div>
  </div>

  <div className="col-12 col-sm-6 col-lg-4">
    <div className="card p-4 my-3 shadow-sm mx-2">
      <h1 className="text-center fs-2 mb-3 bg-secondary text-white py-1">
      <FaUsers size={40} className="mb-2" />  Total users: {stats.totalUsers}
      </h1>
      {maintenance &&  
      <div className="input-group mt-3">
      <input
       ref={usersRef}
        type="number"
        className="form-control"
        placeholder="Enter new count"
        aria-label="New count"
      />
      <button type="submit" className="btn btn-primary d-block mx-auto" onClick={()=>{setStats({...stats,totalUsers:usersRef.current.value})}} style={{ width: "5rem" }}>
          Update
        </button>
    </div>
      }
    </div>
  </div>

  <div className="col-12 col-sm-6 col-lg-4">
    <div className="card p-4 my-3 shadow-sm mx-2">
      <h1 className="text-center fs-2 mb-3 bg-secondary text-white py-1">
      <FaShoppingCart size={40} className="mb-2" /> Total orders: {stats.totalOrders}
      </h1>
      {maintenance &&  
      <div className="input-group mt-3">
      <input
        ref={ordersRef}
        type="number"
        className="form-control"
        placeholder="Enter new count"
        aria-label="New count"
      />
      <button type="submit" className="btn btn-primary d-block mx-auto" onClick={()=>{setStats({...stats,totalOrders:ordersRef.current.value})}} style={{ width: "5rem" }}>
        Update
        </button>
    </div>
      }
    </div>
  </div>
</div>

{/* chart */}
<div className="card p-4 shadow-sm text-center mb-6" style={{maxHeight:"500px"}}>
  <h5 className="mb-3">Summary Overview</h5>
  <div style={{ maxWidth: '300px', margin: '0 auto'}}>
    <Doughnut data={data} options={options} />
  </div>
</div>
</div>
    </> );
}

export default AdminDashboard;