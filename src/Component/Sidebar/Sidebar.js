import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faHeadphones, faFileContract, faCreditCard, faFileCirclePlus, faUsers, faGear, faGaugeHigh, faUser } from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
  return (



    <div className="sidebar-container   mt-3 ms-3 shadow-lg rounded">

      <div className="d-flex mt-2">

        <img src="https://png.pngtree.com/png-clipart/20210309/original/pngtree-triangle-logo-template-png-image_5850039.jpg" height="60px" className="mt- ms-3" alt="sidebar" />
        
        <div>
        <span className=" ms-2 fw-bold fs-5">iDURAR</span>
        <p className="text-info ms-2 fs-5">CRM/ERP</p>
        </div>
       
      </div>

      <div className="p-3 ms-3">
        <FontAwesomeIcon icon={faGaugeHigh} /> <span className="fw-bold ms-2">Dashboard</span>
      </div>
      <div className="p-3 ms-3">
        <FontAwesomeIcon icon={faUser} /> <span className="fw-bold">Lead</span>
      </div>
      <div className="p-3 ms-3">
        <FontAwesomeIcon icon={faFile} /> <span className="fw-bold">Offer</span>
      </div>
      <div className="p-3 ms-3">
        <FontAwesomeIcon icon={faHeadphones} /> <span className="fw-bold">Customer</span>
      </div>
      <div className="p-3 ms-3">
        <FontAwesomeIcon icon={faFileContract} /> <span className="fw-bold">Invoice</span>
      </div>
      <div className="p-3 ms-3">
        <FontAwesomeIcon icon={faFileCirclePlus} /> <span className="fw-bold">Quote</span>
      </div>
      <div className="p-3 ms-3">
        <FontAwesomeIcon icon={faCreditCard} /> <span className="fw-bold">Payment</span>
      </div>
      <div className="p-3 ms-3">
        <FontAwesomeIcon icon={faUser} /> <span className="fw-bold">Employee</span>
      </div>
      <div className="p-3 ms-3">
        <FontAwesomeIcon icon={faUsers} /> <span className="fw-bold">Admin</span>
      </div>
      <div className="p-3 ms-3">
        <FontAwesomeIcon icon={faGear} /> < span className="fw-bold">Setting</span>
      </div>
    </div>

  );
};
export default Sidebar;
