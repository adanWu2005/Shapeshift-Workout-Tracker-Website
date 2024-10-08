import React, { useState, useRef, useEffect } from 'react';
import './Homepage.css';
import NavbarHome from '../HomepageComponents/NavbarHome';
import BarLoader from "react-spinners/BarLoader";
import WorkoutElement from '../HomepageComponents/WorkoutElement';
import Dialog from '../HomepageComponents/DialogWorkouts';

const Homepage = () => {
  const [workouts, setWorkouts] = useState([]);
  const [exc, setExcCount] = useState(0);
  const [sortOrder, setSortOrder] = useState('earliest');
  const [filterCategory, setFilterCategory] = useState('all'); 
  const [loading, setLoading] = useState(false)

  const toggleComplete = (index) => {
    setWorkouts(p =>
      p.map((workout, i) =>
        i === index ? { ...workout, completed: !workout.completed } : workout
      )
    );
  };

  const handleSortChange = (event) => {
    const newSortOrder = event.target.value;
    let sortedWorkouts = [...workouts];

    if (newSortOrder === 'earliest') {
      sortedWorkouts = sortedWorkouts.sort((a, b) => a.timestamp - b.timestamp);
    } else if (newSortOrder === 'latest') {
      sortedWorkouts = sortedWorkouts.sort((a, b) => b.timestamp - a.timestamp);
    } else if (newSortOrder === 'completed') {
      sortedWorkouts = sortedWorkouts.sort((a, b) => b.completed - a.completed);
    } else if (newSortOrder === 'incomplete') {
      sortedWorkouts = sortedWorkouts.sort((a, b) => a.completed - b.completed);
    }

    setWorkouts(sortedWorkouts);
    setSortOrder(newSortOrder);
  };

  const clearWorkout = () => {
    setExcCount(exc - workouts.length);
    setWorkouts([]);
    toggleDialog('dialog2');
  };

  const deleteWorkout = (index) => {
    const updatedWorkouts = workouts.filter((_, i) => i !== index);
    setWorkouts(updatedWorkouts);
    setExcCount(exc - 1);
  };

  const handleSubmit = (workoutName) => {
    const workoutExists = workouts.some(workout => workout.name === workoutName);

    if (workoutExists) {
      alert("You have already selected this workout.");
      return;
    }
    setWorkouts(p => [
      ...p,
      { name: workoutName, sets: 0, completed: false, timestamp: Date.now() }
    ]);
    setExcCount(exc + 1);
    toggleDialog('dialog1');
  };

  const handleAddSet = (index) => {
    setWorkouts(p =>
      p.map((workout, i) => (i === index ? { ...workout, sets: workout.sets + 1 } : workout))
    );
  };

  const handleMinusSet = (index) => {
    setWorkouts(p =>
      p.map((workout, i) => (i === index && workout.sets > 0 ? { ...workout, sets: workout.sets - 1 } : workout))
    );
  };

  const dialogRefs = {
    dialog1: useRef(null),
    dialog2: useRef(null),
  };

  const toggleDialog = (dialogName) => {
    const dialogRef = dialogRefs[dialogName].current;
    if (!dialogRef) {
      return;
    }
    dialogRef.hasAttribute('open') ? dialogRef.close() : dialogRef.showModal();
  };

  const handleFilterChange = (event) => {
    setFilterCategory(event.target.value);
  };

  const renderWorkoutData = (data) => {
    return data.map((work, index) => (
      <li key={index}>
        <img onClick={() => handleSubmit(work.name)} src={work.img} alt={work.name} />
        <p>{work.name}</p>
      </li>
    ));
  };

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000)
  }, [])

  return (
    <>
      {
        loading ?      
      
        <div className="loading">
          <BarLoader 
          height={10}
          speedMultiplier={1.5}
          width={500}
          loading = {loading}
          color='white'
        />        
        </div>
      : 
        <div className="app">
          <NavbarHome/>
          <div className='home'>
            
          <div className='homeTitle'>
            <h1>ShapeShift</h1>
          </div>
          <div className='todoBox'>
            <div className='defaultOptions'>
              <p className='exerciseCount'>Exercise Count: {exc}</p>
              <button onClick={() => toggleDialog('dialog1')} className='exerciseAdd'>
                Add Exercise
              </button>
              <button onClick={() => toggleDialog('dialog2')} className='exerciseClear'>
                Clear
              </button>
              <form className='exerciseSort' action=''>
                <label htmlFor='sort'>Sort by: </label>
                <select onChange={handleSortChange} className='sortOptions' name='sort' id='sort'>
                  <option value='earliest'>Earliest</option>
                  <option value='latest'>Latest</option>
                  <option value='completed'>Completed</option>
                  <option value='incomplete'>Not Completed</option>
                </select>
              </form>
            </div>
          
            <ol className='workouts'>
              {workouts.map((workout, index) => (
                <WorkoutElement 
                  key={index}
                  workout={workout}
                  index={index}
                  toggleComplete={toggleComplete}
                  handleAddSet={handleAddSet}
                  handleMinusSet={handleMinusSet}
                  deleteWorkout={deleteWorkout}
                />
              ))}
            </ol>
          </div>

          <Dialog 
            dialogRef={dialogRefs.dialog1}
            toggleDialog={toggleDialog}
            filterCategory={filterCategory}
            handleFilterChange={handleFilterChange}
            renderWorkoutData={renderWorkoutData}
          />

          <dialog ref={dialogRefs.dialog2} className='dialogClear'>
            <h2>Are you sure you want to clear all exercises?</h2>
            <div className='clearOptions'>
              <button onClick={clearWorkout} className='clearOptionYes'>
                Yes
              </button>
              <button onClick={() => toggleDialog('dialog2')} className='clearOptionNo'>
                No
              </button>
            </div>
          </dialog>
        </div>
      </div>
      }
    </>
  );
};

export default Homepage;
