import { useNavigate } from "react-router-dom";
import makeRequest from "../../utils";
import { useEffect, useState } from "react";

export function BatchDashboord() {
  const [batchDetail, setBatchDetail] = useState([]);

  const Navigate = useNavigate()

  const url = "http://localhost:8000/userbatch";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await makeRequest(url, 'get');
        setBatchDetail(response);
      } catch (error) {
        console.log(`Trouble fetching data: ${error}`);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Batch Dashboard</h2>
        <button className="btn btn-primary" onClick={ () => Navigate('/AddBatch')} >Add New Batch</button>
      </div>
      <div className="row justify-content-center">
        {batchDetail.map((batch, index) => (
          <div className="col-md-6" key={index}>
            <div className="card text-center shadow-sm">
              <div className="card-header bg-primary text-white">
                Batch #{batch.id}
              </div>
              <div className="card-body">
                <h5 className="card-title">{batch.batchname}</h5>
                <p className="card-text">
                  This batch is scheduled for processing on {batch.batchTime}. Click below for more details or to edit.
                </p>
                <div className="d-flex justify-content-around">
                  <button className="btn btn-info">View</button>
                  <button className="btn btn-warning">Edit</button>
                </div>
              </div>
              <div className="card-footer text-muted">
                Last updated {batch.startDate} days ago
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
