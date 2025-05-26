// app.js
async function searchRepair() {
  const input = document.getElementById('searchInput').value.trim();
  if (!input) return alert('Please enter an IMEI or Work ID');

  const response = await fetch('repairs.json');
  const data = await response.json();
  const result = data.repairs.find(
    (r) => r.imei === input || r.workid === input
  );

  const container = document.getElementById('resultContainer');

  if (!result) {
    container.classList.add('hidden');
    return alert('No repair record found.');
  }

  document.getElementById('imeiDisplay').textContent = result.imei;
  document.getElementById('workidDisplay').textContent = result.workid;
  document.getElementById('brandDisplay').textcontent = result.brand;
  document.getElementById('modelDisplay').textcontent = result.model;
  documemt.getElementById('customernameDisplay').textcontent = result.customername;
  doucment.getElementById('customernumber').textcontent = result.customernumber
  document.getElementById('agentname').textContent = result.agentname;
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

// New: Handle form submission from submitnewrepair.html
function submitRepair(event) {
  event.preventDefault(); // Prevent page reload

  // Gather form input values
  const imei = document.getElementById("imei").value.trim();
  const brand = document.getElementById("brand").value.trim();
  const model = document.getElementByID("model").value.trim();
  const customerName = document.getElementById("customername").value.trim();
  const customerNumber = document.getElementById("customernumber").value.trim();
  const agentName = document.getElementById("agentname").value.trim();
  const faultDesc = document.getElementById("faultydesciption").value.trim();
  const deviceCond = document.getElementById("devicecondition").value.trim();
  const location = document.getElementById("Location").value.trim();
  const locationType = document.getElementById("LocationType").value.trim();
  const serviceCenter = document.getElementById("serviceCenter").value.trim();
  const imageFile = document.getElementById("imageUpload").files[0];

  if (!imei || !customerName || !imageFile) {
    alert("Please fill in all required fields.");
    return;
  }

  // For now: just print to console
  console.log("Repair Submitted:", {
    imei,
    brand,
    model,
    customerName,
    customerNumber,
    agentName,
    faultydesciption,
    devicecondition,
    location,
    locationType,
    serviceCenter,
    imageFile
  });

  // Future: Save to localStorage or send to backend here

  alert("Repair submitted successfully!");
}
