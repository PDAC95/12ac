"use client";
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";
function GoogleMap({ location }) {
	return (
		<div className="section">
			<div className="container">
				<div className="aximo-map-wrap">
					<div id="map">
						<GoogleMapReact
							bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }}
							defaultCenter={location.center}
							defaultZoom={location.zoom}
						>
							<LocationPin lat={location.center.lat} lng={location.center.lng} />
						</GoogleMapReact>
					</div>
				</div>
			</div>
		</div>
	);
}

export default GoogleMap;
