import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const App = () => {
  const [selectedCourse, setSelectedCourse] = useState('FSD');

  const handleCourseChange = (event) => {
    setSelectedCourse(event);
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
        <div className="d-flex justify-content-between mb-4">
          <div
            className="card rounded-0 shadow-sm"
            style={{
              width: '200px',
              background: '#ffa500',
              backgroundImage: 'linear-gradient(to right, #ffa500, #ff6347)',
            }}
          >
            <div className="card-body p-3">
              <h5 className="card-title" id="batch1">
                batch-1
              </h5>
              <p className="card-text">This is the first {selectedCourse} batch.</p>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between mb-4">
          <div
            className="card rounded-0 shadow-sm"
            style={{
              width: '200px',
              background: '#ffa500',
              backgroundImage: 'linear-gradient(to right, #ffa500, #ff6347)',
            }}
          >
            <div className="card-body p-3">
              <h5 className="card-title" id="batch2">
                batch-2
              </h5>
              <p className="card-text">This is {selectedCourse} batch-2.</p>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between mb-4">
          <div
            className="card rounded-0 shadow-sm"
            style={{
              width: '200px',
              background: '#ffa500',
              backgroundImage: 'linear-gradient(to right, #ffa500, #ff6347)',
            }}
          >
            <div className="card-body p-3">
              <h5 className="card-title" id="batch3">
                batch-3
              </h5>
              <p className="card-text">This is {selectedCourse} batch-3.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
