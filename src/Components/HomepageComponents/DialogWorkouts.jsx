import React from 'react';
import Workout_Back_Data from '../../assets/workoutDataBack';
import Workout_Chest_Data from '../../assets/workoutDataChest';
import Workout_Shoulder_Data from '../../assets/workoutDataShoulders';
import Workout_Bicep_Data from '../../assets/workoutDataBiceps';
import Workout_Tricep_Data from '../../assets/workoutDataTricep';
import Workout_Leg_Data from '../../assets/workoutDataLegs';
import Workout_Cardio_Data from '../../assets/workoutDataCardio';

const Dialog = ({ dialogRef, toggleDialog, filterCategory, handleFilterChange, renderWorkoutData }) => {
  return (
    <dialog ref={dialogRef} className='dialogBox'>
      <div className='dialogTop'>
        <h2>Choose an exercise to add!</h2>
        <form className='dialogFilter' action=''>
          <label htmlFor='filter'>Filter by: </label>
          <select className='dialogFilterOptions' name='filter' id='filter' onChange={handleFilterChange}>
            <option value='all'>All</option>
            <option value='chest'>Chest</option>
            <option value='back'>Back</option>
            <option value='shoulders'>Shoulders</option>
            <option value='biceps'>Biceps</option>
            <option value='triceps'>Triceps</option>
            <option value='legs'>Legs</option>
            <option value='cardio'>Cardio</option>
          </select>
        </form>
        <button className='dialogCloseBtn' onClick={() => toggleDialog('dialog1')}>
          Close
        </button>
      </div>

      <div className='dialogOptionsBox'>
        {filterCategory === 'all' || filterCategory === 'chest' ? (
          <>
            <h1>Chest exercises</h1>
            <div className='dialogOptionsBoxChest'>
              {renderWorkoutData(Workout_Chest_Data)}
            </div>
          </>
        ) : null}
        {filterCategory === 'all' || filterCategory === 'back' ? (
          <>
            <h1>Back exercises</h1>
            <div className='dialogOptionsBoxBack'>
              {renderWorkoutData(Workout_Back_Data)}
            </div>
          </>
        ) : null}
        {filterCategory === 'all' || filterCategory === 'shoulders' ? (
          <>
            <h1>Shoulder exercises</h1>
            <div className='dialogOptionsBoxShoulders'>
              {renderWorkoutData(Workout_Shoulder_Data)}
            </div>
          </>
        ) : null}
        {filterCategory === 'all' || filterCategory === 'triceps' ? (
          <>
            <h1>Tricep exercises</h1>
            <div className='dialogOptionsBoxTriceps'>
              {renderWorkoutData(Workout_Tricep_Data)}
            </div>
          </>
        ) : null}
        {filterCategory === 'all' || filterCategory === 'biceps' ? (
          <>
            <h1>Bicep exercises</h1>
            <div className='dialogOptionsBoxBiceps'>
              {renderWorkoutData(Workout_Bicep_Data)}
            </div>
          </>
        ) : null}
        {filterCategory === 'all' || filterCategory === 'legs' ? (
          <>
            <h1>Leg exercises</h1>
            <div className='dialogOptionsBoxLegs'>
              {renderWorkoutData(Workout_Leg_Data)}
            </div>
          </>
        ) : null}
        {filterCategory === 'all' || filterCategory === 'cardio' ? (
          <>
            <h1>Cardio exercises</h1>
            <div className='dialogOptionsBoxCardio'>
              {renderWorkoutData(Workout_Cardio_Data)}
            </div>
          </>
        ) : null}
      </div>
    </dialog>
  );
};

export default Dialog;
