// app.js
async function searchRepair() {
  const input = document.getElementById('searchInput').value.trim();
  if (!input) return alert('Please enter an IMEI or Work ID');

  const response = await fetch('repairs.json');
  const data = await response.json();
  const result = data.repairs.find(
    (r) => r.imei === input || r.workId === input
  );

  const container = document.getElementById('resultContainer');

  if (!result) {
    container.classList.add('hidden');
    return alert('No repair record found.');
  }

  document.getElementById('imei').textContent = result.imei;
  document.getElementById('workId').textContent = result.workId;
  document.getElementById('deviceName').textContent = result.device;
  document.getElementById('status').textContent = result.status;

  // Reset steps
  const steps = [
    'intransit',
    'warehouse',
    'service',
    'repaired',
    'completed'
  ];
  steps.forEach((step) => {
    document.getElementById(`step-${step}`).classList.remove('active');
  });

  const currentIndex = steps.indexOf(result.status.toLowerCase().replace(/\s+/g, ''));
  steps.forEach((step, index) => {
    if (index <= currentIndex) {
      document.getElementById(`step-${step}`).classList.add('active');
    }
  });

  container.classList.remove('hidden');
}
