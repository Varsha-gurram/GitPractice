import { Button } from '@mui/material';
import React from 'react';
function BodyLayout({ hackathons = [] }) {
  const containerStyle = {
    padding: 8,
    flexGrow: 1,
  };

  const listStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  };

  const cardStyle = {
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#fff',
  };

  const flexRowResponsive = {
    display: 'flex',
    flexDirection: window.innerWidth < 600 ? 'column' : 'row',
    justifyContent: 'space-between',
  };

  const leftBoxStyle = {
    flex: 1,
    backgroundColor: '#f0f8ff',
    borderRadius: 6,
    padding: 8,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  };

  const titleStyle = {
    fontWeight: 'bold',
    fontSize: 14,
  };

  const subtitleStyle = {
    fontSize: 12,
    color: '#666',
  };

  const iconTextRow = {
    display: 'flex',
    gap: 8,
    marginTop: 4,
    fontSize: 12,
    alignItems: 'center',
  };

  const deadlineTextStyle = {
    color: 'red',
    fontWeight: 500,
    fontSize: 12,
    marginTop: 4,
  };

  const dividerStyle = {
    width: 1,
    backgroundColor: '#ccc',
    margin: '0 8px',
    display: window.innerWidth < 600 ? 'none' : 'block',
  };

  const rightBoxStyle = {
    flex: 1,
    marginTop: window.innerWidth < 600 ? 8 : 0,
    fontSize: 12,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  };

  const chipBaseStyle = {
    borderRadius: 12,
    padding: '2px 8px',
    width: 'fit-content',
    fontSize: 12,
  };

  const chipGreen = {
    ...chipBaseStyle,
    backgroundColor: '#4caf50',
    color: '#fff',
  };

  const chipBlue = {
    ...chipBaseStyle,
    backgroundColor: '#1976d2',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    gap: 4,
  };

  const chipOutlined = {
    ...chipBaseStyle,
    border: '1px solid #1976d2',
    color: '#1976d2',
    display: 'flex',
    alignItems: 'center',
    gap: 4,
  };

  return (
    <div style={containerStyle}>
      <div style={listStyle}>
        {hackathons.map((hackathon) => (
          <div key={hackathon.id} style={cardStyle}>
            <div style={flexRowResponsive}>
              <div style={leftBoxStyle}>
                <div style={titleStyle}>{hackathon.title}</div>
                <div style={subtitleStyle}>{hackathon.organizer}</div>
                <div style={iconTextRow}>
                  <span role="img" aria-label="trophy">
                    🏆
                  </span>{' '}
                  ${hackathon.prize}
                  <span style={{ marginLeft: 16 }} role="img" aria-label="people">
                    👥
                  </span>{' '}
                  {hackathon.participants}
                </div>
                <div style={deadlineTextStyle}>{hackathon.deadlineText}</div>
                <Button>Join Now</Button>
              </div>
              <div style={dividerStyle} />
              <div style={rightBoxStyle}>
                <div style={{ fontWeight: 'bold' }}>Deadline</div>
                <div style={subtitleStyle}>{hackathon.deadlineFull}</div>

                <div style={chipGreen}>Mode: {hackathon.mode}</div>

                <div style={chipBlue}>
                  🌐 Type: {hackathon.type}
                </div>

                <div style={chipOutlined}>
                  📍 Location
                </div>

                <div>
                  <strong>Skills:</strong> {hackathon.skills.join(', ')}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BodyLayout;
