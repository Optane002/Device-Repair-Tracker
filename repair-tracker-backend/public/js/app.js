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

  document.getElementById('imeiDisplay').textContent = result.imei;
  document.getElementById('workIdDisplay').textContent = result.workId;
  document.getElementById('deviceNameDisplay').textContent = result.device;
  document.getElementById('statusDisplay').textContent = result.status;

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
