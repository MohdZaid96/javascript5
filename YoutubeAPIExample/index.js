const API_KEY = 'YOUR_API_KEY'

const fetchYoutubeVideos = async () => {
	try {
		let q = document.getElementById('search-input').value
		let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${q}&type=video&key=${API_KEY}`)
		let data = await res.json()
		displayVideos(data.items)
	} catch (err) {
		console.log(err)
	}
}

const displayVideos = (videosArray) => {
	let container = document.getElementById('videos-container')
	videosArray.forEach(video => {
		let {
			id: {
				videoId
			}
		} = video
		let videoFrame = document.createElement('iframe')
		videoFrame.width = '600'
		videoFrame.height = '315'
		videoFrame.src = `https://www.youtube.com/embed/${videoId}`
		let br = document.createElement('br')
		container.append(videoFrame, br)
	})
}
