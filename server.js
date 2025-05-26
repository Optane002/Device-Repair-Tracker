// Confirm handover endpoint
app.post('/confirm-handover', (req, res) => {
  const { workid } = req.body;
  const data = JSON.parse(fs.readFileSync('data.json'));
  const repair = data.repairs.find(r => r.workid === workid);
  if (repair) {
    if (repair.handoverConfirmed) {
      return res.status(400).json({ message: 'Handover already confirmed.' });
    }
    repair.handoverConfirmed = true;
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
    return res.status(200).json({ message: 'Handover confirmed.' });
  }
  res.status(404).json({ message: 'Repair order not found.' });
});

