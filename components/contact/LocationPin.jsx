export default function LocationPin() {
	return (
		<div className="pin" style={{
			position: 'absolute',
			transform: 'translate(-50%, -100%)',
			fontSize: '40px',
			color: '#ff4612',
			cursor: 'pointer',
			filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
		}}>
			<i className="fas fa-map-marker-alt"></i>
		</div>
	);
}
