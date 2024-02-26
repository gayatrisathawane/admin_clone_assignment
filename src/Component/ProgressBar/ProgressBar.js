const ProgressBar = ({width,text,progresswidth,bgcolor})=>{
    return(
        <div>
            <div className="">
                <div className="d-flex justify-content-between">
                    <p className="fw-bold">{text}</p>
                    <p>{progresswidth}%</p>
                </div>
                <div class="progress mb-2">
                    <div   className={`progress-bar ${bgcolor}`} role="progressbar" aria-label="Success example" style={{ width: `${width}%` }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="0"></div>
                </div>
            </div>

        </div>
    )
}

export default ProgressBar