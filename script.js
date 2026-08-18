document.getElementById('topupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const game = document.getElementById('gameName').value;
    const uid = document.getElementById('playerUid').value;
    const pkg = document.getElementById('packageSelect').value;
    const trx = document.getElementById('trxId').value;

    alert(`ধন্যবাদ! আপনার অর্ডারটি সফলভাবে সাবমিট হয়েছে।\nগেম: ${game}\nUID: ${uid}\nপ্যাকেজ: ${pkg}\nTrxID: ${trx}\n\nআমরা চেক করে দ্রুত ডায়মন্ড/কয়েন পাঠিয়ে দেব।`);
    
    document.getElementById('topupForm').reset();
});
