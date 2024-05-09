import React, { useRef, useEffect, useState } from 'react';
import { draggable, dropTargetForElements, monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import './Table.css'

function DraggableTableItem({ children }) {
  const ref = useRef(null);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const el = ref.current;
    return draggable({
      element: el,
      onDragStart: () => setDragging(true),
      onDrop: () => setDragging(false),
    });
  }, []);

  return (
    <div
      ref={ref}
      style={{ opacity: dragging? 0.5 : 1 }}
    >
      {children}
    </div>
  );
}

function DropTarget({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    return dropTargetForElements({
      element: el,
    });
  }, []);

  return <div ref={ref}>{children}</div>;
}

function Table() {
  const [items, setItems] = useState(['CS 123', 'COMS 101', 'Calc 1']);
  const [dropIndex, setDropIndex] = useState(-1); // Track the index where the item should be dropped

  useEffect(() => {
    return monitorForElements({
      onDrop: ({ source, location }) => {
        console.log('Dropped item:', source.data.item);
        // Calculate the new order based on the drop location
        const newIndex = Math.floor(location.y / 50); // Adjust the divisor as needed based on your item height
        if (newIndex >= 0 && newIndex < items.length) {
          setDropIndex(newIndex);
        }
      },
    });
  }, [items]);

  useEffect(() => {
    if (dropIndex!== -1) {
      // Update the items array to reflect the new order
      const newItems = [...items];
      const droppedItem = newItems.splice(dropIndex, 1)[0]; // Remove the dropped item
      newItems.splice(dropIndex, 0, droppedItem); // Insert the dropped item at the new position
      setItems(newItems);
      setDropIndex(-1); // Reset the drop index
    }
  }, [dropIndex]);

  return (
    <div className='table'>
      {items.map((item, index) => (
        <DraggableTableItem key={index}>
          {item}
        </DraggableTableItem>
      ))}
      <DropTarget>
        {/* Drop target content */}
      </DropTarget>
    </div>
  );
}

export default Table;
