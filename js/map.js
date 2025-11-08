// Map functionality for contact page
function initMap() {
    const mapContainer = document.getElementById('map');
    if (mapContainer) {
        // Create an interactive map placeholder
        mapContainer.innerHTML = `
            <div class="map-placeholder">
                <div style="text-align: center; padding: 2rem;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">📍</div>
                    <h3 style="color: #1a1a1a; margin-bottom: 1rem;">Our Location</h3>
                    <p style="color: #666; margin-bottom: 1.5rem; font-size: 1.1rem;">
                        72 Snell Parade, 32 Maluti, South Africa
                    </p>
                    <div class="map-actions" style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                        <a href="https://maps.google.com/?q=72+Snell+Parade+32+Maluti+South+Africa" 
                           target="_blank" 
                           class="btn btn-primary"
                           style="text-decoration: none;">
                            View on Google Maps
                        </a>
                        <a href="https://www.google.com/maps/dir//72+Snell+Parade+32+Maluti+South+Africa" 
                           target="_blank" 
                           class="btn btn-secondary"
                           style="text-decoration: none;">
                            Get Directions
                        </a>
                    </div>
                    <div style="margin-top: 2rem; padding: 1rem; background: #f8f9fa; border-radius: 8px;">
                        <h4 style="color: #1a1a1a; margin-bottom: 0.5rem;">Service Area</h4>
                        <p style="color: #666; margin: 0;">
                            We serve clients throughout South Africa with our professional AC services
                        </p>
                    </div>
                </div>
            </div>
        `;
        
        // Add some interactive elements
        addMapInteractivity();
    }
}

function addMapInteractivity() {
    // Add click handlers for map actions
    const mapActions = document.querySelectorAll('.map-actions a');
    mapActions.forEach(action => {
        action.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        action.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Enhanced Google Maps integration (commented out - ready for implementation)
/*
function initGoogleMap() {
    const mapContainer = document.getElementById('map');
    if (mapContainer && typeof google !== 'undefined') {
        const location = { lat: -26.2041, lng: 28.0473 }; // Johannesburg coordinates
        const map = new google.maps.Map(mapContainer, {
            zoom: 12,
            center: location,
            styles: [
                {
                    "featureType": "all",
                    "elementType": "geometry.fill",
                    "stylers": [{"weight": "2.00"}]
                },
                {
                    "featureType": "all",
                    "elementType": "geometry.stroke",
                    "stylers": [{"color": "#9c9c9c"}]
                }
            ]
        });

        const marker = new google.maps.Marker({
            position: location,
            map: map,
            title: 'Singh Air - Professional AC Services',
            icon: {
                url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTUiIGN5PSIxNSIgcj0iMTQiIGZpbGw9IiNGRkQ3MDAiIHN0cm9rZT0iIzFBQTFFMSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxwYXRoIGQ9Ik0xMSAxMHYxMGg4di0xMGgtOHoiIGZpbGw9IiMxQUExRTEiLz4KPC9zdmc+',
                scaledSize: new google.maps.Size(30, 30)
            }
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `
                <div style="padding: 1rem;">
                    <h3 style="margin: 0 0 0.5rem 0; color: #1a1a1a;">Singh Air</h3>
                    <p style="margin: 0 0 0.5rem 0; color: #666;">72 Snell Parade, 32 Maluti</p>
                    <a href="https://maps.google.com/?q=72+Snell+Parade+32+Maluti" 
                       target="_blank" 
                       style="color: #FFD700; text-decoration: none; font-weight: bold;">
                        Get Directions →
                    </a>
                </div>
            `
        });

        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
    }
}
*/

// Initialize map when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMap);
} else {
    initMap();
}

// Re-initialize map on window resize
window.addEventListener('resize', initMap);