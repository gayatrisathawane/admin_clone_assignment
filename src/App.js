import './App.css';
import Sidebar from './Component/Sidebar/Sidebar';
import Card from './Component/Card/Card';
import PreviewCard from './Component/Preview/PreviewCard';
import CustomerPreview from './Component/CustomerPreview/CustemerPreview';

function App() {
  return (
    <div className="App">
      <div className='d-flex'>
        {/* Sidebar */}
        <Sidebar/>
        
        {/* Content Section */}
        <div className='content'>
          {/* Cards Section */}
          <div className='d-flex mt-5 cards-section ms-3'>
            <Card title="Invoice" button_text="2345667,77" buttonColor="bg-red"/>
            <Card title="Quote" button_text="2345667,77"/>
            <Card title="Payment" button_text="2345667,77"/>
            <Card title="Due Balance" button_text="2345667,77"/>
          </div>
          
          {/* Preview Section */}
          <div className='preview-section'>
            <div className='d-flex justify-content-around'>
              {/* PreviewCard */}
              <PreviewCard/>
              {/* CustomerPreview */}
              <CustomerPreview/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
