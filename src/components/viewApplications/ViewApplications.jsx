import { useLoaderData } from "react-router-dom";

const ViewApplications = () => {
    const applications = useLoaderData()

    const handleUpdateStatus = (e, id) => {
        console.log(id);
        const data = {
            status: e.target.value
        }

        fetch(`http://localhost:5000/job-application/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div>
            <h2 className="text-2xl"> ViewApplications {applications.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            applications.map((app, idx) => <tr className="bg-base-200" key={app._id}>
                                <th>{idx + 1}</th>
                                <td>{app.user_email}</td>
                                <td>Quality Control Specialist</td>
                                <td>
                                    <select
                                        onChange={(e) => handleUpdateStatus(e, app._id)}
                                        defaultValue={app.status || 'chance status'}
                                        className="select select-bordered select-xs w-full max-w-xs">
                                        <option disabled>chance status</option>
                                        <option>Under review</option>
                                        <option>Set interview</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplications;