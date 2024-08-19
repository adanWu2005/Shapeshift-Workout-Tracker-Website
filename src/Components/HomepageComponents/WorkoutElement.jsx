import React from 'react';

const WorkoutElement = ({ workout, index, toggleComplete, handleAddSet, handleMinusSet, deleteWorkout }) => {
  return (
    <div className='container'>
      <li className='workout'>
        <p className='workoutName'>{workout.name}</p>
        <div className="completeContainer">
          <p className='completeText'>Completed:</p>
          <button
            onClick={() => toggleComplete(index)}
            className={`workoutCompleted ${workout.completed ? 'completed' : ''}`}
          ></button>                      
        </div>

        {
          workout.name === "Treadmill" || workout.name === "Stationary bike"
          || workout.name === "Stairmaster" || workout.name === "Rowing machine"
          ?
          <div className="cardioContainer">
            <form className='cardioSort' action=''>
              <label className='cardioLabel' htmlFor='sort'>Time: </label>
              <select className='cardioOptions' name='sort' id='sort'>
                <option> 0-30 min </option>
                <option>30-40 min</option>
                <option >40-60 min</option>
                <option>1-2 hrs</option>
                <option>2+ hrs</option>
              </select>
            </form>                       
          </div>
          :
          <>
            <div className="setsContainer">
            <p className='setsText'>Sets: </p>
              <button onClick={() => handleMinusSet(index)} className='minus'>
                <span className='material-symbols-outlined'>remove</span>
              </button>
              <p className='sets'>{workout.sets}</p>
              <button onClick={() => handleAddSet(index)} className='plus'>
                <span className='material-symbols-outlined'>add</span>
              </button>                                
            </div>
          </>
        }

        <button onClick={() => deleteWorkout(index)} className='deleteBtn'>
          <span className='material-symbols-outlined'>delete</span>
        </button>
      </li>
    </div>
  );
};

export default WorkoutElement;
