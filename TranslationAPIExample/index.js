const translateEnglishToHindi = async () => {
	try {
		let input = document.getElementById('text-input').value;
		let res = await fetch("https://translate.argosopentech.com/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        q: input,
        source: "en",
        target: "hi",
      }),
    });
		let data = await res.json();
		document.getElementById('translated-text-display').innerText = data.translatedText
	} catch (err) {
		console.log(err)
	}
}