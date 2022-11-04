const FeatureItem = (feature) => {
    const item = feature.feature
	return (
		<div className="feature-item">
			<img src={item.icon} alt="Icon" className="feature-icon" />
			<h3 className="feature-item-title">{item.title}</h3>
			<p>{item.text}</p>
		</div>
	)
}

export default FeatureItem