import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import "./DisplayScientist.css";

const DisplayScientist = props => {
  const checkCircle = <FontAwesomeIcon icon={faCheckCircle} />;

  const {name, id, picture, age, country, lifetime, discovery, salary} = props.scientist;
  return (
      <div className="scientist-card">
        <img className="scientist-profile" src={picture} alt="" />
        <table>
          <tbody>
            <tr>
              <th colSpan="2"><h3>{name}</h3></th>
            </tr>
            <tr>
              <th>Age</th>
              <td>: {age}</td>
            </tr>
            <tr>
              <th>Country</th>
              <td>: {country}</td>
            </tr>
            <tr>
              <th>Life Time</th>
              <td>: {lifetime}</td>
            </tr>
            <tr>
              <th><small>Discovery/ Profession</small></th>
              <td>: <small>{discovery}</small></td>
            </tr>
            <tr>
              <th>Salary</th>
              <td>: ${salary}</td>
            </tr>
          </tbody>
        </table>
        {/* <h3>{name}</h3>
        <h3>Age: {age}</h3>
        <h3>From: {country}</h3>
        <h4>LifeTime: {lifetime}</h4>
        <h4><small>Discovery/Profession: </small>{discovery}</h4>
        <h4>Salary: {salary}</h4> */}
        <button onClick={()=> props.selectScientist(id)} className="select-btn">{checkCircle} Select Me</button>
        <div className="social-follow">
          <i class="fab fa-facebook"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-linkedin"></i>
          <i class="fab fa-whatsapp"></i>
        </div>
      </div>
  );
};

export default DisplayScientist;