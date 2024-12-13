import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import './alumni-table.css';
import './people.css';

const AlumniTable = ({ alumni }) => {
  const renderCurrentPositionLinks = (currentPosition) => {
    if (!currentPosition || currentPosition.length === 0) {
      return <span>No Current Position Information Available</span>;
    }

    return currentPosition.map((position, index) => {
      const { description, linkText, linkUrl } = position || {};

      return (
        <React.Fragment key={index}>
          {description && <span>{description}</span>}
          {linkUrl && (
            <>
              {' '}
              <a href={linkUrl} target="_blank" rel="noopener noreferrer">
                {linkText || linkUrl}
              </a>
            </>
          )}
          {index < currentPosition.length - 1 && <span>, </span>}
        </React.Fragment>
      );
    });
  };

  const safeValue = (value, fallback) => {
    return typeof value === 'string' && value.trim() ? value : fallback;
  };

  return (
    <div className="alumni-header">
      <section>
        <header>
          <h1>
            <FontAwesomeIcon icon={faUsers} /> Alumni Directory
          </h1>
          {/* <p>A comprehensive list of our distinguished graduates</p> Uncomment when we have alumni*/}
          <p>No alumni yet, check back later</p> {/* Remove Once we have alumni*/}
        </header>
      

        <table className="alumni-table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Graduation Year</th>
              <th scope="col">Publications</th>
              <th scope="col">Current Position</th>
            </tr>
          </thead>
          <tbody>
            {alumni.length > 0 ? (
              alumni.map((alumnus, index) => {
                const {
                  name = 'No Name Provided',
                  graduationYear = 'N/A',
                  publications = 'N/A',
                  currentPosition = [],
                } = alumnus || {};

                return (
                  <tr key={index}>
                    <td>{safeValue(name, 'No Name Provided')}</td>
                    <td>{safeValue(graduationYear, 'N/A')}</td>
                    <td>{safeValue(publications, 'N/A')}</td>
                    <td>{renderCurrentPositionLinks(currentPosition)}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="4">No Alumni Data Available</td>
              </tr>
            )}
          </tbody>
        </table>
        </section>
    </div>
  );
};

export default AlumniTable;
