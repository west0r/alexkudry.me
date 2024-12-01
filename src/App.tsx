import React from 'react';
import CardPublicSpeaking from './cards/CardPublicSpeaking';

const App: React.FC = () => {
  return (
    <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
      <CardPublicSpeaking
        variant="desktop"
        label="Master Public Speaking"
        buttonText="Learn More"
        onButtonClick={() => alert('Button clicked!')}
      />
    </div>
  );
};

export default App;