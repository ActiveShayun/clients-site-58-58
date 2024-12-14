import { useParams } from "react-router-dom";
import useContextHooks from "../../hooks/Hooks";


const JobApply = () => {
    const { id } = useParams()
    const { user } = useContextHooks()
    console.log(user);

    const submitJobApply = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const gitHup = form.get('gitHup')
        const linkDin = form.get('linkDin')
        const resume = form.get('resume')

        console.log({ gitHup, linkDin, resume });
        const applyJobs = {
            job_id: id,
            user_email: user.email,
            gitHup,
            linkDin,
            resume
        }

        fetch('http://localhost:5000/job-application', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(applyJobs)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Apply submit successful')
                }
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card bg-base-100 lg:w-[500px]  shadow-2xl p-4">
                    <h1 className="text-5xl font-bold text-center">Job Apply</h1>
                    <form onSubmit={submitJobApply} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Linkdin</span>
                            </label>
                            <input type="url" name="linkDin" placeholder="linkdin url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Githup</span>
                            </label>
                            <input type="url" name="gitHup" placeholder="githup url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Resume</span>
                            </label>
                            <input type="url" name="resume" placeholder="resume url" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JobApply;