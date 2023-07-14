import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const Batch = ({ batchId }) => {
  return (
    <div>
      <h5>Batch {batchId} Component</h5>
     <B1/>
     <B2/>
     <B3/>
    </div>
  );
};

const App = () => {
  const [selectedCourse, setSelectedCourse] = useState('FSD');
  const [showBatch1, setShowBatch1] = useState(false);
  const [showBatch2, setShowBatch2] = useState(false);
  const [showBatch3, setShowBatch3] = useState(false);

  const handleCourseChange = (event) => {
    setSelectedCourse(event);
  };

  const handleBatch1Click = () => {
    setShowBatch1(!showBatch1);
  };

  const handleBatch2Click = () => {
    setShowBatch2(!showBatch2);
  };

  const handleBatch3Click = () => {
    setShowBatch3(!showBatch3);
  };

  return (
    <div className="row">
      <div className="col-md-3">
        <DropdownButton
          id="dropdown-basic-button"
          title="Select Course"
          onSelect={handleCourseChange}
        >
          <Dropdown.Item eventKey="FSD">FSD</Dropdown.Item>
          <Dropdown.Item eventKey="DS">DS</Dropdown.Item>
          <Dropdown.Item eventKey="AWS">AWS</Dropdown.Item>
        </DropdownButton>
      </div>

      <div className="col-md-9">
        <div
          className="card rounded-0 shadow-sm"
          style={{
            width: '200px',
            background: '#ffa500',
            backgroundImage: 'linear-gradient(to right, #ffa500, #ff6347)',
          }}
          onClick={handleBatch1Click}
        >
          <div className="card-body p-3">
            <h5 className="card-title" id="batch1">
              batch-1
            </h5>
            <p className="card-text">This is the first {selectedCourse} batch.</p>
          </div>
        </div>

        {showBatch1 && <Batch batchId={1} />}

        <div
          className="card rounded-0 shadow-sm"
          style={{
            width: '200px',
            background: '#ffa500',
            backgroundImage: 'linear-gradient(to right, #ffa500, #ff6347)',
          }}
          onClick={handleBatch2Click}
        >
          <div className="card-body p-3">
            <h5 className="card-title" id="batch2">
              batch-2
            </h5>
            <p className="card-text">This is {selectedCourse} batch-2.</p>
          </div>
        </div>

        {showBatch2 && <Batch batchId={2} />}

        <div
          className="card rounded-0 shadow-sm"
          style={{
            width: '200px',
            background: '#ffa500',
            backgroundImage: 'linear-gradient(to right, #ffa500, #ff6347)',
          }}
          onClick={handleBatch3Click}
        >
          <div className="card-body p-3">
            <h5 className="card-title" id="batch3">
              batch-3
            </h5>
            <p className="card-text">This is {selectedCourse} batch-3.</p>
          </div>
        </div>

        {showBatch3 && <Batch batchId={3} />}
      </div>
    </div>
  );
};

export default App;
