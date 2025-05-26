// workid.js
setTimeout(() => {
  document.getElementById("imei").value = "354293098765432";
  document.getElementById("brand").value = "Samsung"
  document.getElementById("model").value = "A56 5G 8GB 256GB Black"
  document.getElementById("customername").value = "Chamicara De Silva";
  document.getElementById("customernumber").value = "+94777777777";
  document.getElementById("faultydesciption").value = "Screen flickering, occasional shutdown";
  document.getElementById("devicecondition").value = "No physical damage, some dust inside";
  document.getElementById("agentname").value = "Senura De Silva";
  document.getElementById("Location").value = "Nawala";
  document.getElementById("LocationType").value = "warehouse";
  
  // Optional: If LocationType is courier, show service center
  if (document.getElementById("LocationType").value === "courier") {
    document.getElementById("serviceCenterGroup").style.display = "block";
    document.getElementById("serviceCenter").value = "Service Center 1";
  }

  // Hide spinner overlay and unblur form (if applied)
  document.getElementById("loading-overlay")?.style.display = "none";
  document.getElementById("workid-content")?.classList.remove("blurred");
}, 4000);

function submitRepair() {
  alert("Repair submitted successfully! Redirecting to Work ID Screen...");
}
