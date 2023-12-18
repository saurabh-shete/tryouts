import React from 'react'
import SpeechRecognition, {
  useSpeechRecognition
} from 'react-speech-recognition'

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition()

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>
  }

  return (
    <div style={styles.container}>
      <p style={styles.transcript}>{transcript}</p>
      <p style={styles.microphoneStatus}>
        Microphone: {listening ? 'on' : 'off'}
      </p>
      <div style={styles.buttonContainer}>
        <button
          style={styles.button}
          onClick={() => {
            SpeechRecognition.startListening({ continuous: true })
          }}
        >
          Start
        </button>
        <button style={styles.button} onClick={SpeechRecognition.stopListening}>
          Stop
        </button>
        <button style={styles.button} onClick={resetTranscript}>
          Reset
        </button>
      </div>
    </div>
  )
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center'
  },
  transcript: {
    fontSize: '16px',
    marginBottom: '10px'
  },
  microphoneStatus: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '20px'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px'
  },
  button: {
    padding: '10px',
    fontSize: '14px',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px'
  }
}

export default Dictaphone
