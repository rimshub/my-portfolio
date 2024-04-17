import React from 'react';

const GmailCopy = () => {
  const gmailAddress = 'rimmshaa.bibi@gmail.com'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(gmailAddress)
      .then(() => {
        alert('Gmail address copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy:', err);
      });
  };

  return (
    <div onClick={copyToClipboard}>
      {gmailAddress}
    </div>
  );
};

export default GmailCopy;
