import React, {useState, useEffect} from 'react';
import SnapshotsContainer from '../SnapshotContainer';
import VisualContainer from '../VisualContainer';
import {stateSnapshot} from '../../../types/';

interface MainContainerProps {
  // snapshotHistory is an array of stateSnapshots
  snapshotHistory: stateSnapshot[];
  selected: any;
  setSelected: any;
  filter: any;
}

// wraps entire application
const MainContainer: React.FC<MainContainerProps> = ({
  snapshotHistory,
  selected,
  setSelected,
  filter,
}) => {
  // useState hook to update the index of current snapshot rendered in devtool
  const [renderIndex, setRenderIndex] = useState(snapshotHistory.length - 1);

  // useState hook for filtered Array
  const [filterArray, setFilterArray] = useState(['howdy']);

  // useEffect for renderIndex
  useEffect(() => {
    setRenderIndex(snapshotHistory.length - 1);
  }, [snapshotHistory]);
  // render containers passing necessary props
  return (
    <div className="MainContainer">
      <SnapshotsContainer
        // index of current snapshot rendered in devtool
        renderIndex={renderIndex}
        // length of snapshotHistory array
        snapshotHistoryLength={snapshotHistory.length}
        // setState functionality to update renderIndex
        setRenderIndex={setRenderIndex}
        // ! passing through selected
        selected={selected}
        filter={filter}
      />
      <VisualContainer
        //
        filterArray={filterArray}
        //
        setFilterArray={setFilterArray}
        // snapshot at index [renderIndex -1]
        previousSnapshot={snapshotHistory[renderIndex - 1]}
        // snapshot at index [renderIndex]
        currentSnapshot={snapshotHistory[renderIndex]}
        // !passing through snapshotHistory
        snapshotHistory={snapshotHistory}
        // !passing through selections
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};

export default MainContainer;
