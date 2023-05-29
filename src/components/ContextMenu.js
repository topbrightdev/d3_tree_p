function ContextMenu({ xPos, yPos }) {
    return (
      <div
        style={{
          position: 'absolute',
          top: yPos,
          left: xPos,
          backgroundColor: 'white',
          border: '1px solid black',
        }}
      >
        {/* Add menu options or content */}
      </div>
    );
  }