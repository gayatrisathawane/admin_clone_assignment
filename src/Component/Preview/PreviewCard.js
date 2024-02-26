import ProgressBar from "../ProgressBar/ProgressBar"
import "./Previewcard.css"
const PreviewCard = ({ text }) => {
    return (

        <div className="d-flex justify-content-around shadow-lg prewiew-container">

            <div className="w-25 mt-2">
                <h5 className="text-heading p-4">Invoices Preview</h5>
                <ProgressBar width="17" text="Draft" progresswidth="17" bgcolor="bg-dark" />
                <ProgressBar width="17" text="Pending" progresswidth="17" />
                <ProgressBar width="67" text="Unpaid" progresswidth="80" bgcolor="bg-warning" />
                <ProgressBar width="17" text="Overdue" progresswidth="6" bgcolor="bg-danger" />
                <ProgressBar width="17" text="Partially" progresswidth="6" bgcolor="bg-success" />
                <ProgressBar width="28" text="Paid" progresswidth="28" bgcolor="bg-success" />
            </div>

            <div className="w-25 mt-2 ">
                <h5 className="text-heading p-4">Quotes Preview</h5>
                <ProgressBar width="17" text="Draft" progresswidth="17" bgcolor="bg-dark" />
                <ProgressBar width="17" text="Pending" progresswidth="17" />
                <ProgressBar width="67" text="Sent" progresswidth="67" bgcolor="bg-warning" />
                <ProgressBar width="0" text="Declained" progresswidth="0" bgcolor="bg-light" />
                <ProgressBar width="0" text="Accepted" progresswidth="0" bgcolor="bg-light" />
                <ProgressBar width="0" text="Expired" progresswidth="0" bgcolor="bg-light" /></div>

            <div className="w-25 mt-2 ">
                <h5 className="text-heading p-4">Offer Preview</h5>
                <ProgressBar width="50" text="Draft" progresswidth="50" bgcolor="bg-dark" />
                <ProgressBar width="17" text="Pending" progresswidth="17" />
                <ProgressBar width="0" text="Sent" progresswidth="0" bgcolor="bg-light" />
                <ProgressBar width="0" text="Declained" progresswidth="0" bgcolor="bg-light" />
                <ProgressBar width="33" text="Accepted" progresswidth="33" bgcolor="bg-success" />
                <ProgressBar width="0" text="Expired" progresswidth="0" bgcolor="bg-light" />
            </div>

        </div>



    )
}
export default PreviewCard